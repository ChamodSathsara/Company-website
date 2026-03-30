'use client'

import { ReactNode } from 'react'
import { useState } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
  onHoverScale?: boolean
}

export function AnimatedCard({ 
  children, 
  delay = 0, 
  className = '', 
  onHoverScale = true 
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className={`
        transition-all duration-700 opacity-0 translate-y-4
        ${isVisible ? 'opacity-100 translate-y-0' : ''}
        ${onHoverScale ? 'hover:scale-105' : ''}
        ${className}
      `}
      style={{
        transitionDelay: `${delay * 100}ms`,
      }}
      onAnimationEnd={() => setIsVisible(true)}
      onLoad={() => setIsVisible(true)}
    >
      {children}
    </div>
  )
}

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  duration?: number
}

export function FadeIn({ 
  children, 
  delay = 0, 
  className = '',
  duration = 600,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className={`
        transition-opacity
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      onLoad={() => setIsVisible(true)}
    >
      {children}
    </div>
  )
}
