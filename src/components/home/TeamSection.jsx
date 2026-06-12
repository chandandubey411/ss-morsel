import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'

const team = [
  {
    name: 'Sonu Kumar',
    role: 'Director & Founder',
    exp: '18+ Years',
    image: '/director.jpg',
    quote: 'Committed to safety, quality, and excellence since 2015.',
  },
]

const TeamSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            badge="Leadership"
            title="The Visionary Behind"
            highlight="Our Success"
            subtitle="Led by an industry expert with 18+ years of hands-on experience in commercial space transitions."
            align="center"
          />
        </div>

        <div className="flex justify-center">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center max-w-sm"
            >
              {/* Photo */}
              <div className="relative mx-auto w-44 h-44 rounded-3xl overflow-hidden mb-5 shadow-card group-hover:shadow-card-hover transition-shadow duration-500">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Exp Badge */}
                <div
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-white text-xs font-bold font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  style={{ background: '#0B3D91' }}
                >
                  {member.exp}
                </div>
              </div>

              {/* Info */}
              <h3 className="text-navy font-bold text-lg font-poppins mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
              <p className="text-secondary font-semibold text-sm font-inter mb-2">{member.role}</p>
              <p className="text-gray-500 text-xs font-inter italic">"{member.quote}"</p>

              {/* Divider */}
              <div className="w-10 h-0.5 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: '#1E824C' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
