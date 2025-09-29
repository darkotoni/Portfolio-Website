'use client'

import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle } from 'lucide-react'

export default function Contact() {

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
              Let's connect! Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
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

            {/* Social Links & Availability */}
            <div className="space-y-8">
              {/* Social Links */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>

                <div className="flex space-x-4 mb-4">
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

                <p className="text-muted-foreground text-sm">
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