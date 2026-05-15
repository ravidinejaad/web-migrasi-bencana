import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Flame, Activity } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background SVG Illustration */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="skyGrad" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#1E3A5F" />
              <stop offset="100%" stopColor="#0F1C2E" />
            </radialGradient>
            <radialGradient id="fireGlow" cx="70%" cy="80%" r="40%">
              <stop offset="0%" stopColor="#EA580C" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="dustGlow" cx="30%" cy="60%" r="35%">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a2a3a" />
              <stop offset="100%" stopColor="#0a1520" />
            </linearGradient>
            <linearGradient id="buildingLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#243B55" />
              <stop offset="100%" stopColor="#1a2d42" />
            </linearGradient>
            <linearGradient id="buildingRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E3A5F" />
              <stop offset="100%" stopColor="#152840" />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Sky */}
          <rect width="1440" height="900" fill="url(#skyGrad)" />

          {/* Ambient glow effects */}
          <ellipse cx="1010" cy="750" rx="380" ry="280" fill="url(#fireGlow)" />
          <ellipse cx="420" cy="600" rx="320" ry="220" fill="url(#dustGlow)" />

          {/* Stars */}
          {[...Array(30)].map((_, i) => (
            <circle
              key={i}
              cx={60 + (i * 47) % 1320}
              cy={20 + (i * 31) % 220}
              r={0.8 + (i % 3) * 0.5}
              fill="white"
              opacity={0.3 + (i % 4) * 0.15}
            />
          ))}

          {/* Ground */}
          <rect x="0" y="720" width="1440" height="180" fill="url(#groundGrad)" />

          {/* Cracked ground lines */}
          <polyline points="200,730 240,745 280,730" stroke="#2D4A6B" strokeWidth="2" fill="none" opacity="0.6" />
          <polyline points="600,725 650,738 700,725" stroke="#2D4A6B" strokeWidth="1.5" fill="none" opacity="0.5" />
          <polyline points="900,730 940,742 980,730" stroke="#2D4A6B" strokeWidth="2" fill="none" opacity="0.6" />

          {/* Left Building - cracked/damaged */}
          <rect x="60" y="300" width="160" height="420" fill="url(#buildingLeft)" />
          <rect x="60" y="300" width="160" height="420" fill="none" stroke="#2D5282" strokeWidth="1" opacity="0.4" />
          {/* Windows */}
          {[0, 1, 2, 3, 4].map(row =>
            [0, 1, 2].map(col => (
              <rect
                key={`wl-${row}-${col}`}
                x={78 + col * 48}
                y={320 + row * 70}
                width={30}
                height={38}
                fill={row === 3 && col === 1 ? '#EA580C' : '#1E3A5F'}
                opacity={row === 3 && col === 1 ? 0.9 : 0.5}
                rx="2"
              />
            ))
          )}
          {/* Crack on building */}
          <polyline points="120,300 108,380 130,450 115,520" stroke="#DC2626" strokeWidth="2" fill="none" opacity="0.5" />

          {/* Center Building - tallest */}
          <rect x="560" y="180" width="200" height="540" fill="#162436" />
          <rect x="560" y="180" width="200" height="540" fill="none" stroke="#2D5282" strokeWidth="1" opacity="0.3" />
          {[0, 1, 2, 3, 4, 5, 6].map(row =>
            [0, 1, 2, 3].map(col => (
              <rect
                key={`wc-${row}-${col}`}
                x={572 + col * 46}
                y={200 + row * 68}
                width={28}
                height={38}
                fill={
                  (row === 5 && col === 1) || (row === 6 && col === 2)
                    ? '#EA580C'
                    : (row >= 4 && col === 3)
                    ? '#DC2626'
                    : '#1E3A5F'
                }
                opacity={0.7}
                rx="2"
              />
            ))
          )}

          {/* Right Building */}
          <rect x="1160" y="250" width="220" height="470" fill="url(#buildingRight)" />
          {[0, 1, 2, 3, 4].map(row =>
            [0, 1, 2, 3].map(col => (
              <rect
                key={`wr-${row}-${col}`}
                x={1172 + col * 50}
                y={270 + row * 78}
                width={32}
                height={44}
                fill="#1E3A5F"
                opacity={0.55}
                rx="2"
              />
            ))
          )}

          {/* Small buildings */}
          <rect x="270" y="440" width="120" height="280" fill="#1a2d42" />
          <rect x="870" y="400" width="140" height="320" fill="#1a2d42" />

          {/* Fire flames on right building */}
          <g opacity="0.85">
            <ellipse cx="1050" cy="680" rx="60" ry="80" fill="#DC2626" opacity="0.7" />
            <ellipse cx="1030" cy="650" rx="40" ry="65" fill="#EA580C" opacity="0.8" />
            <ellipse cx="1070" cy="660" rx="35" ry="70" fill="#F97316" opacity="0.75" />
            <ellipse cx="1050" cy="630" rx="25" ry="55" fill="#FCD34D" opacity="0.5" />
            {/* Secondary fire */}
            <ellipse cx="960" cy="700" rx="45" ry="60" fill="#DC2626" opacity="0.6" />
            <ellipse cx="950" cy="675" rx="30" ry="50" fill="#EA580C" opacity="0.7" />
          </g>

          {/* Smoke clouds */}
          <g filter="url(#blur)" opacity="0.45">
            <ellipse cx="1050" cy="560" rx="100" ry="55" fill="#374151" />
            <ellipse cx="1000" cy="510" rx="80" ry="45" fill="#4B5563" />
            <ellipse cx="1100" cy="490" rx="90" ry="50" fill="#374151" />
            <ellipse cx="1050" cy="440" rx="70" ry="40" fill="#6B7280" />
          </g>

          {/* Dust/debris cloud on left */}
          <g filter="url(#blur)" opacity="0.3">
            <ellipse cx="350" cy="580" rx="140" ry="70" fill="#94a3b8" />
            <ellipse cx="300" cy="540" rx="100" ry="55" fill="#cbd5e1" />
          </g>

          {/* Ground debris */}
          <rect x="320" y="715" width="40" height="8" fill="#2D4A6B" rx="2" transform="rotate(-12 320 715)" opacity="0.7" />
          <rect x="700" y="718" width="55" height="6" fill="#2D4A6B" rx="2" transform="rotate(8 700 718)" opacity="0.6" />
          <rect x="1080" y="714" width="35" height="7" fill="#2D4A6B" rx="2" transform="rotate(-5 1080 714)" opacity="0.7" />

          {/* Evacuation sign icon suggestion */}
          <g transform="translate(680, 620)">
            <rect width="50" height="50" rx="8" fill="#EA580C" opacity="0.9" />
            <text x="25" y="34" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">⚠</text>
          </g>

          {/* Emergency lights */}
          <circle cx="320" cy="460" r="4" fill="#EA580C" opacity="0.8" />
          <circle cx="1100" cy="380" r="4" fill="#DC2626" opacity="0.9" />
        </svg>

        {/* Dark + gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navydark/40 via-transparent to-brand-red/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 text-white">
        <motion.div {...fadeUp(0.1)} className="mb-4">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-display font-600 text-white/90">
            <Activity className="w-4 h-4 text-brand-orange" />
            Edukasi Resmi Mitigasi Bencana
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 leading-tight mb-6"
        >
          Belajar{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
            Menyelamatkan Diri
          </span>
          <br />
          Saat Bencana
        </motion.h1>

        <motion.p
          {...fadeUp(0.32)}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-body"
        >
          Pelajari langkah-langkah menghadapi gempa bumi dan kebakaran dengan mudah, aman, dan mudah dipahami — termasuk{' '}
          <span className="text-white font-600">mengapa setiap langkah itu penting.</span>
        </motion.p>

        <motion.div {...fadeUp(0.44)} className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo('#gempa')}
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-navy to-brand-navylight hover:from-brand-navylight hover:to-brand-navy text-white font-display font-700 text-base px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200 border border-white/20"
          >
            <Activity className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            Pelajari Gempa
          </button>
          <button
            onClick={() => scrollTo('#kebakaran')}
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-brand-orange hover:from-brand-orange hover:to-brand-red text-white font-display font-700 text-base px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200"
          >
            <Flame className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Pelajari Kebakaran
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
        >
          <span className="text-xs font-body">Scroll ke bawah</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
