'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/darkotoni',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/darkotoni',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:darko.toni@example.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Darko Toni. Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and Next.js</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent transition-all duration-200 hover:scale-110 transform"
                  aria-label={link.name}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}