import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageTransition from '../components/layout/PageTransition'
import ProjectCard from '../components/common/ProjectCard'
import { projects, projectFilters } from '../data/projects'
import CTA from '../components/home/CTA'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.type === activeFilter)

  return (
    <PageTransition>
      <Helmet>
        <title>Projects | SS Morsel India Pvt Ltd</title>
        <meta name="description" content="Explore our portfolio of 500+ office dismantling, bare shelling, and IT asset disposal projects across India." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #081C3A, #0B3D91)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-secondary/10 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-secondary text-xs font-semibold tracking-wider uppercase">Our Portfolio</span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-poppins leading-tight mb-6"
          >
            500+ Successful{' '}
            <span className="text-[#1E824C]">
              Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg font-inter max-w-2xl mx-auto"
          >
            From 5,000 sq ft to 60,000 sq ft — a track record of delivering complex projects on time and within budget.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
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

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div key={project.id} layout>
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500 font-inter">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}

export default Projects
