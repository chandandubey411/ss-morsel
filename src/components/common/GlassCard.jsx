import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', dark = false, ...props }) => {
  return (
    <motion.div
      className={`
        rounded-2xl p-6
        ${dark
          ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          : 'bg-white/90 backdrop-blur-xl border border-primary/10 shadow-[0_8px_32px_rgba(11,61,145,0.12)]'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
