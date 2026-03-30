'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/947XXXXXXXX?text=Hello%20Weera%20Solution'

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
