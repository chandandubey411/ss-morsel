import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageTransition from '../components/layout/PageTransition'
import SectionHeading from '../components/common/SectionHeading'
import { services } from '../data/services'
import CTA from '../components/home/CTA'

const Services = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Services | SS Morsel India Pvt Ltd</title>
        <meta name="description" content="Office dismantling, bare shelling, reinstatement, IT asset disposal, scrap purchasing and e-waste management services by SS Morsel India." />
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
            <span className="text-secondary text-xs font-semibold tracking-wider uppercase font-inter">Our Services</span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-poppins leading-tight mb-6"
          >
            Comprehensive{' '}
            <span className="text-[#1E824C]">
              Workspace Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg font-inter max-w-2xl mx-auto"
          >
            End-to-end office transformation services delivered with precision, safety, and environmental compliance.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              style={{ flexDirection: i % 2 !== 0 ? 'row-reverse' : 'row' }}
            >
              {/* Image */}
              <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden h-80 lg:h-[420px] group">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  {/* Icon Badge */}
                  <div
                    className="absolute top-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                    style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(15px)', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold font-inter mb-4"
                  style={{ background: `${service.bgColor}15`, color: service.bgColor }}>
                  Service 0{service.id}
                </span>
                <h2 className="text-3xl font-bold text-navy font-poppins mb-4">{service.title}</h2>
                <p className="text-gray-600 font-inter leading-relaxed mb-6">{service.description}</p>

                <h4 className="text-navy font-semibold font-poppins text-sm mb-4 uppercase tracking-wider">Key Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((f, fi) => (
                    <div key={fi} className="flex items-start gap-2.5">
                      <FiCheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-600 text-sm font-inter">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold font-poppins text-sm group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${service.bgColor}, ${service.bgColor}CC)`,
                    boxShadow: `0 4px 20px ${service.bgColor}40`,
                  }}
                >
                  Get Quote for This Service
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}

export default Services
