import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { WHY_CHOOSE_US } from '../../utils/constants'
import { FiUsers, FiShield, FiClock, FiDollarSign, FiAlertTriangle, FiGlobe } from 'react-icons/fi'

const iconMap = { FiUsers, FiShield, FiClock, FiDollarSign, FiAlertTriangle, FiGlobe }

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            badge="Why SS Morsel"
            title="Why Choose"
            highlight="Us"
            subtitle="Six compelling reasons why India's top corporations trust us with their most critical projects."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-transparent transition-all duration-500 hover:-translate-y-2"
                style={{
                  boxShadow: '0 4px 24px rgba(11,61,145,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(11,61,145,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(11,61,145,0.06)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {Icon && <Icon size={24} style={{ color: item.color }} />}
                </div>

                {/* Content */}
                <h3 className="text-navy font-bold text-lg font-poppins mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm font-inter leading-relaxed">{item.description}</p>

                {/* Bottom Accent */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: item.color }}
                />

                {/* Corner Decoration */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ background: item.color }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
