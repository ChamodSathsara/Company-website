'use client'

import { ReactNode, useState } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group glass rounded-lg p-6 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center mb-4 transition-all duration-300 ${isHovered ? 'shadow-lg shadow-purple-500/50 scale-110' : ''}`}>
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
