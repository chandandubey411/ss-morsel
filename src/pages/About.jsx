import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiAward, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi'
import PageTransition from '../components/layout/PageTransition'
import SectionHeading from '../components/common/SectionHeading'
import CTA from '../components/home/CTA'

const milestones = [
  { year: '2015', title: 'Company Founded', desc: 'SS Morsel India Pvt. Ltd. established in Gurugram by Director Sonu Kumar, specializing in office furniture dismantling.' },
  { year: '2018', title: 'MSTC License & Expansion', desc: 'Obtained MSTC government license for authorized e-waste and scrap management operations.' },
  { year: '2020', title: 'DLF Workspace Focus', desc: 'Successfully executed major projects in Gurgaon’s DLF infrastructure including DLF Cyber City, Cyber Hub, and DLF SEZ.' },
  { year: '2022', title: 'Pan-India Operations', desc: 'Expanded our operations beyond NCR, delivering corporate dismantling projects in major cities nationwide.' },
  { year: '2024', title: '500+ Projects Completed', desc: 'Successfully completed over 500 office dismantling, bare shelling, and scrap purchasing projects across India.' },
]

const values = [
  { icon: FiAward, title: 'Excellence', desc: 'We pursue the highest standards in every project, every time.' },
  { icon: FiUsers, title: 'Client First', desc: 'Our clients\' success is our success. We go above and beyond.' },
  { icon: FiTarget, title: 'Precision', desc: 'Every project executed with meticulous planning and attention to detail.' },
  { icon: FiTrendingUp, title: 'Innovation', desc: 'Continuously improving our processes with modern methodologies.' },
]

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Us | SS Morsel India Pvt Ltd</title>
        <meta name="description" content="Learn about SS Morsel India Pvt Ltd - India's leading office dismantling and bare shelling company established in 2015." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #081C3A, #0B3D91)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/40 bg-secondary/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-secondary text-xs font-semibold tracking-wider uppercase">About Us</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-poppins leading-tight mb-6">
              India's Most Trusted<br />
              <span className="text-[#1E824C]">
                Dismantling Partner
              </span>
            </h1>
            <p className="text-gray-300 text-lg font-inter leading-relaxed">
              Established in 2015, SS Morsel India Pvt. Ltd. has grown from a specialized startup into India's leading office dismantling, bare-shelling, and scrap purchasing company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="18+ Years of"
                highlight="Building Trust"
                subtitle="What started as a small operation in Gurugram has grown into a pan-India enterprise trusted by 200+ multinational corporations."
              />
              <div className="mt-8 space-y-4">
                {[
                  'SS Morsel India Pvt. Ltd. is one of the leading dismantling and bare-shelling entities, established in 2015.',
                  'We specialize in office furniture dismantling, bare shelling, reinstatement, IT assets buying, scraps purchasing, facilities equipment purchasing, and waste management services.',
                  'We are experts in complete office set-up removal and ensure smooth handing over of premises strictly as per the instructions given by clients.',
                  'A majority of our business comes through client references, reflecting our commitment to timely execution, high-quality standards, and safety.',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheckCircle className="text-secondary flex-shrink-0 mt-1" size={18} />
                    <p className="text-gray-600 font-inter text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-[500px]">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Our Team" className="w-full h-full object-cover" />
              </div>
              {/* Founder Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hidden md:block absolute -bottom-8 -left-8 w-72 rounded-2xl p-5 shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid rgba(11,61,145,0.1)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src="/director.jpg" alt="Sonu Kumar" className="w-14 h-14 rounded-xl object-cover" />
                  <div>
                    <h4 className="text-navy font-bold font-poppins">Sonu Kumar</h4>
                    <p className="text-primary text-xs font-inter">Director</p>
                    <p className="text-gray-400 text-xs font-inter">18+ Years Experience</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs font-inter italic">"Our commitment to safety, quality, and client satisfaction is what drives us forward every single day."</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #081C3A 0%, #0B3D91 50%, #081C3A 100%)' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1E824C 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #0B3D91 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-5"
              style={{
                background: 'rgba(30, 130, 76, 0.15)',
                color: '#1E824C',
                border: '1px solid rgba(30, 130, 76, 0.3)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Leadership
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-white leading-tight"
            >
              Meet Our <span className="text-[#1E824C]">Director</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Director Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              {/* Gradient border frame */}
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-3xl opacity-60"
                  style={{ background: 'linear-gradient(135deg, #1E824C, #0B3D91, #1E824C)' }}
                />
                <div className="relative rounded-3xl overflow-hidden w-full max-w-[320px] h-[420px] md:max-w-[380px] md:h-[480px]">
                  <img
                    src="/director.jpg"
                    alt="Sonu Kumar - Director, SS Morsel India"
                    className="w-full h-full object-cover"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-32"
                    style={{ background: 'linear-gradient(to top, rgba(8,28,58,0.8), transparent)' }}
                  />
                </div>

                {/* Experience badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-5 right-0 md:-right-5 w-24 h-24 md:w-28 md:h-28 rounded-2xl flex flex-col items-center justify-center text-center"
                  style={{
                    background: 'linear-gradient(135deg, #1E824C, #15633a)',
                    boxShadow: '0 8px 30px rgba(30,130,76,0.4)',
                  }}
                >
                  <span className="text-white font-bold text-2xl md:text-3xl font-poppins leading-none">18+</span>
                  <span className="text-white/80 text-[9px] md:text-[10px] font-inter mt-1 leading-tight">Years of<br />Experience</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Director Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-white mb-1">Sonu Kumar</h3>
                <p className="text-[#1E824C] font-semibold font-inter text-lg">Director & Founder</p>
              </div>

              <p className="text-gray-300 font-inter leading-relaxed text-[15px]">
                Mr. Sonu Kumar is the visionary founder and director of SS Morsel India Pvt. Ltd. With over 18 years of hands-on experience in the office dismantling and bare-shelling industry, he has established the company as one of India's most trusted names in commercial space transformation.
              </p>

              <p className="text-gray-400 font-inter leading-relaxed text-sm">
                Under his leadership, SS Morsel India has successfully completed 500+ projects for Fortune 500 companies, multinational corporations, and leading Indian enterprises. His commitment to safety, quality, and environmental responsibility has earned the company trusted government licenses including MSTC and MSME credentials.
              </p>

              {/* Key highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { icon: FiAward, text: 'MCA Registered Company' },
                  { icon: FiUsers, text: '200+ Corporate Clients' },
                  { icon: FiTarget, text: 'MSTC Licensed Operations' },
                  { icon: FiTrendingUp, text: '500+ Projects Delivered' },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(30,130,76,0.15)' }}
                    >
                      <Icon className="text-[#1E824C]" size={15} />
                    </div>
                    <span className="text-gray-300 text-sm font-inter font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative mt-6 p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="absolute -top-3 left-6 text-5xl text-[#1E824C] font-serif leading-none">"</div>
                <p className="text-gray-300 font-inter italic text-sm leading-relaxed pt-3">
                  Our vision is simple — deliver exceptional value to our clients while maintaining the highest standards of safety and environmental responsibility. Every project we take on is a promise of quality, professionalism, and timely execution.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-0.5 rounded-full bg-[#1E824C]" />
                  <span className="text-white text-xs font-poppins font-semibold">Sonu Kumar, Director</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Vision & Mission */}
      <section className="section-padding bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl relative overflow-hidden shadow-card border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <FiTarget className="text-secondary" size={24} />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-navy mb-4">Our Mission</h3>
                <p className="text-gray-600 font-inter leading-relaxed text-sm">
                  To deliver exceptional office furniture dismantling, bare shelling, reinstatement, IT assets buying, scraps purchasing, facilities equipment purchasing and Wastes Mgmt. services with precision and professionalism. We are committed to sustainable practices, ensuring responsible disposal and recycling of materials while minimizing environmental impact. Through skilled workmanship and customer-focused solutions, we aim to ensure efficiency, sustainability, and maximum client benefit.
                </p>
              </div>
              <div className="mt-6 text-[#1E824C] font-bold text-xs font-poppins uppercase tracking-wider">
                Meeting Commitment With High Performance
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl relative overflow-hidden shadow-card border border-gray-100 flex flex-col justify-between"
              style={{ background: 'linear-gradient(135deg, #081C3A, #0B3D91)' }}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <FiTrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 font-inter leading-relaxed text-sm">
                  To become a globally recognized leader in Office Dismantling, Reinstatement, Civil Works, and Scrap Purchasing, delivering value-driven returns and excellence to our clients. We envision setting industry benchmarks in furniture dismantling and reinstatement through innovation, integrity, and excellence. Our goal is to lead the market by delivering seamless transitions for businesses while promoting sustainable practices and building lasting client relationships.
                </p>
              </div>
              <div className="mt-6 text-[#00C389] font-bold text-xs font-poppins uppercase tracking-wider">
                Est. 2015 | Professionalism & Excellence
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading badge="Our Values" title="What We" highlight="Stand For" align="center" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-navy font-bold font-poppins mb-3">{title}</h3>
                <p className="text-gray-500 text-sm font-inter">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeading badge="Our Journey" title="Key" highlight="Milestones" align="center" />
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5"
              style={{ background: 'linear-gradient(180deg, #0B3D91, #00C389)' }} />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                      <span className="text-accent font-bold font-poppins text-xl">{m.year}</span>
                      <h3 className="text-navy font-bold font-poppins mt-1 mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm font-inter leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex-shrink-0 w-4 h-4 rounded-full border-4 border-white z-10"
                    style={{ background: 'linear-gradient(135deg, #0B3D91, #00C389)', boxShadow: '0 0 12px rgba(0,195,137,0.4)' }} />
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  )
}

export default About
