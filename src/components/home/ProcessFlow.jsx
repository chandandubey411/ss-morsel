import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { PROCESS_STEPS } from '../../utils/constants'

const ProcessFlow = () => {
  return (
    <section className="section-padding overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8FAFC, #EEF4FF)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            badge="How We Work"
            title="Our"
            highlight="10-Step Process"
            subtitle="A systematic, transparent, and client-focused approach to every project from scope to final closure."
            align="center"
          />
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          {/* Row 1 — Steps 1-5 */}
          <div className="relative mb-16">
            <div className="grid grid-cols-5 gap-4">
              {PROCESS_STEPS.slice(0, 5).map((step, i) => (
                <StepCard key={i} step={step} index={i} isTop />
              ))}
            </div>
            {/* Connector */}
            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 -z-0"
              style={{ background: 'linear-gradient(90deg, #0B3D91, #00C389)' }} />
            {/* Arrow down */}
            <div className="absolute -bottom-8 right-[10%] w-8 h-8 flex items-center justify-center">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-primary" />
            </div>
          </div>

          {/* Row 2 — Steps 6-10 (reversed) */}
          <div className="relative">
            <div className="grid grid-cols-5 gap-4">
              {PROCESS_STEPS.slice(5).map((step, i) => (
                <StepCard key={i} step={step} index={i + 5} isTop={false} reverse />
              ))}
            </div>
            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 -z-0"
              style={{ background: 'linear-gradient(90deg, #00C389, #FF8A00)' }} />
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4 items-start"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 font-poppins"
                style={{ background: `linear-gradient(135deg, #0B3D91, #00C389)` }}
              >
                {step.step}
              </div>
              <div className="flex-1 bg-white rounded-xl p-4 shadow-card">
                <h4 className="text-navy font-bold text-sm font-poppins">{step.title}</h4>
                <p className="text-gray-500 text-xs font-inter mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const StepCard = ({ step, index, isTop, reverse }) => {
  const colors = ['#0B3D91', '#00C389', '#FF8A00', '#0B3D91', '#00C389']
  const color = colors[index % 5]

  return (
    <motion.div
      initial={{ opacity: 0, y: isTop ? -30 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (reverse ? 4 - (index - 5) : index) * 0.1 }}
      className={`flex flex-col ${isTop ? 'items-center' : 'items-center'} group`}
    >
      {/* Step Number */}
      <div
        className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs font-poppins shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
      >
        {step.step}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `0 0 20px ${color}60` }}
        />
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-4 shadow-card text-center hover:shadow-card-hover transition-shadow duration-300 w-full">
        <h4 className="text-navy font-bold text-xs font-poppins mb-1 leading-tight">{step.title}</h4>
        <p className="text-gray-500 text-xs font-inter leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  )
}

export default ProcessFlow
