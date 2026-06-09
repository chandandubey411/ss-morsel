import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiUser } from 'react-icons/fi'

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-[#0B3D91]">
            {project.type}
          </span>
        </div>

        {/* Overlay Content */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold font-poppins text-lg leading-tight">{project.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="flex items-center gap-1.5">
            <FiMapPin className="text-secondary text-xs flex-shrink-0" />
            <span className="text-xs text-gray-600 font-inter truncate">{project.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiCalendar className="text-accent text-xs flex-shrink-0" />
            <span className="text-xs text-gray-600 font-inter">{project.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiUser className="text-primary text-xs flex-shrink-0" />
            <span className="text-xs text-gray-600 font-inter truncate">{project.client}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed font-inter line-clamp-2">{project.description}</p>

        {project.area && project.area !== 'N/A' && (
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 font-inter">Area</span>
            <span className="text-sm font-semibold text-primary font-poppins">{project.area}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard
