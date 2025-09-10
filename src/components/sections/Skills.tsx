'use client'

import { useState } from 'react'
import { skillCategories, softSkills, certifications } from '@/data/skills'
import { Award } from 'lucide-react'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = ['Technical Skills', 'Soft Skills', 'Certifications']

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional capabilities
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-secondary rounded-lg p-1">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Technical Skills Tab */}
            {activeTab === 0 && (
              <div className="grid lg:grid-cols-2 gap-8">
                {skillCategories.map((category, categoryIndex) => (
                  <div 
                    key={categoryIndex}
                    className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="group">
                          <div className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-accent/30 transition-colors duration-200">
                            <div className="flex items-center space-x-3">
                              <div 
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: skill.color }}
                              />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.experience}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Soft Skills Tab */}
            {activeTab === 1 && (
              <div className="max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 text-center border border-border hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-semibold">
                          {skill.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <h4 className="font-medium">{skill}</h4>
                    </div>
                  ))}
                </div>
                
                {/* Soft Skills Description */}
                <div className="mt-12 text-center">
                  <div className="glass-effect rounded-lg p-8 max-w-2xl mx-auto">
                    <h3 className="text-xl font-semibold mb-4">Beyond Technical Skills</h3>
                    <p className="text-muted-foreground">
                      I believe that technical expertise is only part of the equation. 
                      Effective communication, collaborative teamwork, and strong problem-solving 
                      abilities are essential for delivering successful projects and creating 
                      positive working relationships.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === 2 && (
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-sm text-muted-foreground">{cert.year}</span>
                      </div>
                      
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  ))}
                </div>

                {/* Learning Philosophy */}
                <div className="mt-12 text-center">
                  <div className="glass-effect rounded-lg p-8 max-w-2xl mx-auto">
                    <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      Technology evolves rapidly, and I'm committed to staying current with 
                      industry trends and best practices. I regularly pursue new certifications 
                      and learning opportunities to enhance my skills and deliver better solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}