import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiZoomIn, FiShield, FiAward, FiCheckCircle, FiChevronLeft, FiChevronRight, FiDownload } from 'react-icons/fi'
import PageTransition from '../components/layout/PageTransition'
import CTA from '../components/home/CTA'

/* ─── Certificate Data ─── */
const certificates = [
  {
    id: 'coi',
    tag: 'Ministry of Corporate Affairs',
    tagColor: '#0B3D91',
    title: 'Certificate of Incorporation',
    number: 'CIN: U37100HR2015PTC054431',
    issuedBy: 'Registrar of Companies, Delhi',
    issuedOn: '29 January 2015',
    validity: 'Perpetual',
    status: 'Active',
    statusColor: '#1E824C',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #0B3D91 0%, #1a56c4 100%)',
    glowColor: 'rgba(11,61,145,0.3)',
    image: '/coi_cert.png',
    hasImage: true,
    description: 'Officially incorporated under the Companies Act, 2013. Registered as a Private Limited Company under Ministry of Corporate Affairs, Government of India.',
  },
  {
    id: 'gst',
    tag: 'Government of India',
    tagColor: '#1E824C',
    title: 'GST Registration Certificate',
    number: 'GSTIN: 06AAVCS4273P1ZD',
    issuedBy: 'Central Board of Indirect Taxes',
    issuedOn: '24 September 2017',
    validity: 'Ongoing',
    status: 'Registered',
    statusColor: '#1E824C',
    icon: '📋',
    gradient: 'linear-gradient(135deg, #1E824C 0%, #27ae60 100%)',
    glowColor: 'rgba(30,130,76,0.3)',
    image: '/gst_cert.png',
    hasImage: true,
    description: 'Form GST REG-06 [See Rule 10(1)] — Registration Certificate issued by the Central Board of Indirect Taxes & Customs, Government of India.',
  },
  {
    id: 'mstc',
    tag: 'Govt. of India Enterprise',
    tagColor: '#0077B6',
    title: 'MSTC Buyer Card',
    number: 'Buyer Ref. No: 98616',
    issuedBy: 'MSTC Limited',
    issuedOn: '17 September 2019',
    validity: 'Valid upto 16 April 2028',
    status: 'Valid',
    statusColor: '#0077B6',
    icon: '🪪',
    gradient: 'linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)',
    glowColor: 'rgba(0,119,182,0.3)',
    image: '/mstc_card.png',
    hasImage: true,
    description: 'Authorized buyer card issued by MSTC Limited (A Govt. of India Enterprise) for e-waste and scrap material procurement. Authorized representative: Sonu Kumar.',
  },
  {
    id: 'msme',
    tag: 'Ministry of MSME, GoI',
    tagColor: '#C0392B',
    title: 'Udyam Registration Certificate',
    number: 'UDYAM-HR-05-0011132',
    issuedBy: 'Ministry of Micro, Small & Medium Enterprises',
    issuedOn: '29 January 2015',
    validity: 'Perpetual',
    status: 'Registered',
    statusColor: '#C0392B',
    icon: '🏭',
    gradient: 'linear-gradient(135deg, #C0392B 0%, #e74c3c 100%)',
    glowColor: 'rgba(192,57,43,0.3)',
    image: '/msme_cert.png',
    hasImage: true,
    description: 'Government of India — Ministry of Micro, Small and Medium Enterprises. Enterprise Type: Micro | Major Activity: Services | Social Category: General.',
    comingSoon: false,
  },
  {
    id: 'ppt',
    tag: 'Corporate Presentation',
    tagColor: '#1E824C',
    title: 'Company Presentation (PPT)',
    number: 'Document Ref: SS-MORSEL/PPT/2026',
    issuedBy: 'SS Morsel India Pvt. Ltd.',
    issuedOn: 'Updated Regularly',
    validity: 'Ongoing',
    status: 'Download',
    statusColor: '#1E824C',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #1E824C 0%, #27ae60 100%)',
    glowColor: 'rgba(30,130,76,0.3)',
    image: null,
    hasImage: false,
    downloadUrl: '/SS-MORSEL_PPT.pdf',
    description: 'Official corporate presentation detailing SS Morsel India\'s operations, office dismantling services, clients, and execution methodologies.',
  },
]

/* ─── Stats ─── */
const stats = [
  { value: '5+', label: 'Corporate Credentials', icon: '🏅' },
  { value: '2015', label: 'Established Since', icon: '📅' },
  { value: '100%', label: 'Compliance Rate', icon: '✅' },
  { value: '200+', label: 'Corporate Clients', icon: '🏢' },
]

