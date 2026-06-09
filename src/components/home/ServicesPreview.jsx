import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import ServiceCard from '../common/ServiceCard'
import { services } from '../../data/services'

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14">
          <SectionHeading
            badge="What We Do"
            title="Premium"
            highlight="Services"
            subtitle="Comprehensive workplace transformation services delivered with precision, safety, and environmental responsibility."
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-sm font-poppins hover:bg-primary hover:text-white transition-all duration-300 whitespace-nowrap group"
            >
              View All Services
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
