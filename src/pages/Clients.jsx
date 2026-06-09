import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import PageTransition from '../components/layout/PageTransition'
import SectionHeading from '../components/common/SectionHeading'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'
import { clients } from '../data/clients'

const Clients = () => {

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

      {/* Client Logo Grid */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              badge="Our Client Portfolio"
              title="Companies That"
              highlight="Trust Us"
              subtitle="A carefully curated portfolio of industry leaders who have entrusted us with their most sensitive projects."
              align="center"
            />
          </div>

          {/* Platinum Clients */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #0B3D91)' }} />
              <span className="text-primary font-bold font-poppins text-sm px-4 py-1.5 rounded-full bg-primary/10">🏆 Platinum Partners</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #0B3D91, transparent)' }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.filter(c => c.tier === 'platinum').map((client, i) => (
                <ClientCard key={i} client={client} index={i} tier="platinum" />
              ))}
            </div>
          </div>

          {/* Gold Clients */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #FF8A00)' }} />
              <span className="text-accent font-bold font-poppins text-sm px-4 py-1.5 rounded-full bg-accent/10">🥇 Gold Partners</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #FF8A00, transparent)' }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.filter(c => c.tier === 'gold').map((client, i) => (
                <ClientCard key={i} client={client} index={i} tier="gold" />
              ))}
            </div>
          </div>

          {/* Silver Clients */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #6b7280)' }} />
              <span className="text-gray-500 font-bold font-poppins text-sm px-4 py-1.5 rounded-full bg-gray-100">🥈 Silver Partners</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #6b7280, transparent)' }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.filter(c => c.tier === 'silver').map((client, i) => (
                <ClientCard key={i} client={client} index={i} tier="silver" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Office Photos — one card per client */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading
              badge="On-Site Portfolio"
              title="Clients'"
              highlight="Corporate Offices"
              subtitle="Real site photos of corporate workspaces handled by SS Morsel across India — every client, every project."
              align="center"
            />
          </div>

          {/* Platinum Offices */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #0B3D91)' }} />
              <span className="text-primary font-bold font-poppins text-sm px-4 py-1.5 rounded-full bg-primary/10">🏆 Platinum Partners — Office Sites</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #0B3D91, transparent)' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.filter(c => c.tier === 'platinum').map((client, i) => (
                <OfficeCard key={i} client={client} index={i} tier="platinum" />
              ))}
            </div>
          </div>

          {/* Gold Offices */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #FF8A00)' }} />
              <span className="text-accent font-bold font-poppins text-sm px-4 py-1.5 rounded-full bg-accent/10">🥇 Gold Partners — Office Sites</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #FF8A00, transparent)' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clients.filter(c => c.tier === 'gold').map((client, i) => (
                <OfficeCard key={i} client={client} index={i} tier="gold" />
              ))}
            </div>
          </div>

          {/* Silver Offices */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #6b7280)' }} />
              <span className="text-gray-500 font-bold font-poppins text-sm px-4 py-1.5 rounded-full bg-gray-100">🥈 Silver Partners — Office Sites</span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #6b7280, transparent)' }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {clients.filter(c => c.tier === 'silver').map((client, i) => (
                <OfficeCard key={i} client={client} index={i} tier="silver" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </PageTransition>
  )
}

