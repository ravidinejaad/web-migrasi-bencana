import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Bell, Zap } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    icon: Bell,
    title: 'Siaga',
    desc: 'Selalu waspada dan siap menghadapi bencana kapan pun terjadi. Persiapan sejak dini adalah kunci keselamatan.',
    color: 'from-blue-500 to-brand-navy',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: ShieldCheck,
    title: 'Aman',
    desc: 'Mengetahui langkah yang tepat membantu kita bertindak dengan aman saat situasi darurat terjadi.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: Zap,
    title: 'Cepat Bertindak',
    desc: 'Waktu sangat berharga saat bencana. Edukasi membantu kita bereaksi cepat, tepat, dan terkoordinasi.',
    color: 'from-brand-orange to-brand-red',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
]

function InfoCard({ icon: Icon, title, desc, color, bg, border, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl border ${border} ${bg} p-6 shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-display font-700 text-xl text-brand-navy mb-2">{title}</h3>
      <p className="font-body text-slate-600 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  )
}

export default function Introduction() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-divider w-16 mx-auto mb-6" />
          <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-5">
            Mengapa Edukasi Bencana{' '}
            <span className="text-gradient-fire">Penting?</span>
          </h2>
          <p className="font-body text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Indonesia merupakan negara yang rawan terhadap berbagai bencana alam. Terletak di Cincin Api Pasifik, wilayah kita rentan terhadap gempa bumi, letusan gunung berapi, dan bencana lainnya. Oleh karena itu, memahami langkah mitigasi sangat penting untuk meningkatkan keselamatan diri dan orang-orang di sekitar kita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <InfoCard key={card.title} {...card} delay={i * 0.1} />
          ))}
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-brand-navy to-brand-navylight p-6 md:p-8 text-white grid grid-cols-3 gap-4 text-center"
        >
          {[
            { num: '17.000+', label: 'Pulau di Indonesia' },
            { num: '5.800+', label: 'Bencana per tahun' },
            { num: '270 Jt', label: 'Jiwa perlu dilindungi' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-800 text-2xl md:text-3xl text-brand-orange">{stat.num}</div>
              <div className="font-body text-xs md:text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
