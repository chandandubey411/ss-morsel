import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiAward, FiShield, FiFileText, FiCpu, FiX, FiCheckCircle,
  FiCalendar, FiUser, FiHash, FiExternalLink
} from 'react-icons/fi'
import PageTransition from '../components/layout/PageTransition'
import SectionHeading from '../components/common/SectionHeading'
import CertificatesSection from '../components/home/Certificates'
import CTA from '../components/home/CTA'
import businessLicenseImg from '../assets/images/business_license_slide.png'

/* ─── Incorporation Documents (from the business license slide) ─── */
const incorporationDocs = [
  {
    id: 'coi',
    icon: '🇮🇳',
    color: '#0B3D91',
    colorLight: 'rgba(11,61,145,0.07)',
    title: 'Certificate of Incorporation',
    subtitle: 'Pursuant to Companies Act, 2013',
    issuer: 'Registrar of Companies, Delhi',
    cinNo: 'U37100HR2015PTC054431',
    date: '29th January, 2015',
    status: 'Perpetual / Active',
    authority: 'Ministry of Corporate Affairs, GoI',
    desc: 'Officially incorporated under the Companies Act, 2013 (sub-section 2 of section 7 & rule 8 of Companies Rules, 2014). Registered as a Private Limited Company.',
  },
  {
    id: 'moa',
    icon: '📋',
    color: '#1E824C',
    colorLight: 'rgba(30,130,76,0.07)',
    title: 'Memorandum of Association',
    subtitle: 'Company Limited by Shares',
    issuer: 'Registrar of Companies, Delhi',
    cinNo: 'U37100HR2015PTC054431',
    date: '29th January, 2015',
    status: 'Registered / Active',
    authority: 'Ministry of Corporate Affairs, GoI',
    desc: 'Defines the company\'s objects, scope, and authorized capital. Covers recycling, dismantling, scrap trading, IT hardware disposal, and all allied business activities.',
  },
  {
    id: 'aoa',
    icon: '📑',
    color: '#8B2FC9',
    colorLight: 'rgba(139,47,201,0.07)',
    title: 'Articles of Association',
    subtitle: 'Internal Governance Document',
    issuer: 'Registrar of Companies, Delhi',
    cinNo: 'U37100HR2015PTC054431',
    date: '29th January, 2015',
    status: 'Registered / Active',
    authority: 'Ministry of Corporate Affairs, GoI',
    desc: 'Governs the internal management rules, shareholder rights, director appointments, and corporate governance framework of S S Morsel India Private Limited.',
  },
]

const complianceStandards = [
  {
    icon: FiShield,
    title: 'Health & Safety (HSE) Protocol',
    desc: 'Strict zero-accident policy with daily PPE audits, toolbox talks, and risk assessments for all dismantling sites.',
  },
  {
    icon: FiCpu,
    title: 'E-Waste & Green Recycling',
    desc: 'Authorized handler of e-waste via MSTC. We provide green recycling certificates for all dismantled IT hardware.',
  },
  {
    icon: FiFileText,
    title: 'Full Compliance & Documentation',
    desc: 'GST invoices, labor licenses, state compliance certificates, and scrap disposal receipts provided with audit trails.',
  },
  {
    icon: FiAward,
    title: 'ISO 9001 Quality Benchmarks',
    desc: 'Internationally recognized quality standard for operations, scheduling, project management, and customer satisfaction.',
  },
]

const galleryDocs = [
  { id: 'coi', title: 'Certificate of Incorporation', src: '/coi_cert.png', desc: 'S S Morsel India Private Limited — Ministry of Corporate Affairs, GoI' },
  { id: 'gst', title: 'GST Registration', src: '/gst_cert.png', desc: 'Form GST REG-06 | Registration No: 06AAVCS4273P1ZD' },
  { id: 'mstc', title: 'MSTC Buyer Card', src: '/mstc_card.png', desc: 'MSTC Limited (A Govt. of India Enterprise) | Buyer Ref. No: 98616' },
  { id: 'all', title: 'MOA & AOA Overview', src: businessLicenseImg, desc: 'S S Morsel India Private Limited Registration Slide' },
]

