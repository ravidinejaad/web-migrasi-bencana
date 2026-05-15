import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Flame, ArrowRight } from 'lucide-react'

function EarthquakeSVG() {
  return (
    <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="eqSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#2D5282" />
        </linearGradient>
        <linearGradient id="eqGround" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a2a3a" />
          <stop offset="100%" stopColor="#0f1a26" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#eqSky)" />
      {/* Seismic wave lines */}
      <polyline points="0,150 40,130 80,170 120,120 160,160 200,140 240,175 280,125 320,155 360,135 400,165 440,130 480,155 520,140 560,160 600,145" stroke="#EA580C" strokeWidth="3" fill="none" opacity="0.6" />
      <polyline points="0,180 50,165 100,195 150,155 200,185 250,170 300,195 350,165 400,188 450,162 500,185 550,170 600,180" stroke="#DC2626" strokeWidth="2" fill="none" opacity="0.4" />
      {/* Buildings */}
      <rect x="80" y="100" width="80" height="170" fill="#162436" />
      <rect x="250" y="60" width="100" height="210" fill="#1a2d42" />
      <rect x="430" y="90" width="90" height="180" fill="#162436" />
      {/* Cracks */}
      <polyline points="120,100 108,160 128,220" stroke="#DC2626" strokeWidth="2.5" fill="none" opacity="0.7" />
      {/* Ground */}
      <rect x="0" y="260" width="600" height="40" fill="url(#eqGround)" />
      {/* Crack in ground */}
      <path d="M 200 260 Q 280 255 350 262 Q 400 268 450 260" stroke="#EA580C" strokeWidth="3" fill="none" opacity="0.6" />
      {/* Dust particles */}
      {[1,2,3,4,5].map(i => (
        <circle key={i} cx={60 + i*90} cy={230 + (i%3)*10} r="3" fill="#94a3b8" opacity="0.5" />
      ))}
    </svg>
  )
}

function FireSVG() {
  return (
    <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="fireSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1C1917" />
          <stop offset="100%" stopColor="#292524" />
        </linearGradient>
        <radialGradient id="mainFireGlow" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="300" fill="url(#fireSky)" />
      <rect width="600" height="300" fill="url(#mainFireGlow)" />
      {/* Building */}
      <rect x="180" y="60" width="240" height="220" fill="#1C1917" />
      {/* Windows - some lit orange */}
      {[0,1,2,3].map(row => [0,1,2,3].map(col => (
        <rect key={`${row}-${col}`}
          x={196 + col*52} y={76 + row*50}
          width={34} height={36}
          fill={row >= 2 ? '#EA580C' : '#2d2520'}
          opacity={row >= 2 ? 0.9 : 0.5}
          rx="2"
        />
      )))}
      {/* Fire flames */}
      <ellipse cx="300" cy="240" rx="90" ry="90" fill="#DC2626" opacity="0.8" />
      <ellipse cx="300" cy="215" rx="70" ry="75" fill="#EA580C" opacity="0.85" />
      <ellipse cx="280" cy="195" rx="50" ry="65" fill="#F97316" opacity="0.85" />
      <ellipse cx="320" cy="200" rx="45" ry="60" fill="#F97316" opacity="0.8" />
      <ellipse cx="300" cy="170" rx="32" ry="52" fill="#FCD34D" opacity="0.6" />
      {/* Side fire */}
      <ellipse cx="170" cy="265" rx="55" ry="55" fill="#DC2626" opacity="0.6" />
      <ellipse cx="430" cy="260" rx="50" ry="50" fill="#EA580C" opacity="0.55" />
      {/* Smoke */}
      <ellipse cx="300" cy="100" rx="80" ry="40" fill="#374151" opacity="0.5" />
      <ellipse cx="270" cy="70" rx="60" ry="32" fill="#4B5563" opacity="0.4" />
      <ellipse cx="330" cy="50" rx="55" ry="30" fill="#374151" opacity="0.35" />
    </svg>
  )
}

const disasters = [
  {
    id: 'gempa',
    href: '#gempa',
    Icon: Activity,
    title: 'Gempa Bumi',
    desc: 'Pelajari penyebab, dampak, dan cara melindungi diri saat gempa bumi terjadi di sekitar Anda.',
    btnLabel: 'Pelajari Sekarang',
    accent: 'from-brand-navy to-brand-navylight',
    badge: 'bg-blue-100 text-brand-navy',
    badgeLabel: 'Bencana Alam',
    Illustration: EarthquakeSVG,
    ring: 'group-hover:ring-brand-navy/20',
  },
  {
    id: 'api',
    href: '#kebakaran',
    Icon: Flame,
    title: 'Kebakaran',
    desc: 'Pelajari tindakan penyelamatan diri yang tepat saat menghadapi bahaya kebakaran.',
    btnLabel: 'Pelajari Sekarang',
    accent: 'from-brand-red to-brand-orange',
    badge: 'bg-red-100 text-brand-red',
    badgeLabel: 'Bencana Buatan',
    Illustration: FireSVG,
    ring: 'group-hover:ring-brand-red/20',
  },
]

export default function DisasterCards() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-divider w-16 mx-auto mb-6" />
          <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-4">
            Pilih Topik <span className="text-gradient-fire">Bencana</span>
          </h2>
          <p className="font-body text-slate-500 text-lg max-w-xl mx-auto">
            Dua jenis bencana yang paling sering terjadi dan perlu diwaspadai di Indonesia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disasters.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
              className={`group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ring-4 ring-transparent ${d.ring} cursor-pointer`}
              onClick={() => scrollTo(d.href)}
            >
              {/* Image area */}
              <div className="relative h-52 overflow-hidden">
                <d.Illustration />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent`} />
                <div className="absolute top-4 left-4">
                  <span className={`${d.badge} font-display font-600 text-xs px-3 py-1 rounded-full`}>
                    {d.badgeLabel}
                  </span>
                </div>
                <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${d.accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <d.Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-800 text-2xl text-brand-navy mb-2">{d.title}</h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed mb-5">{d.desc}</p>
                <button
                  className={`group/btn flex items-center gap-2 bg-gradient-to-r ${d.accent} text-white font-display font-600 text-sm px-5 py-2.5 rounded-xl shadow hover:shadow-md hover:scale-[1.03] transition-all duration-200`}
                >
                  {d.btnLabel}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
