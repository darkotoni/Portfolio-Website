'use client'

import { ExternalLink, Github, Users } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  features: string[]
  liveUrl: string | null
  githubUrl: string
  category: string
  status: string
  teamSize: string
  highlights: string[]
}

interface ProjectCardProps {
  project: Project
  onViewDetails: (project: Project) => void
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/80">
          {project.title.split(' ').map(word => word[0]).join('').substring(0, 2)}
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-4 w-4 text-white" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="px-2 py-1 bg-accent rounded-full text-xs">
                {project.category}
              </span>
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{project.teamSize}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => onViewDetails(project)}
            className="text-primary hover:text-primary/80 text-sm font-medium hover:underline"
          >
            View Details →
          </button>
          
          <div className="flex items-center space-x-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-accent rounded-full transition-colors"
              title="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent rounded-full transition-colors"
                title="View Live Project"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}