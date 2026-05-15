import React from 'react'
import { motion } from 'framer-motion'
import { Phone, HeartHandshake, MapPin, Ban } from 'lucide-react'

const tips = [
  {
    icon: Phone,
    title: 'Simpan Nomor Darurat',
    desc: 'Simpan nomor penting seperti BNPB (117), Pemadam Kebakaran (113), Ambulans (119), dan Polisi (110) di ponsel Anda. Pastikan anggota keluarga juga mengetahuinya.',
    color: 'from-blue-500 to-brand-navy',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    num: '01',
  },
  {
    icon: HeartHandshake,
    title: 'Tetap Tenang',
    desc: 'Ketenangan adalah kunci keselamatan. Latih diri untuk tetap tenang dengan bernapas dalam-dalam dan fokus pada langkah berikutnya yang harus diambil saat bencana terjadi.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    num: '02',
  },
  {
    icon: MapPin,
    title: 'Ikuti Jalur Evakuasi',
    desc: 'Kenali jalur evakuasi di tempat tinggal, sekolah, dan kantor Anda. Tanda-tanda evakuasi darurat (warna hijau dengan gambar orang berlari) adalah panduan keselamatan Anda.',
    color: 'from-brand-orange to-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    num: '03',
  },
  {
    icon: Ban,
    title: 'Jangan Kembali ke Lokasi Berbahaya',
    desc: 'Setelah berhasil menyelamatkan diri, jangan kembali ke lokasi bencana untuk mengambil barang. Keselamatan jiwa lebih berharga dari harta benda apapun.',
    color: 'from-brand-red to-red-700',
    bg: 'bg-red-50',
    border: 'border-red-200',
    num: '04',
  },
]

export default function EmergencyTips() {
  return (
    <section className="py-20 md:py-28 bg-white">
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
            Tips Penting <span className="text-gradient-fire">Saat Bencana</span>
          </h2>
          <p className="font-body text-slate-500 text-lg max-w-xl mx-auto">
            Empat hal mendasar yang wajib Anda ingat dan praktikkan kapan pun bencana melanda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl border ${tip.border} ${tip.bg} p-6 shadow-sm hover:shadow-lg transition-all overflow-hidden`}
            >
              {/* Large number watermark */}
              <span className="absolute top-3 right-4 font-display font-800 text-7xl text-current opacity-5 select-none">
                {tip.num}
              </span>

              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-4 shadow-md`}>
                <tip.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-700 text-xl text-brand-navy mb-2">{tip.title}</h3>
              <p className="font-body text-slate-600 text-sm leading-relaxed">{tip.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Emergency numbers quick reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 rounded-2xl bg-gradient-to-r from-brand-red via-brand-orange to-amber-500 p-0.5 shadow-lg"
        >
          <div className="bg-white rounded-[14px] p-5 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-brand-red" />
              <h3 className="font-display font-700 text-brand-navy text-lg">Nomor Darurat Indonesia</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'BNPB', num: '117' },
                { label: 'Pemadam Kebakaran', num: '113' },
                { label: 'Ambulans / Kesehatan', num: '119' },
                { label: 'Polisi', num: '110' },
              ].map((item) => (
                <div key={item.label} className="text-center bg-slate-50 rounded-xl py-3 px-2 border border-slate-100">
                  <div className="font-display font-800 text-2xl text-brand-red mb-0.5">{item.num}</div>
                  <div className="font-body text-xs text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
