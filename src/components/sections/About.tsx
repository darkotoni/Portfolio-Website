'use client'

import { Code2, Database, Globe, Brain } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'Product Strategy',
      description: 'Led product discovery with 40+ customer interviews and drove Agile cycles for DoD mission-critical software.',
    },
    {
      icon: Database,
      title: 'AI/ML Expertise',
      description: 'Pursuing MS in AI/ML, evaluating generative AI models and building RAG-powered systems with LangGraph.',
    },
    {
      icon: Globe,
      title: 'Leadership Experience',
      description: 'Led 100+ member organizations and cross-functional teams through complete product lifecycles.',
    },
    {
      icon: Code2,
      title: 'Technical Foundation',
      description: 'Strong programming skills in Python, JavaScript, and C++ with FastAPI, React, and Docker experience.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16" animation="fadeIn">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <AnimatedSection animation="scale" delay={200}>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={400}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Product-minded developer bridging technology and business strategy
              </p>
            </AnimatedSection>
          </AnimatedSection>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Text Content */}
            <AnimatedSection className="space-y-6" animation="slideLeft">
              <div className="prose prose-lg dark:prose-invert">
                <AnimatedSection animation="fadeIn" delay={100}>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                    I'm a Computer Science student at UC San Diego pursuing my BS and MS in AI/ML,
                    with a passion for product management at the intersection of technology and national
                    security. I've served as a National Security Product Intern at the U.S. Department
                    of Defense, where I drove Lean Startup and Agile product development cycles for
                    mission-critical defense software.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={300}>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                    Through 40+ customer discovery interviews with naval officers, I've learned to
                    validate product assumptions, refine problem statements, and prioritize high-impact
                    features. I excel at leading cross-functional teams, defining requirements, and
                    building roadmaps that align usability, technical feasibility, and mission objectives.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={500}>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                    Currently working as an AI Training & Evaluation Specialist at Handshake AI, I evaluate
                    generative AI outputs against quality and alignment criteria, providing feedback that
                    informs model tuning and product evaluation frameworks. I'm passionate about building
                    products that solve real problems through user-centered design and data-driven decision making.
                  </p>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Stats/Quick Facts */}
            <AnimatedSection className="space-y-6" animation="slideRight" delay={200}>
              <div className="glass-effect rounded-lg p-6 hover-lift will-change-transform">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <AnimatedSection animation="slideUp" delay={400}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium">San Ramon, CA</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="slideUp" delay={500}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Education</span>
                      <span className="font-medium">UCSD CS (3.5 GPA)</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="slideUp" delay={600}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Focus</span>
                      <span className="font-medium">Product Management</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="slideUp" delay={700}>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Current Role</span>
                      <span className="font-medium text-green-500">AI Training Specialist</span>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon
              return (
                <AnimatedSection
                  key={index}
                  animation="stagger"
                  delay={index * 100}
                  className="text-center p-4 lg:p-6 rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105 transform hover-lift will-change-transform group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}