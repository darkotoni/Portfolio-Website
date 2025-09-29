import emailjs from '@emailjs/browser'
import { emailjsConfig, EmailTemplateParams } from './emailjs'

export const sendEmail = async (formData: EmailTemplateParams): Promise<boolean> => {
  try {
    // Validate that all required credentials are available
    if (!emailjsConfig.publicKey || !emailjsConfig.serviceId || !emailjsConfig.templateId) {
      console.error('EmailJS credentials are missing. Please check your environment variables.')
      return false
    }

    // Initialize EmailJS with your public key
    emailjs.init(emailjsConfig.publicKey)

    // Send the email
    await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'dariantan7@gmail.com', // Your email where messages will be sent
      }
    )

    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}