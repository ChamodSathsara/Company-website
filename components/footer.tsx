'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-purple-950/20 to-transparent dark:from-purple-900/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Weera Solution
            </h3>
            <p className="text-sm text-foreground/60">
              Building premium digital solutions for modern businesses
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'POS Systems', 'ERP Systems'].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0" />
                <a
                  href="mailto:hello@weerasolution.com"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  hello@weerasolution.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0" />
                <a
                  href="tel:+94700000000"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  +94 (0) 700 000 000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0" />
                <span className="text-sm text-foreground/60">Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {currentYear} Weera Solution. All rights reserved.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center hover:glow-primary transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-purple-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
