import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheckCircle, FiCalendar, FiUser, FiAward } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import { certificates } from '../../data/certificates'

/* Badge color per certificate */
const certColors = [
  { accent: '#0B3D91', light: 'rgba(11,61,145,0.08)' },   // COI — Navy
  { accent: '#FF8A00', light: 'rgba(255,138,0,0.08)' },    // ISO — Amber
  { accent: '#1E824C', light: 'rgba(30,130,76,0.08)' },    // GST — Green
  { accent: '#0B3D91', light: 'rgba(11,61,145,0.08)' },    // MSME — Navy
  { accent: '#6b7280', light: 'rgba(107,114,128,0.08)' },  // MSTC — Gray
  { accent: '#8B2FC9', light: 'rgba(139,47,201,0.08)' },   // Labour — Purple
  { accent: '#1E824C', light: 'rgba(30,130,76,0.08)' },    // HSE — Green
]

const Certificates = () => {
  const [selected, setSelected] = useState(null)
  const [fullScreenImage, setFullScreenImage] = useState(null)

  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            badge="Certifications"
            title="Our"
            highlight="Credentials"
            subtitle="Officially recognized and certified by government and international authorities."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, i) => {
            const colors = certColors[i] || certColors[0]
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 110 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer flex flex-col hover:-translate-y-1.5 transition-all duration-300"
                style={{ boxShadow: '0 4px 20px rgba(11,61,145,0.06)' }}
                onClick={() => setSelected({ ...cert, ...colors })}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 50px rgba(11,61,145,0.14)`
                  e.currentTarget.style.borderColor = colors.accent
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(11,61,145,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(243,244,246,1)'
                }}
              >
                {/* Top accent bar */}
                <div className="h-1.5" style={{ background: colors.accent }} />

                {/* Certificate photo */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge emoji */}
                  <div
                    className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md"
                    style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)' }}
                  >
                    {cert.badge}
                  </div>

                  {/* Validity pill on image */}
                  <span
                    className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold font-poppins text-white"
                    style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
                  >
                    {cert.validity}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-navy font-bold text-sm font-poppins leading-snug group-hover:transition-colors duration-300"
                    style={{}}>
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold font-inter" style={{ color: colors.accent }}>
                    {cert.subtitle}
                  </p>
                  <p className="text-gray-500 text-[11px] font-inter leading-relaxed flex-1">
                    {cert.description.length > 90 ? cert.description.slice(0, 90) + '…' : cert.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-inter">{cert.issuer}</span>
                    <span
                      className="text-[10px] font-bold font-poppins px-2 py-1 rounded-md flex items-center gap-1"
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
      </div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(8,28,58,0.95)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="h-1.5" style={{ background: selected.accent }} />

              {/* Image */}
              <div 
                className="relative h-52 cursor-zoom-in group/img"
                onClick={() => setFullScreenImage(selected.image)}
              >
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="bg-white/90 text-navy text-xs font-bold font-poppins px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1">
                    🔍 Click to Zoom Scan
                  </span>
                </div>
                <div className="absolute top-3 left-3 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)' }}>
                  {selected.badge}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(null);
                  }}
                  className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <FiX size={16} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold font-poppins text-lg leading-tight">{selected.title}</h3>
                  <p className="text-white/75 text-xs font-inter">{selected.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm font-inter leading-relaxed">{selected.description}</p>

                <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                  {[
                    { icon: FiUser, label: 'Issuer', value: selected.issuer },
                    { icon: FiCalendar, label: 'Year', value: selected.year },
                    { icon: FiAward, label: 'Status', value: selected.validity },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between gap-4 text-xs font-inter">
                      <span className="text-gray-400 font-semibold flex items-center gap-1.5">
                        <row.icon size={11} style={{ color: selected.accent }} />
                        {row.label}
                      </span>
                      <span className="text-navy font-bold text-right">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border"
                    style={{ background: selected.light, borderColor: selected.accent + '30' }}>
                    <FiCheckCircle size={14} style={{ color: selected.accent }} />
                    <span className="text-xs font-bold font-poppins" style={{ color: selected.accent }}>
                      Officially Certified &amp; Active
                    </span>
                  </div>
                  <button
                    onClick={() => setFullScreenImage(selected.image)}
                    className="w-full py-2.5 rounded-xl font-poppins font-semibold text-xs text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                    style={{ background: `linear-gradient(135deg, ${selected.accent}, #1E824C)` }}
                  >
                    🔍 View Full Screen Scan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Image Lightbox */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center p-4 bg-navy/95 backdrop-blur-md cursor-zoom-out"
            onClick={() => setFullScreenImage(null)}
          >
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors"
            >
              <FiX size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={fullScreenImage}
              alt="Certificate Scan"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates
