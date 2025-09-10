'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Download } from 'lucide-react'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ['Full Stack Developer', 'Python Developer', 'Data Analyst', 'Problem Solver']

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
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Darko Toni
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-10">
                <span className="border-r-2 border-primary animate-pulse">
                  {text}
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                I craft digital experiences with modern technologies. Passionate about 
                creating efficient solutions that make a difference. From full-stack 
                development to data analysis, I turn ideas into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 transform font-medium"
                >
                  View My Work
                </a>
                
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-all duration-200 hover:scale-105 transform font-medium flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image/Animation */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Placeholder for profile image - replace with actual image */}
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-full animate-float relative overflow-hidden">
                <div className="absolute inset-4 bg-background rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold gradient-text">DT</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-secondary rounded-full animate-pulse delay-500" />
            </div>
          </div>
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