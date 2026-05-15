import React from 'react'
import { motion } from 'framer-motion'
import {
  Flame,
  Zap,
  Wind,
  UserX,
  AlertTriangle,
  Brain,
  ArrowDownToLine,
  EyeOff,
  LogOut,
  Info,
  Building,
  Thermometer
} from 'lucide-react'

const infoCards = [
  {
    icon: Info,
    title: 'Apa Itu Kebakaran?',
    content:
      'Kebakaran adalah proses pembakaran yang tidak terkendali dan dapat menimbulkan kerugian harta benda maupun jiwa. Kebakaran dapat terjadi di mana saja — rumah, gedung perkantoran, hingga area publik — dan membutuhkan respons cepat.',
    accent: 'bg-red-50 border-red-200',
    iconBg: 'bg-brand-red',
  },
  {
    icon: Zap,
    title: 'Penyebab Kebakaran',
    items: [
      { icon: Zap, label: 'Korsleting listrik', desc: 'Hubungan arus pendek pada instalasi listrik yang rusak' },
      { icon: Wind, label: 'Kebocoran gas', desc: 'Tabung atau instalasi gas LPG yang bocor dan terpicu api' },
      { icon: UserX, label: 'Kelalaian manusia', desc: 'Rokok, lilin tak dimatikan, kompor ditinggal menyala' },
    ],
    accent: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-brand-orange',
  },
  {
    icon: Building,
    title: 'Dampak Kebakaran',
    items: [
      { icon: Thermometer, label: 'Kerusakan aset dan properti', desc: 'Bangunan dan isi rumah dapat habis terbakar' },
      { icon: AlertTriangle, label: 'Korban jiwa dan luka', desc: 'Paparan asap dan api dapat berakibat fatal' },
      { icon: Wind, label: 'Pencemaran udara', desc: 'Asap kebakaran mengandung zat beracun berbahaya' },
    ],
    accent: 'bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-600',
  },
]

const steps = [
  {
    num: '01',
    icon: Brain,
    title: 'Jangan Panik',
    why: 'Kepanikan akan membuat Anda kehilangan kemampuan berpikir jernih. Dengan tetap tenang, Anda dapat mengidentifikasi jalur keluar yang aman, membuat keputusan yang tepat, dan memimpin orang lain menuju keselamatan.',
    color: 'from-brand-red to-red-700',
    bg: 'bg-red-50',
    border: 'border-l-brand-red',
  },
  {
    num: '02',
    icon: EyeOff,
    title: 'Jangan Gunakan Lift',
    why: 'Saat kebakaran, aliran listrik seringkali terputus secara mendadak. Lift yang berhenti di tengah jalan karena listrik padam dapat menjebak Anda di dalam kotak besi dengan risiko tinggi terkena asap atau api.',
    color: 'from-orange-500 to-brand-orange',
    bg: 'bg-orange-50',
    border: 'border-l-orange-500',
  },
  {
    num: '03',
    icon: ArrowDownToLine,
    title: 'Merunduk Saat Banyak Asap',
    why: 'Asap panas dan gas beracun dari kebakaran cenderung naik dan berkumpul di bagian atas ruangan. Dengan merunduk atau merangkak, Anda menghirup lebih sedikit asap dan mendapatkan udara yang lebih bersih di bagian bawah.',
    color: 'from-amber-500 to-yellow-600',
    bg: 'bg-amber-50',
    border: 'border-l-amber-500',
  },
  {
    num: '04',
    icon: LogOut,
    title: 'Segera Keluar dan Cari Bantuan',
    why: 'Setiap detik sangat berharga saat kebakaran. Semakin lama berada di area terbakar, risiko terjebak api dan menghirup asap beracun semakin tinggi. Segera evakuasi dan hubungi pemadam kebakaran di nomor 113.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-l-emerald-500',
  },
]

export default function FireSection() {
  return (
    <section id="kebakaran" className="py-20 md:py-28 bg-slate-50">
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
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center shadow-md">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <span className="font-body text-sm text-brand-red bg-red-50 border border-red-200 px-3 py-1 rounded-full font-600">
              Bencana Buatan
            </span>
          </div>
          <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-3">
            Mitigasi <span className="text-gradient-fire">Kebakaran</span>
          </h2>
          <p className="font-body text-slate-500 text-lg max-w-2xl">
            Pelajari tindakan yang tepat saat menghadapi kebakaran — termasuk alasan ilmiah di balik setiap langkah keselamatan.
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
                        <item.icon className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
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
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-red-400 via-orange-400 via-amber-400 to-emerald-400 hidden md:block" />

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
