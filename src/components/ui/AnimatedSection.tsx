'use client'

import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger'
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { hasAnimated } = useIntersectionObserver(ref, { threshold: 0.1 })

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out'
    
    if (!hasAnimated) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-8`
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-8`
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-8`
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`
        case 'stagger':
          return `${baseClasses} opacity-0 translate-y-4`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: hasAnimated ? `${delay}ms` : '0ms' 
      }}
    >
      {children}
    </div>
  )
}