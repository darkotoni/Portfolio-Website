'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Download, Sparkles } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ['Product Manager', 'Full Stack Developer', 'Quantitative Analyst']

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <AnimatedSection className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0" animation="slideUp">
            <div className="relative">
              {/* Sparkle decorations */}
              <div className="absolute -top-4 -left-4 text-yellow-400 animate-pulse-slow">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="absolute -top-2 right-1/4 text-blue-400 animate-bounce-soft">
                <Sparkles className="h-4 w-4" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 will-change-transform">
                <AnimatedSection animation="slideLeft" delay={100}>
                  Hi, I'm{' '}
                </AnimatedSection>
                <AnimatedSection animation="scale" delay={300}>
                  <span className="gradient-text block lg:inline">
                    Darian Tan
                  </span>
                </AnimatedSection>
              </h1>
              
              <AnimatedSection animation="slideUp" delay={500}>
                <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-10 relative">
                  <span className="border-r-2 border-primary animate-pulse">
                    {text}
                  </span>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeIn" delay={700}>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                  I bridge technology and business strategy to create impactful products. As a 
                  CS student at UCSD and Quantitative Analyst at the Sustainable Investment Group, 
                  I combine technical expertise with product thinking to drive data-driven decisions 
                  and deliver exceptional user experiences.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="slideUp" delay={900}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#projects"
                    className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 transform font-medium btn-primary will-change-transform relative overflow-hidden"
                  >
                    <span className="relative z-10">View My Work</span>
                  </a>
                  
                  <a
                    href="/Darian_s_Resume.pdf"
                    download
                    className="group px-8 py-3 border border-border rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105 transform font-medium flex items-center justify-center gap-2 hover-lift will-change-transform"
                  >
                    <Download className="h-4 w-4 group-hover:animate-bounce-soft" />
                    Download Resume
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Profile Image/Animation */}
          <AnimatedSection className="lg:w-1/2 flex justify-center" animation="scale" delay={400}>
            <div className="relative group">
              {/* Main profile container */}
              <div className="w-80 h-80 bg-gradient-to-br from-primary via-accent to-secondary rounded-full animate-float relative overflow-hidden will-change-transform shadow-2xl">
                <div className="absolute inset-4 bg-background rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="/images/headshot.jpg" 
                    alt="Darian Tan - Professional Headshot"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-1 rounded-full bg-background"></div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce-soft shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse-slow delay-1000 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-accent to-secondary rounded-full"></div>
              </div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-secondary rounded-full animate-bounce delay-500 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-primary rounded-full"></div>
              </div>
              <div className="absolute top-1/4 -right-6 w-3 h-3 bg-yellow-400 rounded-full animate-ping delay-700"></div>
              <div className="absolute bottom-1/4 right-0 w-5 h-5 bg-blue-400 rounded-full animate-pulse delay-300 shadow-lg"></div>
              
              {/* Orbital elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-8 left-1/2 w-2 h-2 bg-primary rounded-full shadow-lg"></div>
                <div className="absolute bottom-8 left-1/2 w-2 h-2 bg-accent rounded-full shadow-lg"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}