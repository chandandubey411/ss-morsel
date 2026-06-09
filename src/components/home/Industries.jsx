import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { INDUSTRIES } from '../../utils/constants'

const Industries = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            badge="Industries We Serve"
            title="Trusted Across"
            highlight="Industries"
            subtitle="From multinational corporations to banking institutions — we serve diverse sectors with specialized expertise."
            align="center"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl p-8 text-center border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden"
              style={{ background: '#FFFFFF', boxShadow: '0 4px 24px rgba(11,61,145,0.06)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 60px rgba(11,61,145,0.15)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(11,61,145,0.06)'}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(11,61,145,0.03), rgba(0,195,137,0.03))' }} />

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                <h3 className="text-navy font-bold text-base font-poppins mb-2 group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-sm font-inter leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
