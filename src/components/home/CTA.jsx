import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { BRAND } from '../../utils/constants'

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: '#081C3A' }} />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            background: i % 2 === 0 ? 'rgba(30,130,76,0.08)' : 'rgba(11,61,145,0.05)',
            left: `${10 + i * 30}%`,
            top: `${10 + i * 20}%`,
            filter: 'blur(60px)',
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-secondary/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-secondary text-xs font-semibold font-inter tracking-wider uppercase">
            Ready to Get Started?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins leading-tight mb-6"
        >
          Let's Transform Your{' '}
          <span className="text-[#1E824C]">
            Workspace
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg font-inter leading-relaxed mb-10"
        >
          Get a free, no-obligation quote for your office dismantling, reinstatement, or bare shelling project. We respond within 4 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white font-bold font-poppins text-sm transition-all duration-300 hover:-translate-y-1 group"
            style={{
              background: '#0B3D91',
              boxShadow: '0 8px 30px rgba(11,61,145,0.3)',
            }}
          >
            Get Free Quote
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <a
            href={`tel:${BRAND.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white font-bold font-poppins text-sm border border-white/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            <FiPhone size={16} />
            Call Now
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-6 justify-center mt-10"
        >
          {['✅ Free Site Survey', '✅ 4hr Response', '✅ ISO Certified', '✅ Pan India Service'].map((b, i) => (
            <span key={i} className="text-gray-400 text-sm font-inter">{b}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
