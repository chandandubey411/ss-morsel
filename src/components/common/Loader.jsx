import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('Initializing...')

  useEffect(() => {
    if (!isLoading) return

    // Smooth count up to 100 over 1.3 seconds
    const duration = 1300
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100))
      setProgress(currentProgress)

      // Dynamic status updates based on progress
      if (currentProgress < 20) {
        setStatusText('Initializing modules...')
      } else if (currentProgress < 45) {
        setStatusText('Connecting securely...')
      } else if (currentProgress < 70) {
        setStatusText('Loading high-performance assets...')
      } else if (currentProgress < 90) {
        setStatusText('Optimizing interface...')
      } else {
        setStatusText('Ready')
      }

      if (currentProgress >= 100) {
        clearInterval(interval)
      }
    }, 16)

    return () => clearInterval(interval)
  }, [isLoading])

  // Background particles for subtle ambient motion
  const particles = [
    { id: 1, size: 4, x: '15%', y: '75%', duration: 7, delay: 0 },
    { id: 2, size: 6, x: '85%', y: '25%', duration: 9, delay: 0.5 },
    { id: 3, size: 3, x: '8%', y: '35%', duration: 6, delay: 1 },
    { id: 4, size: 5, x: '90%', y: '65%', duration: 8, delay: 1.5 },
    { id: 5, size: 4, x: '50%', y: '12%', duration: 10, delay: 2 },
    { id: 6, size: 5, x: '35%', y: '80%', duration: 7.5, delay: 0.8 },
    { id: 7, size: 3, x: '75%', y: '55%', duration: 8.5, delay: 1.2 },
    { id: 8, size: 7, x: '25%', y: '40%', duration: 11, delay: 2.2 },
  ]

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(circle at center, #0B224E 0%, #061126 100%)'
          }}
        >
          {/* Ambient Background Glows */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
            style={{ top: '15%', left: '10%' }}
          />
          <motion.div
            animate={{
              scale: [1.15, 1, 1.15],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[140px] pointer-events-none"
            style={{ bottom: '5%', right: '5%' }}
          />

          {/* Ambient Floating Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white/20 pointer-events-none"
              style={{
                width: p.size,
                height: p.size,
                left: p.x,
                top: p.y,
              }}
              animate={{
                y: [0, -80, 0],
                x: [0, 10, -10, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Glassmorphic Brand Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="z-10 text-center mb-8 px-8 py-7 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl max-w-sm w-[90%]"
          >
            {/* Logo area with rotating glow ring */}
            <div className="relative flex justify-center mb-5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-md"
              />
              <motion.div
                className="relative bg-[#061126] p-1.5 rounded-2xl border border-white/10 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/logo.jpg"
                  alt="SS Morsel India Logo"
                  className="w-16 h-16 rounded-2xl object-cover"
                />
              </motion.div>
            </div>

            {/* Title */}
            <h1 className="text-white font-bold text-2xl font-poppins tracking-wide mb-1 leading-tight">
              SS Morsel <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-teal-300">India</span>
            </h1>
            <p className="text-white/40 text-xs font-inter font-semibold tracking-widest uppercase mb-4">
              Pvt. Ltd.
            </p>
            
            {/* Divider Line */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent mx-auto mb-4" />

            {/* Tagline */}
            <p className="text-white/80 text-xs font-inter tracking-widest uppercase leading-relaxed font-semibold max-w-xs mx-auto">
              Meeting Commitment With High Performance
            </p>
          </motion.div>

          {/* Loading Progress Section */}
          <div className="z-10 flex flex-col items-center w-[280px]">
            {/* Status Text & Percentage */}
            <div className="flex justify-between w-full mb-2.5 px-1 text-[11px] font-semibold font-inter">
              <span className="text-white/60 tracking-wider transition-all duration-300">
                {statusText}
              </span>
              <span className="text-secondary font-bold tabular-nums">
                {progress}%
              </span>
            </div>

            {/* Premium Progress Bar */}
            <div className="relative w-full h-[6px] bg-white/5 rounded-full border border-white/5 overflow-hidden backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">
              {/* Progress Fill */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-secondary"
                style={{ width: `${progress}%` }}
                transition={{ type: 'tween', ease: 'easeOut' }}
              />
              {/* Shimmer Reflex Effect */}
              <motion.div
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                animate={{
                  left: ['-50%', '150%'],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            {/* Ambient Progress Glow */}
            <div 
              className="w-full h-[1px] bg-secondary/35 blur-[4px] mt-[1px] rounded-full transition-all duration-300"
              style={{ opacity: progress / 100 }}
            />

            {/* Redesigned Bouncing/Pulsing Micro-dots */}
            <div className="flex gap-2 mt-6 justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: i === 0 ? '#0B3D91' : i === 1 ? '#00C389' : '#FF8A00'
                  }}
                  animate={{ 
                    scale: [0.8, 1.4, 0.8],
                    opacity: [0.35, 1, 0.35] 
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: i * 0.2, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
