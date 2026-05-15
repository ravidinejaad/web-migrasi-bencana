import React from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  AlertTriangle,
  Building2,
  Mountain,
  Layers,
  Brain,
  HardHat,
  TableProperties,
  DoorOpen,
  Info
} from 'lucide-react'

const infoCards = [
  {
    icon: Info,
    title: 'Apa Itu Gempa Bumi?',
    content:
      'Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan bumi akibat pelepasan energi dari dalam bumi secara tiba-tiba. Energi ini merambat ke permukaan dalam bentuk gelombang seismik yang dapat merusak bangunan dan membahayakan jiwa.',
    accent: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-600',
  },
  {
    icon: Layers,
    title: 'Penyebab Gempa',
    items: [
      { icon: Layers, label: 'Pergeseran lempeng bumi', desc: 'Tumbukan atau pergeseran antar lempeng tektonik' },
      { icon: Mountain, label: 'Aktivitas vulkanik', desc: 'Pergerakan magma di dalam gunung berapi' },
      { icon: Activity, label: 'Patahan bumi', desc: 'Rekahan pada kerak bumi yang bergerak tiba-tiba' },
    ],
    accent: 'bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-600',
  },
  {
    icon: Building2,
    title: 'Dampak Gempa',
    items: [
      { icon: Building2, label: 'Kerusakan bangunan', desc: 'Struktur bangunan retak hingga runtuh total' },
      { icon: AlertTriangle, label: 'Cedera dan korban jiwa', desc: 'Tertimpa reruntuhan bangunan dan benda jatuh' },
      { icon: Activity, label: 'Gangguan infrastruktur', desc: 'Jalan, jembatan, listrik, dan air terganggu' },
    ],
    accent: 'bg-red-50 border-red-200',
    iconBg: 'bg-brand-red',
  },
]

const steps = [
  {
    num: '01',
    icon: Brain,
    title: 'Jangan Panik',
    why: 'Kepanikan dapat membuat seseorang sulit berpikir jernih dan mengambil keputusan yang tepat selama proses evakuasi. Pikiran yang tenang memungkinkan respons yang lebih cepat dan tepat.',
    color: 'from-blue-500 to-brand-navy',
    bg: 'bg-blue-50',
    border: 'border-l-blue-500',
  },
  {
    num: '02',
    icon: HardHat,
    title: 'Lindungi Kepala',
    why: 'Kepala adalah bagian tubuh yang paling vital. Melindunginya dengan tangan, bantal, atau helm dapat mengurangi risiko cedera serius akibat benda-benda yang jatuh saat guncangan terjadi.',
    color: 'from-indigo-500 to-indigo-700',
    bg: 'bg-indigo-50',
    border: 'border-l-indigo-500',
  },
  {
    num: '03',
    icon: TableProperties,
    title: 'Berlindung di Bawah Meja',
    why: 'Posisi di bawah meja yang kokoh dapat membantu melindungi tubuh dari reruntuhan bangunan ringan. Jika tidak ada meja, berlindunglah di sudut bangunan yang kuat dan jauh dari kaca.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-l-emerald-500',
  },
  {
    num: '04',
    icon: DoorOpen,
    title: 'Keluar Setelah Guncangan Berhenti',
    why: 'Bergerak saat guncangan masih terjadi sangat berbahaya karena risiko tersandung, tertimpa benda jatuh lebih tinggi. Tunggu hingga gempa berhenti, lalu evakuasi dengan tenang melalui jalur yang aman.',
    color: 'from-brand-orange to-brand-red',
    bg: 'bg-orange-50',
    border: 'border-l-orange-500',
  },
]

export default function EarthquakeSection() {
  return (
    <section id="gempa" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navylight flex items-center justify-center shadow-md">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="font-body text-sm text-brand-navy bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-600">
              Bencana Alam
            </span>
          </div>
          <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-3">
            Mitigasi <span className="text-gradient-navy">Gempa Bumi</span>
          </h2>
          <p className="font-body text-slate-500 text-lg max-w-2xl">
            Pelajari cara melindungi diri saat terjadi gempa bumi — termasuk mengapa setiap langkah itu krusial.
          </p>
          <div className="section-divider w-16 mt-6" />
        </motion.div>

        {/* Info Cards */}
        <div className="mb-16">
          <h3 className="font-display font-700 text-xl text-brand-navy mb-6">A. Pengetahuan Dasar</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className={`rounded-2xl border p-5 ${card.accent} shadow-sm hover:shadow-md transition-all`}
              >
                <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-4 shadow`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-display font-700 text-lg text-brand-navy mb-3">{card.title}</h4>
                {card.content && (
                  <p className="font-body text-slate-600 text-sm leading-relaxed">{card.content}</p>
                )}
                {card.items && (
                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
                      <li key={item.label} className="flex items-start gap-2.5">
                        <item.icon className="w-4 h-4 text-brand-navy mt-0.5 shrink-0" />
                        <div>
                          <span className="font-display font-600 text-sm text-brand-navy block">{item.label}</span>
                          <span className="font-body text-slate-500 text-xs">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Evacuation Steps */}
        <div>
          <h3 className="font-display font-700 text-xl text-brand-navy mb-6">B. Langkah Evakuasi</h3>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 via-emerald-400 to-orange-400 hidden md:block" />

            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative flex gap-5 md:gap-6 rounded-2xl border-l-4 ${step.border} ${step.bg} p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow ml-0 md:ml-14`}
                >
                  {/* Step bubble on timeline */}
                  <div className={`hidden md:flex absolute -left-[52px] w-10 h-10 rounded-full bg-gradient-to-br ${step.color} items-center justify-center shadow-md shrink-0 z-10`}>
                    <span className="font-display font-800 text-white text-xs">{step.num}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-body text-xs font-600 text-slate-400 md:hidden">Langkah {step.num}</span>
                    </div>
                    <h4 className="font-display font-700 text-xl text-brand-navy mb-2">{step.title}</h4>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                      <div>
                        <span className="font-display font-600 text-xs text-brand-orange uppercase tracking-wide">Mengapa ini penting?</span>
                        <p className="font-body text-slate-600 text-sm leading-relaxed mt-0.5">{step.why}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
