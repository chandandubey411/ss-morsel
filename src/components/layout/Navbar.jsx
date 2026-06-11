import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { NAV_LINKS, BRAND } from '../../utils/constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-[0_2px_20px_rgba(11,61,145,0.12)]'
            : 'bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <motion.img
                whileHover={{ rotate: 5, scale: 1.05 }}
                src="/logo.jpg"
                alt="SS Morsel India Logo"
                className="w-10 h-10 rounded-2xl object-cover flex-shrink-0 border border-gray-200"
              />
              <div className="hidden sm:block">
                <div className="text-navy font-bold text-[15px] font-poppins leading-tight group-hover:text-primary transition-colors duration-300">
                  SS Morsel India
                </div>
                <div className="text-gray-400 text-[11px] font-inter">Pvt. Ltd. | Est. {BRAND.founded}</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 xl:px-3.5 py-2 text-[13px] font-medium font-inter rounded-lg transition-all duration-300 whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-[13px] font-medium text-gray-600 hover:text-primary transition-colors duration-300"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-primary" size={13} />
                </div>
                <span className="font-inter whitespace-nowrap">{BRAND.phone}</span>
              </a>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-lg text-[13px] font-semibold text-white font-poppins transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #0B3D91, #0a357d)',
                  boxShadow: '0 4px 16px rgba(11,61,145,0.3)',
                }}
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[998] bg-navy/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-[999] w-80 bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Link to="/" className="flex items-center gap-3">
                  <img
                    src="/logo.jpg"
                    alt="SS Morsel India Logo"
                    className="w-10 h-10 rounded-2xl object-cover flex-shrink-0 border border-gray-200"
                  />
                  <div>
                    <div className="text-navy font-bold text-sm font-poppins">SS Morsel India</div>
                    <div className="text-gray-400 text-xs font-inter">Pvt. Ltd.</div>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <FiX size={16} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <div className="space-y-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium font-inter text-sm transition-all duration-300 ${
                          location.pathname === link.path
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-primary/5 hover:text-primary'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-300"
                >
                  <FiPhone className="text-primary" />
                  <span className="font-inter text-sm font-medium">{BRAND.phone}</span>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-white font-semibold font-poppins text-sm"
                  style={{ background: '#0B3D91' }}
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress((scrollTop / docHeight) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] h-[3px] bg-transparent">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: progress / 100,
          background: 'linear-gradient(90deg, #0B3D91, #1E824C)',
        }}
      />
    </div>
  )
}

export default Navbar

