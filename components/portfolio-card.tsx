'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface PortfolioCardProps {
  image: string
  title: string
  description: string
  tags: string[]
}

export function PortfolioCard({ image, title, description, tags }: PortfolioCardProps) {
  return (
    <div className="group glass rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
