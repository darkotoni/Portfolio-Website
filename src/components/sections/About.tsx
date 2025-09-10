'use client'

import { Code2, Database, Globe, Brain } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern frameworks and best practices.',
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Extracting insights from complex datasets using Python and statistical methods.',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Expertise in React, Next.js, JavaScript, and responsive design principles.',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Analytical thinking and creative solutions for complex technical challenges.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated full-stack developer with a passion for creating 
                  meaningful digital experiences. My journey in technology spans across 
                  web development, data analysis, and creative problem-solving.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or analyzing interesting datasets. 
                  I believe in continuous learning and staying at the forefront of 
                  technological innovation.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  My goal is to build applications that not only solve real-world 
                  problems but also provide exceptional user experiences. I thrive 
                  in collaborative environments and enjoy turning complex requirements 
                  into elegant, scalable solutions.
                </p>
              </div>
            </div>

            {/* Stats/Quick Facts */}
            <div className="space-y-6">
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">San Diego, CA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium">2+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus</span>
                    <span className="font-medium">Full Stack & Data</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Available</span>
                    <span className="font-medium text-green-500">For Hire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105 transform"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}