import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiX, FiZoomIn, FiFileText } from 'react-icons/fi'
import PageTransition from '../components/layout/PageTransition'
import SectionHeading from '../components/common/SectionHeading'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'
import { clients } from '../data/clients'

// Invoice image imports
import accentureInv from '../assets/invoices/Accenture Invoice.png'
import cienaInv     from '../assets/invoices/Ciena Invoice.png'
import dlfInv       from '../assets/invoices/DLF Invoice.png'
import eyInv        from '../assets/invoices/E&Y  Invoice.png'
import kpmgInv      from '../assets/invoices/KPMG Invoice.png'

const invoices = [
  { client: 'Accenture', img: accentureInv },
  { client: 'Ciena',     img: cienaInv     },
  { client: 'DLF',       img: dlfInv       },
  { client: 'E & Y',     img: eyInv        },
  { client: 'KPMG',      img: kpmgInv      },
]

const Clients = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <PageTransition>
      <Helmet>
        <title>Our Clients | SS Morsel India Pvt Ltd</title>
        <meta name="description" content="SS Morsel India trusted by Accenture, Infosys, EY, KPMG, Yokohama and 200+ multinational corporations across India." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #081C3A, #0B3D91)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white font-poppins leading-tight mb-4"
          >
            Our Trusted{' '}
            <span className="text-[#1E824C]">
              Clients
            </span>
          </motion.h1>
          <p className="text-gray-300 text-lg font-inter">Proudly serving 200+ MNCs and Fortune 500 companies across India</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10" style={{ background: '#0B3D91' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '200+', label: 'Active Clients' },
              { value: '14+', label: 'Fortune 500 Companies' },
              { value: '18+', label: 'Years of Trust' },
              { value: '100%', label: 'Repeat Business Rate' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-white text-3xl font-bold font-poppins">{s.value}</div>
                <div className="text-white/70 text-sm font-inter">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Grid — Marquee */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #f8faff 0%, #eef2ff 50%, #f0f7f4 100%)' }}>
        {/* Decorative bg blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(11,61,145,0.07) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,130,76,0.07) 0%, transparent 70%)' }} />

        <style>{`
          @keyframes mq-left  { from{transform:translateX(0)}    to{transform:translateX(-50%)} }
          @keyframes mq-right { from{transform:translateX(-50%)} to{transform:translateX(0)} }
          .mq-left  { animation: mq-left  28s linear infinite; }
          .mq-right { animation: mq-right 34s linear infinite; }
          .mq-slow  { animation: mq-left  44s linear infinite; }
          .mq-left:hover, .mq-right:hover, .mq-slow:hover { animation-play-state: paused; }
        `}</style>

        {/* Heading */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 border"
            style={{ background: 'rgba(11,61,145,0.07)', borderColor: 'rgba(11,61,145,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#0B3D91' }} />
            <span className="text-xs font-semibold font-poppins tracking-widest uppercase" style={{ color: '#0B3D91' }}>Our Client Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-poppins mb-4" style={{ color: '#081C3A' }}
          >
            Companies That <span style={{ color: '#1E824C' }}>Trust Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-gray-500 text-base font-inter max-w-xl mx-auto"
          >
            A carefully curated portfolio of industry leaders who have entrusted us with their most sensitive projects.
          </motion.p>
        </div>

        {/* ── Platinum strip ── */}
        <div className="relative mb-8">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold font-poppins" style={{ background: 'rgba(11,61,145,0.09)', color: '#0B3D91', border: '1px solid rgba(11,61,145,0.18)' }}>🏆 Platinum Partners</span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #f8faff, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #f8faff, transparent)' }} />
          <div className="overflow-hidden">
            <div className="flex gap-5 mq-left" style={{ width: 'max-content' }}>
              {[...clients.filter(c => c.tier === 'platinum'), ...clients.filter(c => c.tier === 'platinum')].map((client, i) => (
                <MarqueeLogoCard key={i} client={client} accent="#0B3D91" />
              ))}
            </div>
          </div>
        </div>

        {/* ── Gold strip (reverse) ── */}
        <div className="relative mb-8">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold font-poppins" style={{ background: 'rgba(255,138,0,0.09)', color: '#d97706', border: '1px solid rgba(255,138,0,0.22)' }}>🥇 Gold Partners</span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #eef2ff, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #eef2ff, transparent)' }} />
          <div className="overflow-hidden">
            <div className="flex gap-5 mq-right" style={{ width: 'max-content' }}>
              {[...clients.filter(c => c.tier === 'gold'), ...clients.filter(c => c.tier === 'gold')].map((client, i) => (
                <MarqueeLogoCard key={i} client={client} accent="#FF8A00" />
              ))}
            </div>
          </div>
        </div>

        {/* ── Silver strip ── */}
        <div className="relative">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold font-poppins" style={{ background: 'rgba(107,114,128,0.09)', color: '#6b7280', border: '1px solid rgba(107,114,128,0.22)' }}>🥈 Silver Partners</span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #f0f7f4, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #f0f7f4, transparent)' }} />
          <div className="overflow-hidden">
            <div className="flex gap-5 mq-slow" style={{ width: 'max-content' }}>
              {[...clients.filter(c => c.tier === 'silver'), ...clients.filter(c => c.tier === 'silver')].map((client, i) => (
                <MarqueeLogoCard key={i} client={client} accent="#6b7280" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Deal Invoices ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #060f1e 0%, #0a1f3d 50%, #081828 100%)' }}>
        {/* Ambient glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,130,76,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(11,61,145,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 border"
              style={{ background: 'rgba(30,130,76,0.12)', borderColor: 'rgba(30,130,76,0.35)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold font-poppins tracking-widest uppercase">Verified Deals</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4"
            >
              Client <span style={{ color: '#1E824C' }}>Deal Invoices</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base font-inter max-w-xl mx-auto"
            >
              Real invoices from completed projects — documented proof of trust with India's top corporations.
            </motion.p>
          </div>

          {/* Scattered invoice cards */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {invoices.map((inv, i) => {
              const rotations = [-3.5, 2, -1.5, 3, -2.5]
              const rot = rotations[i % rotations.length]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, rotate: rot * 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: rot }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: 'spring', stiffness: 90, damping: 14 }}
                  whileHover={{ rotate: 0, y: -12, scale: 1.04, zIndex: 10 }}
                  onClick={() => setLightbox(inv)}
                  className="relative cursor-pointer flex-shrink-0"
                  style={{ width: '190px', transformOrigin: 'center bottom' }}
                >
                  {/* Paper shadow layers (depth effect) */}
                  <div className="absolute inset-0 rounded-xl translate-y-2 translate-x-1.5 opacity-30" style={{ background: '#1a2a1a', borderRadius: '10px' }} />
                  <div className="absolute inset-0 rounded-xl translate-y-1 translate-x-0.5 opacity-20" style={{ background: '#0a1a0a', borderRadius: '10px' }} />

                  {/* Main card */}
                  <div
                    className="relative bg-white rounded-xl overflow-hidden"
                    style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)' }}
                  >
                    {/* Invoice image */}
                    <div className="relative overflow-hidden" style={{ height: '240px' }}>
                      <img
                        src={inv.img}
                        alt={`${inv.client} Invoice`}
                        className="w-full h-full object-cover object-top transition-transform duration-500"
                        style={{ filter: 'brightness(0.97)' }}
                      />

                      {/* VERIFIED stamp — always slightly visible, more on hover */}
                      <div
                        className="absolute top-4 right-3 pointer-events-none select-none transition-all duration-300 group-hover:scale-110"
                        style={{
                          transform: 'rotate(12deg)',
                          opacity: 0.82,
                          border: '2.5px solid #16a34a',
                          borderRadius: '6px',
                          padding: '3px 7px',
                          color: '#16a34a',
                          fontFamily: 'monospace',
                          fontWeight: 800,
                          fontSize: '10px',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          background: 'rgba(255,255,255,0.75)',
                          boxShadow: '0 0 0 1px rgba(22,163,74,0.2)',
                        }}
                      >
                        ✓ VERIFIED
                      </div>

                      {/* Dark gradient at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                    </div>

                    {/* Footer strip */}
                    <div
                      className="flex items-center gap-2 px-3 py-2.5"
                      style={{ background: 'linear-gradient(135deg, #060f1e, #0B3D91)' }}
                    >
                      <FiFileText size={12} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-white font-semibold font-poppins text-xs truncate flex-1">{inv.client}</span>
                      <span className="text-emerald-400 text-[9px] font-mono bg-emerald-900/40 px-1.5 py-0.5 rounded border border-emerald-700/40 flex-shrink-0">INV</span>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none opacity-0 transition-opacity duration-300"
                    style={{ boxShadow: '0 0 30px rgba(30,130,76,0.35)', borderRadius: '10px' }}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-gray-500 text-xs font-inter mt-12"
          >
            Click any invoice to view full document
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(8,28,58,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100" style={{ background: 'linear-gradient(135deg, #081C3A, #0B3D91)' }}>
                <div className="flex items-center gap-2">
                  <FiFileText size={16} className="text-white/80" />
                  <span className="text-white font-semibold font-poppins text-sm">{lightbox.client} — Deal Invoice</span>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-white/70 hover:text-white transition-colors rounded-full p-1 hover:bg-white/10"
                  aria-label="Close"
                >
                  <FiX size={20} />
                </button>
              </div>
              {/* Invoice image */}
              <div className="overflow-auto max-h-[80vh] bg-gray-50">
                <img
                  src={lightbox.img}
                  alt={`${lightbox.client} Invoice`}
                  className="w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Testimonials />
      <CTA />
    </PageTransition>
  )
}

const MarqueeLogoCard = ({ client, accent }) => {
  const initials = client.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div
      className="group flex-shrink-0 flex flex-col items-center justify-center gap-2 bg-white rounded-2xl border border-gray-100 cursor-default transition-all duration-300"
      style={{
        width: '148px',
        height: '96px',
        padding: '16px 14px 12px',
        boxShadow: '0 2px 12px rgba(11,61,145,0.06)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent
        e.currentTarget.style.boxShadow = `0 12px 32px rgba(11,61,145,0.14)`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(229,231,235,1)'
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(11,61,145,0.06)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Thin top accent */}
      <div className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: accent }} />

      <div className="w-16 h-8 flex items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
          style={{ mixBlendMode: 'multiply', filter: 'grayscale(100%)' }}
          onMouseEnter={e => { e.target.style.filter = 'grayscale(0%)' }}
          onMouseLeave={e => { e.target.style.filter = 'grayscale(100%)' }}
          onError={e => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div
          className="hidden w-8 h-8 rounded-lg items-center justify-center text-white font-bold font-poppins text-xs"
          style={{ background: accent }}
        >
          {initials}
        </div>
      </div>
      <div className="text-[11px] font-semibold font-poppins text-center leading-tight transition-colors duration-300" style={{ color: '#081C3A' }}>
        {client.name}
      </div>
    </div>
  )
}

export default Clients