const CertificatesPage = () => {
  const [lightboxCert, setLightboxCert] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (cert, idx) => {
    setLightboxCert(cert)
    setCurrentIndex(idx)
  }

  const navigate = (dir) => {
    const imageCerts = certificates.filter(c => c.hasImage)
    const newIdx = (currentIndex + dir + imageCerts.length) % imageCerts.length
    setCurrentIndex(newIdx)
    setLightboxCert(imageCerts[newIdx])
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Certifications & Compliance | SS Morsel India Pvt Ltd</title>
        <meta name="description" content="MSTC E-Waste, GST, MSME, Incorporation certificates and Corporate Presentation of SS Morsel India Pvt. Ltd." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #060F2A 0%, #0B1E4A 50%, #081535 100%)' }}>
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        {/* Glow orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[100px]" style={{ background: 'radial-gradient(circle, #0B3D91, transparent)' }} />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[80px]" style={{ background: 'radial-gradient(circle, #1E824C, transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-semibold tracking-[0.2em] uppercase font-inter">Government Verified Credentials</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-poppins leading-tight mb-6"
          >
            <span className="text-white">Corporate </span>
            <span style={{
              background: 'linear-gradient(90deg, #3B82F6, #10B981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Certifications</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-inter max-w-2xl mx-auto mb-16"
          >
            Authorized and licensed by the Government of India. Operating at the highest benchmarks of quality, safety, and regulatory compliance.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl font-bold text-white font-poppins">{s.value}</div>
                <div className="text-gray-500 text-xs font-inter mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Certificates Grid ── */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #F0F4FF 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <FiShield size={14} className="text-blue-600" />
              <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase font-inter">All Registrations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-[#060F2A] mb-4">
              Our Official{' '}
              <span style={{
                background: 'linear-gradient(90deg, #0B3D91, #1E824C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Documents</span>
            </h2>
            <p className="text-gray-500 font-inter text-lg max-w-xl mx-auto">
              Every certificate is issued by official government bodies and regulatory authorities of India.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 90 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 30px 70px ${cert.glowColor}, 0 4px 20px rgba(0,0,0,0.08)`
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = cert.tagColor + '40'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,0,0,0.06)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
                }}
                onClick={() => {
                  if (cert.downloadUrl) {
                    const link = document.createElement('a');
                    link.href = cert.downloadUrl;
                    link.download = cert.downloadUrl.split('/').pop();
                    link.click();
                  } else if (cert.hasImage) {
                    openLightbox(cert, certificates.filter(c => c.hasImage).indexOf(cert));
                  }
                }}
              >
                {/* Top gradient bar */}
                <div className="h-1.5 w-full" style={{ background: cert.gradient }} />

                {/* Certificate Preview / Icon Area */}
                <div
                  className="relative w-full h-52 flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(145deg, ${cert.tagColor}08, ${cert.tagColor}18)` }}
                >
                  {cert.hasImage ? (
                    <>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-700"
                        style={{ filter: 'brightness(0.97)' }}
                      />
                      {/* Overlay on hover */}
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ background: `${cert.tagColor}CC`, backdropFilter: 'blur(2px)' }}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(cert, certificates.filter(c => c.hasImage).indexOf(cert));
                          }}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm font-poppins transition-all duration-200 hover:scale-105"
                          style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(10px)' }}
                        >
                          <FiZoomIn size={16} />
                          View Certificate
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Stylized icon for certs without image */
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-3 shadow-xl group-hover:scale-110 transition-transform duration-400"
                          style={{ background: cert.gradient }}
                        >
                          {cert.icon}
                        </div>
                        <span
                          className="text-xs font-semibold font-inter px-3 py-1 rounded-full"
                          style={{ background: cert.tagColor + '15', color: cert.tagColor }}
                        >
                          {cert.tag}
                        </span>
                      </div>
                      {cert.downloadUrl && (
                        /* Overlay on hover for download */
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ background: `${cert.tagColor}CC`, backdropFilter: 'blur(2px)' }}
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const link = document.createElement('a');
                              link.href = cert.downloadUrl;
                              link.download = cert.downloadUrl.split('/').pop();
                              link.click();
                            }}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm font-poppins transition-all duration-200 hover:scale-105"
                            style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(10px)' }}
                          >
                            <FiDownload size={16} />
                            Download PDF
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Status badge */}
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-poppins backdrop-blur-sm"
                    style={{ background: cert.statusColor + 'DD', color: '#fff' }}
                  >
                    <FiCheckCircle size={11} />
                    {cert.status}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  {/* Tag */}
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-semibold font-inter mb-3 px-3 py-1 rounded-full"
                    style={{ background: cert.tagColor + '12', color: cert.tagColor }}
                  >
                    <FiAward size={11} />
                    {cert.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#060F2A] font-poppins mb-1 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Number */}
                  <p className="text-xs font-mono text-gray-500 mb-3 tracking-wide">{cert.number}</p>

                  {/* Description */}
                  <p className="text-gray-500 text-sm font-inter leading-relaxed mb-5 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    <div className="flex justify-between text-xs font-inter">
                      <span className="text-gray-400">Issued by</span>
                      <span className="text-gray-700 font-semibold text-right max-w-[55%]">{cert.issuedBy}</span>
                    </div>
                    <div className="flex justify-between text-xs font-inter">
                      <span className="text-gray-400">Date</span>
                      <span className="text-gray-700 font-semibold">{cert.issuedOn}</span>
                    </div>
                    <div className="flex justify-between text-xs font-inter">
                      <span className="text-gray-400">Validity</span>
                      <span className="font-semibold" style={{ color: cert.statusColor }}>{cert.validity}</span>
                    </div>
                  </div>

                  {/* CTA button */}
                  {cert.hasImage ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(cert, certificates.filter(c => c.hasImage).indexOf(cert));
                      }}
                      className="mt-5 w-full py-3 rounded-xl text-sm font-semibold font-poppins flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3"
                      style={{
                        background: cert.gradient,
                        color: '#fff',
                        boxShadow: `0 8px 24px ${cert.glowColor}`,
                      }}
                    >
                      <FiZoomIn size={15} />
                      View Full Certificate
                    </button>
                  ) : cert.downloadUrl ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const link = document.createElement('a');
                        link.href = cert.downloadUrl;
                        link.download = cert.downloadUrl.split('/').pop();
                        link.click();
                      }}
                      className="mt-5 w-full py-3 rounded-xl text-sm font-semibold font-poppins flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3"
                      style={{
                        background: cert.gradient,
                        color: '#fff',
                        boxShadow: `0 8px 24px ${cert.glowColor}`,
                      }}
                    >
                      <FiDownload size={15} />
                      Download PDF
                    </button>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Banner ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #060F2A 0%, #0B1E4A 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* decorative blobs */}
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full opacity-20 blur-[60px]" style={{ background: '#0B3D91' }} />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full opacity-20 blur-[60px]" style={{ background: '#1E824C' }} />

            <div className="relative z-10">
              <div className="text-4xl mb-4">🇮🇳</div>
              <h3 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
                Fully Compliant & <span style={{ background: 'linear-gradient(90deg, #3B82F6, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Government Approved</span>
              </h3>
              <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto">
                SS Morsel India Pvt. Ltd. operates with full legal authorization under the Ministry of Corporate Affairs, MSME, GST, and MSTC.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {['MCA Registered', 'GST Compliant', 'MSME Certified', 'MSTC Authorized'].map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold font-inter"
                    style={{ background: 'rgba(255,255,255,0.07)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <span className="text-green-400">✓</span> {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(4,9,28,0.97)', backdropFilter: 'blur(16px)' }}
            onClick={() => setLightboxCert(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxCert(null)}
              className="absolute top-5 right-5 w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-110 hover:rotate-90 duration-300 z-[10001]"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <FiX size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative max-w-3xl w-full flex flex-col items-center gap-6"
              onClick={e => e.stopPropagation()}
            >
              {/* Cert title pill */}
              <div
                className="flex items-center gap-3 px-5 py-2.5 rounded-full"
                style={{ background: lightboxCert.tagColor + 'CC', backdropFilter: 'blur(10px)' }}
              >
                <span className="text-xl">{lightboxCert.icon}</span>
                <span className="text-white font-semibold font-poppins text-sm">{lightboxCert.title}</span>
              </div>

              {/* Image */}
              <div
                className="w-full rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: `2px solid ${lightboxCert.tagColor}50` }}
              >
                <img
                  src={lightboxCert.image}
                  alt={lightboxCert.title}
                  className="w-full object-contain max-h-[65vh] bg-white"
                />
              </div>

              {/* Info row */}
              <div
                className="flex items-center gap-6 px-8 py-4 rounded-2xl text-sm font-inter text-gray-300"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span><span className="text-gray-500 mr-2">Ref:</span>{lightboxCert.number}</span>
                <span className="text-gray-700">|</span>
                <span><span className="text-gray-500 mr-2">Issued:</span>{lightboxCert.issuedOn}</span>
                <span className="text-gray-700">|</span>
                <span
                  className="flex items-center gap-1 font-semibold"
                  style={{ color: lightboxCert.statusColor }}
                >
                  <FiCheckCircle size={13} /> {lightboxCert.status}
                </span>
              </div>

              {/* Navigation arrows */}
              {certificates.filter(c => c.hasImage).length > 1 && (
                <div className="flex gap-3">
                  <button
                    onClick={() => navigate(-1)}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 duration-200"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => navigate(1)}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 duration-200"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <FiChevronRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </PageTransition>
  )
}

export default CertificatesPage
