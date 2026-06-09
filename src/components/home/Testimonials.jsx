import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import { testimonials } from '../../data/testimonials'

const Testimonials = () => {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section className="section-padding overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8FAFC, #EEF4FF)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            badge="Client Reviews"
            title="What Our"
            highlight="Clients Say"
            subtitle="Hear from the leaders who trusted us with their most critical workspace projects."
            align="center"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(11,61,145,0.1)',
              boxShadow: '0 20px 60px rgba(11,61,145,0.12)',
            }}
          >
            {/* Quote Mark */}
            <div
              className="absolute top-6 right-8 text-8xl font-bold leading-none opacity-5 font-poppins select-none"
              style={{ color: '#0B3D91' }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <FiStar key={i} className="text-accent fill-accent" size={18} style={{ fill: '#FF8A00' }} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-base md:text-lg font-inter leading-relaxed mb-8 relative z-10">
              "{testimonials[active].review}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-14 h-14 rounded-2xl object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-navy font-bold font-poppins">{testimonials[active].name}</h4>
                <p className="text-primary text-sm font-inter">{testimonials[active].designation}</p>
                <p className="text-gray-500 text-xs font-inter">{testimonials[active].company}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors duration-300 shadow-card"
            >
              <FiChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-primary/50'}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors duration-300 shadow-card"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>

          {/* Side Cards (desktop) */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 w-20 opacity-30">
            <div className="bg-white rounded-2xl p-3 shadow-card border border-gray-100">
              <img src={testimonials[(active - 1 + testimonials.length) % testimonials.length].avatar} alt="" className="w-full h-16 object-cover rounded-xl" />
            </div>
          </div>
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 w-20 opacity-30">
            <div className="bg-white rounded-2xl p-3 shadow-card border border-gray-100">
              <img src={testimonials[(active + 1) % testimonials.length].avatar} alt="" className="w-full h-16 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
