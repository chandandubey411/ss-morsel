import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'
import PageTransition from '../components/layout/PageTransition'
import SectionHeading from '../components/common/SectionHeading'
import { BRAND } from '../utils/constants'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Office Dismantling',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Office Dismantling',
        message: '',
      })
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | SS Morsel India Pvt Ltd</title>
        <meta name="description" content="Get a quote for office dismantling, bare shelling, e-waste, and asset disposal. Contact Sonu Kumar at SS Morsel India. Gurugram, India." />
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
            <span className="text-secondary text-xs font-semibold tracking-wider uppercase font-inter">Connect</span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white font-poppins leading-tight mb-6"
          >
            Get In{' '}
            <span className="text-[#1E824C]">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg font-inter max-w-2xl mx-auto"
          >
            Let's discuss your project requirements. Request a free quote or site inspection today.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Info Panel */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeading
                  badge="Contact Information"
                  title="Talk to Our"
                  highlight="Project Experts"
                />
              </div>

              <div className="space-y-6">
                {[
                  { icon: FiPhone, title: 'Call/WhatsApp', content: BRAND.phone, sub: 'Direct line to CEO & Sales' },
                  { icon: FiMail, title: 'Email Address', content: BRAND.email, sub: 'For proposals and RFPs' },
                  { icon: FiMapPin, title: 'Head Office Address', content: BRAND.address, sub: 'Visit our operations center' },
                  { icon: FiClock, title: 'Working Hours', content: BRAND.workingHours, sub: 'Sunday: Closed' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="text-gray-400 font-inter text-xs font-medium uppercase tracking-wider">{item.title}</h4>
                      <p className="text-navy font-bold font-poppins text-sm mt-1">{item.content}</p>
                      <p className="text-gray-400 font-inter text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder/Stylized Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-64 shadow-inner relative bg-gray-100">
                <iframe
                  title="SS Morsel Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112185.09709669527!2d77.01429819662369!3d28.455963242095304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c6ad083!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-card">
                <h3 className="text-navy font-bold font-poppins text-2xl mb-2">Send Message</h3>
                <p className="text-gray-500 font-inter text-sm mb-6">Fill out the form below and our team will get back to you within 2 hours.</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-10"
                    >
                      <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiCheckCircle size={32} />
                      </div>
                      <h4 className="text-navy font-bold font-poppins text-xl mb-2">Message Sent!</h4>
                      <p className="text-gray-500 font-inter text-sm max-w-sm mx-auto mb-6">
                        Thank you for contacting SS Morsel India. Our project manager will reach out to you shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl border border-primary text-primary hover:bg-primary/5 transition-all text-xs font-semibold font-poppins"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-navy font-semibold font-poppins text-xs uppercase tracking-wider mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-inter"
                          />
                        </div>
                        <div>
                          <label className="block text-navy font-semibold font-poppins text-xs uppercase tracking-wider mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. rahul@company.com"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-inter"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-navy font-semibold font-poppins text-xs uppercase tracking-wider mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={`e.g. ${BRAND.phone}`}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-inter"
                          />
                        </div>
                        <div>
                          <label className="block text-navy font-semibold font-poppins text-xs uppercase tracking-wider mb-2">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Tech Solutions Pvt Ltd"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-inter"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-navy font-semibold font-poppins text-xs uppercase tracking-wider mb-2">Service Required *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-inter bg-white"
                        >
                          <option>Office Dismantling</option>
                          <option>Office Reinstatement</option>
                          <option>Bare Shelling</option>
                          <option>IT Asset Disposal</option>
                          <option>Scrap Purchasing</option>
                          <option>E-Waste Management</option>
                          <option>Workspace Reinstatement</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-navy font-semibold font-poppins text-xs uppercase tracking-wider mb-2">Project Brief / Message *</label>
                        <textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Please describe your requirements, approximate area size (in sq ft), and location..."
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-inter resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl text-white font-semibold font-poppins text-sm flex items-center justify-center gap-2 hover:shadow-[0_8px_30px_rgba(11,61,145,0.3)] transition-all duration-300 disabled:opacity-50"
                        style={{ background: '#0B3D91' }}
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Submit Quote Request
                            <FiSend />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
