import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from '../common/ProjectCard'
import { projects, projectFilters } from '../../data/projects'

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects.slice(0, 6)
    : projects.filter(p => p.type === activeFilter).slice(0, 6)

  return (
    <section className="section-padding bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-10">
          <SectionHeading
            badge="Our Work"
            title="Featured"
            highlight="Projects"
            subtitle="A showcase of our most prestigious projects delivered across India for global corporations."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-sm font-poppins hover:bg-primary hover:text-white transition-all duration-300 whitespace-nowrap group"
          >
            All Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {projectFilters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold font-poppins transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'text-white shadow-[0_4px_20px_rgba(11,61,145,0.3)]'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
              style={activeFilter === filter.value ? { background: '#0B3D91' } : {}}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project, i) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
