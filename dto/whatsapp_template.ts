export type TemplateCategory =
  | 'marketing'
  | 'utility'
  | 'authentication'
  | 'unknown';

export type TemplateStatus =
  | 'approved'
  | 'pending'
  | 'rejected'
  | 'disabled'
  | 'unknown';

export interface WhatsAppTemplate {
  id: string;
  metaId: string;

  name: string;

  language: string;

  category: TemplateCategory;

  status: TemplateStatus;

  content: TemplateContent;

  preview: string;

  updatedAt?: string;
}

export interface TemplateContent {
  header?: HeaderComponent;
  body: BodyComponent;
  footer?: FooterComponent;
  buttons: TemplateButton[];
}

export interface HeaderComponent {
  format: 'text' | 'image' | 'video' | 'document';
  text?: string;
}

export interface BodyComponent {
  text: string;
  variables: TemplateVariable[];
}

export interface FooterComponent {
  text: string;
}

export interface TemplateVariable {
  index: number;
}

export type TemplateButton =
  | QuickReplyButton
  | UrlButton
  | PhoneButton;

export interface QuickReplyButton {
  type: 'quick_reply';
  text: string;
}

export interface UrlButton {
  type: 'url';
  text: string;
  url: string;
}

export interface PhoneButton {
  type: 'phone';
  text: string;
  phoneNumber: string;
}