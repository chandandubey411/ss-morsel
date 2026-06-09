import { motion } from 'framer-motion'
import AnimatedCounter from '../common/AnimatedCounter'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed', icon: '🏢', color: '#0B3D91' },
  { value: 200, suffix: '+', label: 'Satisfied Clients', icon: '🤝', color: '#1E824C' },
  { value: 18, suffix: '+', label: 'Years Experience', icon: '📅', color: '#1E824C' },
  { value: 50, suffix: '+', label: 'Cities Served', icon: '🗺️', color: '#0B3D91' },
]

const Stats = () => {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: '#081C3A' }}>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div
                className="text-4xl md:text-5xl font-bold font-poppins mb-2 text-white"
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-300 text-sm font-inter">{stat.label}</div>
              <div
                className="w-12 h-0.5 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: stat.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