const CertificatesPage = () => {
  const [zoomDocId, setZoomDocId] = useState(null)
  const [selectedDoc, setSelectedDoc] = useState(null)

  return (
    <PageTransition>
      <Helmet>
        <title>Certifications & Compliance | SS Morsel India Pvt Ltd</title>
        <meta name="description" content="ISO 9001:2015, MSTC E-Waste, GST, MSME, and Labour licenses of SS Morsel India Pvt. Ltd. Official government-approved industrial dismantling partner." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #081C3A, #0B3D91)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-secondary/10 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-secondary text-xs font-semibold tracking-wider uppercase">Credentials</span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white font-poppins leading-tight mb-6"
          >
            Corporate{' '}
            <span className="text-[#1E824C]">Certifications</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg font-inter max-w-2xl mx-auto"
          >
            Authorized and licensed by government bodies. Operating at the highest benchmarks of quality and safety.
          </motion.p>
        </div>
      </section>

      {/* ── Incorporation Documents Section ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              badge="Government Approved"
              title="Official Business"
              highlight="License & Incorporation"
              subtitle="SS Morsel India Private Limited is fully registered under the Ministry of Corporate Affairs, Government of India. Click any document to view details."
              align="center"
            />
          </div>

          {/* Company Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 bg-[#F8FAFC] rounded-3xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #0B3D91, #1E824C)' }}>
              🏛️
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-navy font-bold font-poppins text-xl mb-1">S S MORSEL INDIA PVT. LTD.</h3>
              <p className="text-gray-500 font-inter text-sm">CIN: <span className="font-mono font-semibold text-primary">U37100HR2015PTC054431</span> &nbsp;|&nbsp; Incorporated: 29 Jan 2015 &nbsp;|&nbsp; Haryana, India</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 border border-secondary/20">
              <FiCheckCircle className="text-secondary" size={16} />
              <span className="text-secondary font-bold font-poppins text-sm">MCA Verified Active</span>
            </div>
          </motion.div>

          {/* 3 Document Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {incorporationDocs.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 110 }}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer flex flex-col hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: '0 4px 20px rgba(11,61,145,0.07)' }}
                onClick={() => setSelectedDoc(doc)}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 50px rgba(11,61,145,0.15)`
                  e.currentTarget.style.borderColor = doc.color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(11,61,145,0.07)'
                  e.currentTarget.style.borderColor = 'rgba(243,244,246,1)'
                }}
              >
                {/* Top Color Bar */}
                <div className="h-1.5 w-full" style={{ background: doc.color }} />

                {/* Header */}
                <div className="p-6 flex items-start gap-4 border-b border-gray-50">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: doc.colorLight }}>
                    {doc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-navy font-poppins text-base leading-snug mb-0.5">{doc.title}</h3>
                    <p className="text-xs font-inter" style={{ color: doc.color }}>{doc.subtitle}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <p className="text-xs text-gray-500 font-inter leading-relaxed">{doc.desc}</p>

                  <div className="mt-auto space-y-2 pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-xs font-inter text-gray-600">
                      <FiHash size={11} style={{ color: doc.color }} />
                      <span className="font-mono text-[11px]">{doc.cinNo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-inter text-gray-600">
                      <FiCalendar size={11} style={{ color: doc.color }} />
                      <span>{doc.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-inter text-gray-600">
                      <FiUser size={11} style={{ color: doc.color }} />
                      <span>{doc.issuer}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Status */}
                <div className="px-6 pb-5 flex items-center justify-between">
                  <span className="text-xs font-bold font-poppins px-3 py-1.5 rounded-lg"
                    style={{ background: doc.colorLight, color: doc.color }}>
                    {doc.status}
                  </span>
                  <span className="text-xs text-gray-400 font-inter flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiExternalLink size={11} /> View Details
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Original Documents button → zoom of composite */}
          <div className="text-center">
            <button
              onClick={() => setZoomDocId('coi')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-poppins font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #0B3D91, #1E824C)' }}
            >
              📄 View Official Document Scans
            </button>
          </div>
        </div>

        {/* Lightbox for Original Slide */}
        <AnimatePresence>
          {zoomDocId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 bg-navy/95 backdrop-blur-md"
              onClick={() => setZoomDocId(null)}
            >
              <button
                onClick={() => setZoomDocId(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-xl flex items-center justify-center text-white transition-colors z-[10000]"
              >
                <FiX size={18} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-4xl w-full flex flex-col gap-6"
                onClick={e => e.stopPropagation()}
              >
                {/* Tabs / Selectors inside Lightbox */}
                <div className="flex flex-wrap justify-center gap-2">
                  {galleryDocs.map(doc => (
                    <button
                      key={doc.id}
                      onClick={() => setZoomDocId(doc.id)}
                      className={`px-4 py-2 rounded-xl text-xs md:text-sm font-poppins font-semibold transition-all duration-300 ${
                        zoomDocId === doc.id
                          ? 'bg-gradient-to-r from-primary to-green text-white shadow-lg'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {doc.title}
                    </button>
                  ))}
                </div>

                {/* Scanned Image Container */}
                <div className="relative bg-black/40 rounded-2xl p-2 border border-white/5 flex items-center justify-center min-h-[300px] md:min-h-[50vh] max-h-[70vh]">
                  {galleryDocs.map(doc => {
                    if (doc.id !== zoomDocId) return null
                    return (
                      <motion.img
                        key={doc.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        src={doc.src}
                        alt={doc.title}
                        className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl mx-auto"
                      />
                    )
                  })}
                </div>

                {/* Info Text */}
                {(() => {
                  const currentDoc = galleryDocs.find(d => d.id === zoomDocId)
                  return currentDoc ? (
                    <div className="text-center text-white">
                      <h4 className="font-bold font-poppins text-lg">{currentDoc.title}</h4>
                      <p className="text-white/65 text-xs font-inter mt-1">{currentDoc.desc}</p>
                    </div>
                  ) : null
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Document Detail Modal */}
        <AnimatePresence>
          {selectedDoc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              style={{ background: 'rgba(8,28,58,0.95)', backdropFilter: 'blur(8px)' }}
              onClick={() => setSelectedDoc(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                className="bg-white rounded-3xl overflow-hidden max-w-md w-full"
                onClick={e => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="h-2" style={{ background: selectedDoc.color }} />
                <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: selectedDoc.colorLight }}>
                    {selectedDoc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-navy font-bold font-poppins text-lg leading-tight">{selectedDoc.title}</h3>
                    <p className="text-xs font-inter mt-0.5" style={{ color: selectedDoc.color }}>{selectedDoc.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setSelectedDoc(null)}
                    className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <FiX size={16} className="text-gray-600" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">{selectedDoc.desc}</p>

                  <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                    {[
                      { label: 'CIN', value: selectedDoc.cinNo, mono: true },
                      { label: 'Incorporation Date', value: selectedDoc.date },
                      { label: 'Issuing Authority', value: selectedDoc.issuer },
                      { label: 'Governing Authority', value: selectedDoc.authority },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between items-start gap-4 text-xs font-inter">
                        <span className="text-gray-400 font-semibold whitespace-nowrap">{row.label}</span>
                        <span className={`text-navy font-bold text-right ${row.mono ? 'font-mono' : ''}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-poppins px-3 py-2 rounded-xl flex items-center gap-1.5"
                      style={{ background: selectedDoc.colorLight, color: selectedDoc.color }}>
                      <FiCheckCircle size={12} />
                      {selectedDoc.status}
                    </span>
                    <span className="text-xs text-gray-400 font-inter">Ministry of Corporate Affairs</span>
                  </div>

                  {selectedDoc.id === 'coi' && (
                    <button
                      onClick={() => {
                        setZoomDocId('coi')
                        setSelectedDoc(null)
                      }}
                      className="w-full py-3 rounded-xl font-poppins font-semibold text-xs text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${selectedDoc.color}, #1E824C)` }}
                    >
                      🔍 View Scanned Certificate
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Main Certificates Section (ISO, GST, MSME, etc.) */}
      <CertificatesSection />

      {/* Compliance Standards */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              badge="Regulatory Compliance"
              title="Built On Strict"
              highlight="Global Standards"
              subtitle="We strictly comply with statutory norms to shield our clients from legal, environmental, and financial risks."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-6 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="text-primary group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div>
                  <h3 className="text-navy font-bold font-poppins text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 font-inter text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}

export default CertificatesPage
