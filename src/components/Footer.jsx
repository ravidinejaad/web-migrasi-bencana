import React from 'react'
import { ShieldAlert, Heart } from 'lucide-react'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Gempa Bumi', href: '#gempa' },
  { label: 'Kebakaran', href: '#kebakaran' },
  { label: 'Tentang', href: '#tentang' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-navydark text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-800 text-lg">
                Edukasi <span className="text-brand-orange">Mitigasi</span> Bencana
              </span>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-sm">
              Media edukasi mitigasi bencana untuk membantu masyarakat Indonesia memahami cara menghadapi gempa bumi dan kebakaran dengan tepat dan aman.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider text-white/40 mb-4">Menu</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-white/70 hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-sm font-body">
          <span>© 2026 Edukasi Mitigasi Bencana. Semua hak dilindungi.</span>
          <span className="flex items-center gap-1.5">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-brand-red fill-brand-red" /> untuk keselamatan Indonesia
          </span>
        </div>
      </div>
    </footer>
  )
}
