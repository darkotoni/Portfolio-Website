// EmailJS configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key, Service ID, and Template ID
// 5. Add them to your environment variables or replace the placeholders below

export const emailjsConfig = {
  // EmailJS credentials loaded from environment variables
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
}

// Email template parameters
export interface EmailTemplateParams {
  from_name: string
  from_email: string
  subject: string
  message: string
  to_email?: string
}