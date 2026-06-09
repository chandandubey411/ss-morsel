import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiUsers, FiTarget } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const AboutPreview = () => {
  const highlights = [
    { icon: FiAward, title: 'ISO 9001:2015', desc: 'Quality certified processes' },
    { icon: FiUsers, title: '200+ Clients', desc: 'MNCs & Enterprise companies' },
    { icon: FiTarget, title: 'Pan India', desc: 'Operations across India' },
  ]

  return (
    <section className="section-padding bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <SectionHeading
              badge="About SS Morsel"
              title="18+ Years of"
              highlight="Excellence & Trust"
              subtitle="SS Morsel India Pvt. Ltd. is one of the leading office dismantling, bare shelling, and workspace reinstatement entities. Established in 2015, we have successfully executed 500+ projects across major commercial hubs like Gurgaon's DLF Cyber City, Cyber Hub, Noida, Bangalore, and Mumbai."
            />

            <div className="grid grid-cols-3 gap-4 my-8">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center p-4 bg-white rounded-2xl shadow-card"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <div className="text-navy font-bold text-sm font-poppins">{title}</div>
                  <div className="text-gray-500 text-xs font-inter mt-1">{desc}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3 mb-8"
            >
              {[
                'Government approved MSTC licensed e-waste dealer',
                'MSME registered enterprise with GST compliance',
                'Expert team with PPE compliance and HSE standards',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <p className="text-gray-600 text-sm font-inter">{point}</p>
                </div>
              ))}
            </motion.div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold font-poppins text-sm group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#0B3D91',
                boxShadow: '0 4px 20px rgba(11,61,145,0.3)',
              }}
            >
              Learn More About Us
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right — Founder Card + Image */}
          <div className="relative">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden h-96 lg:h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                alt="Office Dismantling Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />

              {/* Experience Badge */}
              <div className="absolute top-6 right-6">
                <div className="text-center px-4 py-3 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  <div className="text-3xl font-bold font-poppins text-white">18+</div>
                  <div className="text-xs text-gray-300 font-inter">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Founder Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 w-72 rounded-2xl p-5 shadow-2xl"
              style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(11,61,145,0.1)',
              }}
            >
              <div className="flex items-center gap-4">
                <img
                  src="/director.jpg"
                  alt="Sonu Kumar - Founder"
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-navy font-bold font-poppins text-base">Sonu Kumar</h4>
                  <p className="text-primary text-xs font-inter font-medium">Director</p>
                  <p className="text-gray-500 text-xs font-inter mt-0.5">18+ Years Experience</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-gray-600 text-xs font-inter italic">
                  "Our commitment to quality and safety has been our foundation since 2015."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
