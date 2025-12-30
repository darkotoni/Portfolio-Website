'use client'

import { useState, useEffect } from 'react'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ['Product Manager', 'AI Product Manager', 'Full Stack Developer', 'Quantitative Analyst']

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  })
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Simple Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="gradient-text block lg:inline">
                  Darian Tan
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-10 relative">
                <span className="border-r-2 border-primary animate-pulse">
                  {text}
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                I bridge technology and business strategy to create impactful products. As a
                CS student at UCSD (BS/MS AI/ML) and AI Training Specialist at Handshake AI,
                I combine technical expertise with product thinking to drive data-driven decisions.
                Previously drove product development for mission-critical defense software at the U.S. Department of Defense.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
                >
                  View My Work
                </a>
                
                <a
                  href="/Darian_s_Resume.pdf"
                  download
                  className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary via-accent to-secondary rounded-full relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-4 bg-background rounded-full overflow-hidden">
                    <img 
                      src="/images/headshot.jpg" 
                      alt="Darian Tan - Professional Headshot"
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <Footer />
    </main>
  )
}