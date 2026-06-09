import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon,
  ...props
}) => {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
  }

  const variants = {
    primary: 'bg-primary text-white hover:bg-navy shadow-[0_4px_20px_rgba(11,61,145,0.3)] hover:shadow-[0_8px_30px_rgba(11,61,145,0.4)]',
    secondary: 'bg-secondary text-white hover:opacity-90 shadow-[0_4px_20px_rgba(0,195,137,0.3)]',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-primary',
    ghost: 'text-primary hover:bg-primary/10',
    accent: 'bg-accent text-white hover:opacity-90 shadow-[0_4px_20px_rgba(255,138,0,0.3)]',
  }

  const baseClasses = `
    inline-flex items-center gap-2 font-semibold rounded-xl 
    transition-all duration-300 cursor-pointer font-poppins
    ${sizes[size]} ${variants[variant]} ${className}
  `

  const content = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ translateY: -2 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{ translateY: -2 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button
