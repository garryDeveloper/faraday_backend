import env from '#start/env'

export default {
  apiVersion: env.get('WHATSAPP_API_VERSION', 'v25.0'),
  phoneNumberId: env.get('WHATSAPP_PHONE_NUMBER_ID'),
  businessAccountId: env.get('WHATSAPP_BUSINESS_ACCOUNT_ID'),
  accessToken: env.get('WHATSAPP_ACCESS_TOKEN'),
  baseUrl: env.get('WHATSAPP_API_BASE_URL', 'https://graph.facebook.com'),
  webhookVerifyToken: env.get('WHATSAPP_WEBHOOK_VERIFY_TOKEN', ''),
}