const ClientCard = ({ client, index, tier }) => {
  const tierColors = {
    platinum: { border: '#0B3D91', shadow: 'rgba(11,61,145,0.18)', accent: '#0B3D91', bg: 'rgba(11,61,145,0.04)' },
    gold:     { border: '#FF8A00', shadow: 'rgba(255,138,0,0.18)',  accent: '#FF8A00', bg: 'rgba(255,138,0,0.04)' },
    silver:   { border: '#6b7280', shadow: 'rgba(107,114,128,0.18)', accent: '#6b7280', bg: 'rgba(107,114,128,0.04)' },
  }
  const t = tierColors[tier]

  // Generate initials as logo fallback
  const initials = client.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, type: 'spring', stiffness: 120 }}
      className="relative bg-white rounded-2xl flex flex-col items-center justify-center text-center border transition-all duration-300 hover:-translate-y-2 cursor-default group overflow-hidden"
      style={{
        borderColor: 'rgba(229,231,235,1)',
        boxShadow: '0 4px 24px rgba(11,61,145,0.06)',
        minHeight: '130px',
        padding: '24px 20px 20px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = t.border
        e.currentTarget.style.boxShadow = `0 16px 40px ${t.shadow}`
        e.currentTarget.style.background = t.bg
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(229,231,235,1)'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(11,61,145,0.06)'
        e.currentTarget.style.background = '#ffffff'
      }}
    >
      {/* Tier accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: t.accent }}
      />

      {/* Logo image with initials fallback */}
      <div className="w-20 h-12 flex items-center justify-center mb-3">
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-400"
          onError={e => {
            if (client.fallbackLogo && e.target.src !== client.fallbackLogo) {
              e.target.src = client.fallbackLogo
            } else {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }
          }}
        />
        {/* Initials fallback */}
        <div
          className="hidden w-12 h-12 rounded-xl items-center justify-center text-white font-bold font-poppins text-lg"
          style={{ background: t.accent }}
        >
          {initials}
        </div>
      </div>

      {/* Company name */}
      <div className="text-navy font-semibold text-sm font-poppins group-hover:text-primary transition-colors duration-300 leading-tight">
        {client.name}
      </div>
    </motion.div>
  )
}

const OfficeCard = ({ client, index, tier }) => {
  const tierColors = {
    platinum: { accent: '#0B3D91', shadow: 'rgba(11,61,145,0.20)', badge: 'bg-blue-50 text-blue-700 border-blue-100' },
    gold:     { accent: '#FF8A00', shadow: 'rgba(255,138,0,0.20)',  badge: 'bg-amber-50 text-amber-700 border-amber-100' },
    silver:   { accent: '#6b7280', shadow: 'rgba(107,114,128,0.20)', badge: 'bg-gray-100 text-gray-600 border-gray-200' },
  }
  const t = tierColors[tier]

  const initials = client.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-default flex flex-col"
      style={{ boxShadow: '0 4px 20px rgba(11,61,145,0.07)' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 20px 50px ${t.shadow}`
        e.currentTarget.style.borderColor = t.accent
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(11,61,145,0.07)'
        e.currentTarget.style.borderColor = 'rgba(243,244,246,1)'
      }}
    >
      {/* Office Photo */}
      <div className="relative overflow-hidden h-44">
        {/* Tier color top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 z-10"
          style={{ background: t.accent }}
        />
        <img
          src={client.officeImage}
          alt={`${client.name} office`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentElement.style.background = 'linear-gradient(135deg, #081C3A, #0B3D91)'
          }}
        />
        {/* Dark overlay with company name on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <span className="text-white font-poppins font-bold text-xs tracking-wide">
            {client.officeDesc?.split('—')[0]?.trim()}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Logo + Name row */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-8 flex items-center justify-center flex-shrink-0">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-w-full max-h-full object-contain"
              onError={e => {
                if (client.fallbackLogo && e.target.src !== client.fallbackLogo) {
                  e.target.src = client.fallbackLogo
                } else {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }
              }}
            />
            <div
              className="hidden w-8 h-8 rounded-lg items-center justify-center text-white font-bold font-poppins text-xs flex-shrink-0"
              style={{ background: t.accent }}
            >
              {initials}
            </div>
          </div>
          <span className="font-bold text-navy font-poppins text-sm leading-tight">{client.name}</span>
        </div>

        {/* Description */}
        {client.officeDesc && (
          <p className="text-xs text-gray-500 font-inter leading-relaxed flex items-start gap-1.5">
            <FiMapPin size={10} className="mt-0.5 flex-shrink-0" style={{ color: t.accent }} />
            {client.officeDesc.includes('—')
              ? client.officeDesc.split('—')[1]?.trim()
              : client.officeDesc}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default Clients

