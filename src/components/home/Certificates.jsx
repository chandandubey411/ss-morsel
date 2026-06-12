import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheckCircle, FiCalendar, FiUser, FiAward, FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import { certificates } from '../../data/certificates'

/* Per-cert accent colors */
const certColors = [
  { accent: '#0B3D91', light: 'rgba(11,61,145,0.08)',   glow: 'rgba(11,61,145,0.18)'   }, // COI — Navy
  { accent: '#7B2FBE', light: 'rgba(123,47,190,0.08)',  glow: 'rgba(123,47,190,0.18)'  }, // ISO — Purple
  { accent: '#1E824C', light: 'rgba(30,130,76,0.08)',   glow: 'rgba(30,130,76,0.18)'   }, // GST — Green
  { accent: '#C0392B', light: 'rgba(192,57,43,0.08)',   glow: 'rgba(192,57,43,0.18)'   }, // MSME — Red
  { accent: '#0077B6', light: 'rgba(0,119,182,0.08)',   glow: 'rgba(0,119,182,0.18)'   }, // MSTC — Blue
]

const Certificates = () => {
  const [selected, setSelected]           = useState(null)
  const [fullScreenImage, setFullScreenImage] = useState(null)
  const [fsIndex, setFsIndex]             = useState(0)

  const openFullScreen = (cert, idx) => {
    setFsIndex(idx)
    setFullScreenImage(cert.image)
  }

  const navigateFs = (dir) => {
    const next = (fsIndex + dir + certificates.length) % certificates.length
    setFsIndex(next)
    setFullScreenImage(certificates[next].image)
  }

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(180deg, #F0F4FF 0%, #FFFFFF 60%, #F8FAFC 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <SectionHeading
            badge="Certifications"
            title="Our"
            highlight="Credentials"
            subtitle="Officially recognized and certified by government and international authorities."
            align="center"
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {certificates.map((cert, i) => {
            const colors = certColors[i] || certColors[0]
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, type: 'spring', stiffness: 100 }}
                className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer flex flex-col"
                style={{
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                  transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                }}
                onClick={() => setSelected({ ...cert, ...colors, idx: i })}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 24px 60px ${colors.glow}`
                  e.currentTarget.style.transform = 'translateY(-7px)'
                  e.currentTarget.style.borderColor = colors.accent + '50'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
                }}
              >
                {/* Top gradient bar */}
                <div className="h-1.5 w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}99)` }} />

                {/* Image */}
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Badge */}
                  <div
                    className="absolute top-2.5 left-2.5 w-9 h-9 rounded-xl flex items-center justify-center text-base shadow-md"
                    style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(6px)' }}
                  >
                    {cert.badge}
                  </div>

                  {/* Status pill */}
                  <span
                    className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg text-[10px] font-bold font-poppins text-white"
                    style={{ background: colors.accent + 'CC', backdropFilter: 'blur(4px)' }}
                  >
                    {cert.validity}
                  </span>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: colors.accent + 'AA', backdropFilter: 'blur(1px)' }}
                  >
                    <span className="flex items-center gap-1.5 text-white text-xs font-semibold font-poppins bg-white/20 px-3 py-1.5 rounded-xl border border-white/30">
                      <FiZoomIn size={13} /> View Details
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <h3 className="text-[#060F2A] font-bold text-sm font-poppins leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold font-inter" style={{ color: colors.accent }}>
                    {cert.subtitle}
                  </p>
                  <p className="text-gray-400 text-[11px] font-inter leading-relaxed flex-1 mt-0.5">
                    {cert.description.length > 80 ? cert.description.slice(0, 80) + '…' : cert.description}
                  </p>

                  <div className="pt-3 mt-auto border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-inter truncate max-w-[55%]">{cert.issuer}</span>
                    <span
                      className="text-[10px] font-bold font-poppins px-2 py-1 rounded-md flex items-center gap-1 flex-shrink-0"
                      style={{ background: colors.light, color: colors.accent }}
                    >
                      <FiCheckCircle size={9} /> {cert.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['MCA Registered', 'GST Compliant', 'ISO 9001:2015', 'MSME Certified', 'MSTC Authorized'].map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-inter"
              style={{
                background: '#F0F4FF',
                color: '#0B3D91',
                border: '1px solid rgba(11,61,145,0.12)',
              }}
            >
              <span className="text-green-500">✓</span> {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(4,9,28,0.96)', backdropFilter: 'blur(12px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
              className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${selected.accent}, ${selected.accent}80)` }} />

              {/* Image */}
              <div
                className="relative h-56 cursor-zoom-in group/img"
                onClick={() => openFullScreen(selected, selected.idx)}
              >
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="bg-white/90 text-[#060F2A] text-xs font-bold font-poppins px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                    <FiZoomIn size={13} /> View Full Scan
                  </span>
                </div>
                {/* Badge */}
                <div className="absolute top-3 left-3 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(6px)' }}>
                  {selected.badge}
                </div>
                {/* Close */}
                <button
                  onClick={e => { e.stopPropagation(); setSelected(null) }}
                  className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <FiX size={16} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold font-poppins text-lg leading-tight">{selected.title}</h3>
                  <p className="text-white/70 text-xs font-inter mt-0.5">{selected.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm font-inter leading-relaxed">{selected.description}</p>

                <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                  {[
                    { icon: FiUser,     label: 'Issuer',    value: selected.issuer },
                    { icon: FiCalendar, label: 'Year',      value: selected.year },
                    { icon: FiAward,    label: 'Status',    value: selected.validity },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between gap-4 text-xs font-inter">
                      <span className="text-gray-400 font-semibold flex items-center gap-1.5">
                        <row.icon size={11} style={{ color: selected.accent }} />
                        {row.label}
                      </span>
                      <span className="text-[#060F2A] font-bold text-right">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <div
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl border"
                    style={{ background: selected.light, borderColor: selected.accent + '30' }}
                  >
                    <FiCheckCircle size={14} style={{ color: selected.accent }} />
                    <span className="text-xs font-bold font-poppins" style={{ color: selected.accent }}>
                      Officially Certified & Active
                    </span>
                  </div>
                  <button
                    onClick={() => openFullScreen(selected, selected.idx)}
                    className="w-full py-2.5 rounded-xl font-poppins font-semibold text-xs text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                    style={{ background: `linear-gradient(135deg, ${selected.accent}, #1E824C)` }}
                  >
                    <FiZoomIn size={14} /> View Full Screen Scan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full Screen Lightbox with navigation ── */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center p-4 cursor-zoom-out"
            style={{ background: 'rgba(4,9,28,0.98)', backdropFilter: 'blur(20px)' }}
            onClick={() => setFullScreenImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute top-5 right-5 w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-110 hover:rotate-90 duration-300"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <FiX size={20} />
            </button>

            {/* Cert title */}
            <div
              className="mb-5 px-5 py-2 rounded-full text-white text-sm font-semibold font-poppins"
              style={{ background: (certColors[fsIndex] || certColors[0]).accent + 'CC', backdropFilter: 'blur(10px)' }}
            >
              {certificates[fsIndex]?.badge} {certificates[fsIndex]?.title}
            </div>

            <motion.img
              key={fullScreenImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={fullScreenImage}
              alt="Certificate"
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              style={{ border: `2px solid ${(certColors[fsIndex] || certColors[0]).accent}50` }}
              onClick={e => e.stopPropagation()}
            />

            {/* Navigation */}
            {certificates.length > 1 && (
              <div className="flex gap-3 mt-6" onClick={e => e.stopPropagation()}>
                <button
                  onClick={() => navigateFs(-1)}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 duration-200"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <FiChevronLeft size={20} />
                </button>
                <div className="flex items-center gap-2 px-4">
                  {certificates.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setFsIndex(i); setFullScreenImage(certificates[i].image) }}
                      className="transition-all duration-200 rounded-full"
                      style={{
                        width: i === fsIndex ? 24 : 8,
                        height: 8,
                        background: i === fsIndex
                          ? (certColors[i] || certColors[0]).accent
                          : 'rgba(255,255,255,0.3)',
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => navigateFs(1)}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 duration-200"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates
