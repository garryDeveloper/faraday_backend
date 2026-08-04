export const CAMPAIGN_CONTACT_STATUSES = [
  'nuevo',
  'contactado',
  'interesado',
  'seguimiento',
  'no_respondio',
  'no_interesado',
  'ganado',
  'perdido',
] as const

export type CampaignContactStatus = (typeof CAMPAIGN_CONTACT_STATUSES)[number]

const LABELS: Record<string, Record<CampaignContactStatus, string>> = {
  es: {
    nuevo: 'Nuevo',
    contactado: 'Contactado',
    interesado: 'Interesado',
    seguimiento: 'Seguimiento',
    no_respondio: 'No respondió',
    no_interesado: 'No interesado',
    ganado: 'Ganado',
    perdido: 'Perdido',
  },
  en: {
    nuevo: 'New',
    contactado: 'Contacted',
    interesado: 'Interested',
    seguimiento: 'Follow-up',
    no_respondio: 'No response',
    no_interesado: 'Not interested',
    ganado: 'Won',
    perdido: 'Lost',
  },
}

export function getCampaignContactStatuses(language?: string | null) {
  const labels = LABELS[language ?? 'es'] ?? LABELS.es

  return CAMPAIGN_CONTACT_STATUSES.map((status) => ({
    value: status,
    label: labels[status],
  }))
}
