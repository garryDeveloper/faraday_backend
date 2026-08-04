import { TemplateButton, TemplateCategory, TemplateContent, TemplateStatus, TemplateVariable, WhatsAppTemplate } from "../../dto/whatsapp_template.ts";

const VARIABLE_REGEX = /\{\{(\d+)\}\}/g;

export function mapMetaTemplate(meta: any): WhatsAppTemplate {
  const content: TemplateContent = {
    body: {
      text: '',
      variables: [],
    },
    buttons: [],
  };

  for (const component of meta.components ?? []) {
    switch (component.type) {
      case 'HEADER':
        content.header = {
          format: component.format.toLowerCase(),
          text: component.text,
        };
        break;

      case 'BODY':
        content.body = {
          text: component.text,
          variables: extractVariables(component.text),
        };
        break;

      case 'FOOTER':
        content.footer = {
          text: component.text,
        };
        break;

      case 'BUTTONS':
        content.buttons = (component.buttons ?? []).map(mapButton);
        break;
    }
  }

  return {
    id: crypto.randomUUID(),
    metaId: meta.id,

    name: meta.name,

    language: meta.language,

    category: mapCategory(meta.category),

    status: mapStatus(meta.status),

    preview: buildPreview(content),

    content,

    updatedAt: meta.updated_time,
  };
}

function extractVariables(text: string): TemplateVariable[] {
  return [...text.matchAll(VARIABLE_REGEX)].map(match => ({
    index: Number(match[1]),
  }));
}

function mapButton(button: any): TemplateButton {
  switch (button.type) {
    case 'QUICK_REPLY':
      return {
        type: 'quick_reply',
        text: button.text,
      };

    case 'URL':
      return {
        type: 'url',
        text: button.text,
        url: button.url,
      };

    case 'PHONE_NUMBER':
      return {
        type: 'phone',
        text: button.text,
        phoneNumber: button.phone_number,
      };

    default:
      throw new Error(`Unsupported button type: ${button.type}`);
  }
}

function mapCategory(category: string): TemplateCategory {
  switch (category) {
    case 'MARKETING':
      return 'marketing';

    case 'UTILITY':
      return 'utility';

    case 'AUTHENTICATION':
      return 'authentication';

    default:
      return 'unknown';
  }
}

function mapStatus(status: string): TemplateStatus {
  switch (status) {
    case 'APPROVED':
      return 'approved';

    case 'PENDING':
      return 'pending';

    case 'REJECTED':
      return 'rejected';

    case 'DISABLED':
      return 'disabled';

    default:
      return 'unknown';
  }
}

function buildPreview(content: TemplateContent): string {
  return [
    content.header?.text,
    content.body.text,
    content.footer?.text,
  ]
    .filter(Boolean)
    .join('\n');
}