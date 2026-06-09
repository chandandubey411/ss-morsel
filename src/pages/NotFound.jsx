import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import PageTransition from '../components/layout/PageTransition'

const NotFound = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Page Not Found | SS Morsel India Pvt Ltd</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy py-20">
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />

        <div className="max-w-md w-full px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold font-poppins text-white tracking-wider mb-2">404</h1>
            <div className="h-1.5 w-24 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #00C389, #FF8A00)' }} />
            <h2 className="text-2xl font-bold text-white font-poppins mb-3">Page Not Found</h2>
            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold font-poppins text-sm hover:shadow-[0_8px_30px_rgba(11,61,145,0.4)] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #0B3D91, #00C389)' }}
            >
              <FiHome />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-semibold font-poppins text-sm hover:bg-white/5 transition-all duration-300"
            >
              <FiArrowLeft />
              Go Back
            </button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFound
