import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPlay, FiArrowRight, FiCheckCircle, FiAward, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi'
import dlfImg from '../../assets/images/dlf-cyber-city-hub-commercial-600nw-2617682787.webp'

const Hero = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <FiTrendingUp size={20} />, accent: '#00C389' },
    { value: '200+', label: 'Satisfied Clients', icon: <FiUsers size={20} />, accent: '#FF8A00' },
    { value: '18+', label: 'Years Experience', icon: <FiAward size={20} />, accent: '#0B3D91' },
    { value: 'Pan India', label: 'Service Coverage', icon: <FiShield size={20} />, accent: '#00C389' },
  ]

  const clients = ['DLF', 'Google', 'Accenture', 'Deloitte', 'Infosys', 'TCS', 'KPMG', 'IBM']

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — DLF Building Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={dlfImg}
          alt="DLF Building Background"
          className="w-full h-full object-cover scale-105"
          style={{ objectPosition: 'center top' }}
        />
        {/* Strong dark overlay for readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, rgba(5,18,45,0.97) 0%, rgba(5,18,45,0.90) 45%, rgba(5,18,45,0.60) 100%)' }} />
        {/* Subtle teal vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(0,195,137,0.06) 0%, transparent 65%)' }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05122d] to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-secondary/30"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 23 + 10) % 100}%`,
            }}
            animate={{ y: [0, -50, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">

          {/* ── LEFT: Text Content ── */}
          <div className="py-16 lg:py-0">
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

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins text-white leading-[1.1] mb-6"
            >
              India's Leading{' '}
              <span className="text-[#1E824C]">Office Dismantling</span>{' '}
              &amp; Bare-Shelling Experts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed mb-8 max-w-xl"
            >
              Trusted by multinational corporations for dismantling, reinstatement, IT asset disposal and waste management services across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {['MCA Registered', 'MSTC Licensed', 'Pan India Service'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <FiCheckCircle className="text-secondary flex-shrink-0" size={16} />
                  <span className="text-gray-300 text-sm font-inter">{badge}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white font-poppins text-sm transition-all duration-300 hover:-translate-y-1 group"
                style={{ background: 'linear-gradient(135deg, #0B3D91, #00C389)', boxShadow: '0 8px 30px rgba(11,61,145,0.4)' }}
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

          {/* ── RIGHT: Stats Showcase Panel ── */}
          <div className="hidden lg:flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 70 }}
              className="relative w-full max-w-[460px]"
            >
              {/* Glow behind panel */}
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(0,195,137,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }}
              />

              {/* Main glass panel */}
              <div
                className="relative rounded-3xl p-8 flex flex-col gap-6"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                }}
              >
                {/* Panel header */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-gray-400 text-xs font-inter tracking-widest uppercase mb-1">Our Track Record</p>
                    <h3 className="text-white text-xl font-bold font-poppins">Proven Excellence</h3>
                  </div>
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(0,195,137,0.15)', border: '1px solid rgba(0,195,137,0.3)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-semibold font-inter tracking-wider">LIVE STATS</span>
                  </div>
                </div>

                {/* 2×2 Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.12 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="relative rounded-2xl p-4 cursor-default overflow-hidden"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {/* Accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                        style={{ background: stat.accent }}
                      />
                      <div
                        className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-3"
                        style={{ background: `${stat.accent}22`, color: stat.accent }}
                      >
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold font-poppins text-white">{stat.value}</div>
                      <div className="text-gray-400 text-xs font-inter mt-0.5 leading-snug">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-5">
                  <p className="text-gray-400 text-[11px] font-inter tracking-widest uppercase mb-3">Trusted by Global Leaders</p>
                  {/* Marquee-style scrolling client names */}
                  <div className="overflow-hidden relative">
                    <motion.div
                      className="flex gap-5 whitespace-nowrap"
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    >
                      {[...clients, ...clients].map((c, i) => (
                        <span
                          key={i}
                          className="text-white/70 text-sm font-semibold font-poppins px-3 py-1 rounded-lg flex-shrink-0"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                          {c}
                        </span>
                      ))}
                    </motion.div>
                    {/* Fade edges */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[rgba(5,18,45,0.4)] to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[rgba(5,18,45,0.4)] to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Bottom CTA strip */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="flex items-center justify-between rounded-2xl px-5 py-3.5"
                  style={{ background: 'linear-gradient(135deg, rgba(11,61,145,0.4), rgba(0,195,137,0.3))', border: '1px solid rgba(0,195,137,0.2)' }}
                >
                  <div>
                    <div className="text-white font-bold font-poppins text-sm">Ready to start?</div>
                    <div className="text-gray-400 text-xs font-inter">Free consultation in 24hrs</div>
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 text-secondary font-bold font-poppins text-sm hover:gap-3 transition-all duration-300"
                  >
                    Talk to us <FiArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero
