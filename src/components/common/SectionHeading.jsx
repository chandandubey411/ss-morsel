import { motion } from 'framer-motion'

const SectionHeading = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase"
          style={{
            background: 'rgba(11, 61, 145, 0.08)',
            color: '#0B3D91',
            border: '1px solid rgba(11, 61, 145, 0.2)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight ${light ? 'text-white' : 'text-navy'}`}
      >
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-1 w-16 rounded-full origin-left`}
        style={{ background: '#1E824C' }}
      />
    </div>
  )
}

export default SectionHeading
