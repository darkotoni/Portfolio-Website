'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dariantan7@gmail.com',
      href: 'mailto:dariantan7@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Ramon, CA',
      href: null,
      color: 'text-green-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (925) 364-0754',
      href: 'tel:+19253640754',
      color: 'text-purple-500'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/darkotoni',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/darian-tan/',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      href: '#antoni2670',
      color: 'hover:text-indigo-600'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // You would typically send this data to your backend or email service
    alert('Message sent successfully! I\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together 
              to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me more about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] transform font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon
                    const content = (
                      <div className="flex items-center space-x-4 group">
                        <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 ${item.color} group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    )

                    return item.href ? (
                      <a key={index} href={item.href} className="block hover:bg-accent/50 p-2 -m-2 rounded-lg transition-colors">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>
                        {content}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-lg bg-secondary hover:bg-accent transition-all duration-200 hover:scale-110 transform ${link.color}`}
                        title={link.label}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    )
                  })}
                </div>

                <p className="text-muted-foreground text-sm mt-4">
                  Feel free to reach out through any of these platforms. 
                  I'm always happy to connect and discuss new opportunities!
                </p>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-green-700 dark:text-green-400">
                    Currently Available
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm actively seeking new opportunities and exciting projects. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}