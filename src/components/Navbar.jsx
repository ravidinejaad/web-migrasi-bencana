import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldAlert, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Gempa Bumi', href: '#gempa' },
  { label: 'Kebakaran', href: '#kebakaran' },
  { label: 'Tentang', href: '#tentang' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#beranda')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setActive(href)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#beranda')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-5 h-5 text-white" />
              </div>
              <span
                className={`font-display font-800 text-base md:text-lg leading-tight transition-colors ${
                  scrolled ? 'text-brand-navy' : 'text-white'
                }`}
              >
                Edukasi<br className="hidden sm:block md:hidden" />
                <span className="hidden sm:inline md:inline"> </span>
                <span className="text-brand-orange">Mitigasi</span>{' '}
                Bencana
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 rounded-lg font-display font-600 text-sm transition-all duration-200
                    ${
                      active === link.href
                        ? 'text-brand-orange'
                        : scrolled
                        ? 'text-slate-600 hover:text-brand-navy'
                        : 'text-white/90 hover:text-white'
                    }
                  `}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-brand-orange"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-brand-navy' : 'text-white'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white shadow-xl border-b border-slate-100 md:hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-display font-600 text-base transition-colors ${
                    active === link.href
                      ? 'bg-orange-50 text-brand-orange'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
