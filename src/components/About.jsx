import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, BookOpen, Users, Globe } from 'lucide-react'

export default function About() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
          >
            <div className="section-divider w-16 mb-6" />
            <h2 className="font-display font-800 text-3xl md:text-4xl text-brand-navy mb-5">
              Tentang <span className="text-gradient-fire">Website</span>
            </h2>
            <p className="font-body text-slate-600 text-lg leading-relaxed mb-6">
              Website ini dibuat sebagai media edukasi mitigasi bencana untuk membantu masyarakat memahami cara menghadapi gempa bumi dan kebakaran dengan langkah penyelamatan diri yang benar.
            </p>
            <p className="font-body text-slate-500 leading-relaxed">
              Kami percaya bahwa pengetahuan adalah pertahanan terbaik. Setiap informasi di sini dirancang agar mudah dipahami oleh semua kalangan — dari anak-anak hingga orang dewasa — karena keselamatan adalah hak semua orang.
            </p>
          </motion.div>

          {/* Right: Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              {
                icon: ShieldAlert,
                title: 'Informasi Terpercaya',
                desc: 'Konten didasarkan pada panduan resmi BNPB dan standar keselamatan internasional.',
                color: 'bg-brand-red',
              },
              {
                icon: BookOpen,
                title: 'Mudah Dipahami',
                desc: 'Disajikan dengan bahasa sederhana dan visual yang jelas untuk semua usia.',
                color: 'bg-brand-orange',
              },
              {
                icon: Users,
                title: 'Untuk Semua Kalangan',
                desc: 'Dirancang inklusif — cocok untuk pelajar, keluarga, dan komunitas.',
                color: 'bg-brand-navy',
              },
              {
                icon: Globe,
                title: 'Gratis & Terbuka',
                desc: 'Edukasi keselamatan harus dapat diakses oleh siapapun, kapanpun, dan di manapun.',
                color: 'bg-emerald-600',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08 + 0.1 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-700 text-brand-navy">{item.title}</h4>
                  <p className="font-body text-slate-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
