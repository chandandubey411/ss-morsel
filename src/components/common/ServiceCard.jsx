import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const ServiceCard = ({ service, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
        {/* Icon Badge */}
        <div
          className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}
        >
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy font-poppins mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5 font-inter line-clamp-2">
          {service.shortDesc}
        </p>

        {/* Features Preview */}
        <div className="space-y-1.5 mb-5">
          {service.features.slice(0, 3).map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
              <span className="text-xs text-gray-600 font-inter">{f}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-primary/20 to-secondary/20 mb-4" />

        {/* CTA */}
        <Link
          to={`/services`}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/btn hover:gap-3 transition-all duration-300"
        >
          Learn More
          <FiArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Hover Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px rgba(11,61,145,0.2)` }}
      />
    </motion.div>
  )
}

export default ServiceCard
