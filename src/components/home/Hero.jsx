import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPlay, FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const Hero = () => {
  const floatingStats = [
    { value: '500+', label: 'Projects Completed', icon: '🏢', color: '#0B3D91' },
    { value: '200+', label: 'Satisfied Clients', icon: '🤝', color: '#00C389' },
    { value: '18+', label: 'Years Experience', icon: '📅', color: '#FF8A00' },
    { value: 'ISO', label: 'Certified Standards', icon: '🏆', color: '#0B3D91' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
          alt="Office Dismantling Background"
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              background: i % 2 === 0 ? '#0B3D91' : '#00C389',
              left: `${10 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <div className="py-16 lg:py-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-secondary/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary text-xs font-semibold font-inter tracking-wider uppercase">
                India's #1 Office Dismantling Experts
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins text-white leading-[1.1] mb-6"
            >
              India's Leading{' '}
              <span className="text-[#1E824C]">Office Dismantling</span> & Bare-Shelling Experts
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed mb-8 max-w-xl"
            >
              Trusted by multinational corporations for dismantling, reinstatement, IT asset disposal and waste management services across India.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {['ISO 9001:2015 Certified', 'MSTC Licensed', 'Pan India Service'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <FiCheckCircle className="text-secondary flex-shrink-0" size={16} />
                  <span className="text-gray-300 text-sm font-inter">{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white font-poppins text-sm transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: 'linear-gradient(135deg, #0B3D91, #00C389)',
                  boxShadow: '0 8px 30px rgba(11,61,145,0.4)',
                }}
              >
                Get Free Quote
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white font-poppins text-sm transition-all duration-300 hover:-translate-y-1 border border-white/30 hover:bg-white/10"
              >
                <FiPlay size={16} />
                View Projects
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Floating Stats Cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {floatingStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
                className="w-full max-w-xs"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                  className="rounded-2xl p-5 flex items-center gap-4"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}40` }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-poppins" style={{ color: '#FF8A00' }}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm font-inter">{stat.label}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-xs font-inter tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
