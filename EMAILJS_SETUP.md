# EmailJS Setup Guide

Your contact form is now configured to send emails using EmailJS. Follow these steps to complete the setup:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:** New message from {{from_name}} - {{subject}}

**Body:**
```
You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Note down your **Template ID**

## 4. Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

## 5. Set Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## 6. Update Configuration (Alternative)
If you don't want to use environment variables, edit `src/lib/emailjs.ts` and replace the placeholders with your actual values:

```typescript
export const emailjsConfig = {
  publicKey: 'your_public_key_here',
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here',
}
```

## 7. Test the Form
1. Run your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Important Notes
- EmailJS free plan allows 200 emails/month
- Messages will be sent to: `dariantan7@gmail.com`
- Form includes error handling and success/failure messages
- All email sending happens client-side (no backend required)

## Troubleshooting
- Make sure your email service is properly configured in EmailJS
- Check browser console for any error messages
- Verify your Public Key, Service ID, and Template ID are correct
- Ensure your email template uses the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`