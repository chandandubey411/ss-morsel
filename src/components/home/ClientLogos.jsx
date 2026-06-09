import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { clientLogosForSlider } from '../../data/clients'

const ClientLogos = () => {
  // Duplicate for seamless loop
  const logos = [...clientLogosForSlider, ...clientLogosForSlider]

  return (
    <section className="py-20 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <SectionHeading
            badge="Our Clients"
            title="Trusted By"
            highlight="Industry Leaders"
            subtitle="Serving multinational corporations and Fortune 500 companies across India for over 18 years."
            align="center"
          />
        </div>
      </div>

      {/* Infinite Slider */}
      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(90deg, #F8FAFC, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(-90deg, #F8FAFC, transparent)' }} />

        <div className="flex">
          <motion.div
            className="flex gap-6 items-center flex-shrink-0"
            animate={{ x: [0, '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {logos.map((logo, i) => (
              <LogoCard key={i} logo={logo} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const LogoCard = ({ logo }) => {
  const initials = logo.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className="flex-shrink-0 px-6 py-4 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 group cursor-default flex flex-col items-center gap-2"
      style={{ minWidth: '150px' }}
    >
      {/* Logo image */}
      <div className="w-16 h-10 flex items-center justify-center">
        <img
          src={logo.logo}
          alt={`${logo.name} logo`}
          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          onError={e => {
            if (logo.fallbackLogo && e.target.src !== logo.fallbackLogo) {
              e.target.src = logo.fallbackLogo
            } else {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }
          }}
        />
        {/* Initials fallback */}
        <div className="hidden w-10 h-10 rounded-lg items-center justify-center bg-primary text-white font-bold font-poppins text-sm">
          {initials}
        </div>
      </div>

      {/* Name */}
      <div className="text-navy font-semibold text-xs font-poppins group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
        {logo.name}
      </div>

      {/* Hover underline accent */}
      <div className="w-6 h-0.5 bg-secondary mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </div>
  )
}

export default ClientLogos
