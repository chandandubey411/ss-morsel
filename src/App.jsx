import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Loader from './components/common/Loader'
import AIChatbot from './components/common/AIChatbot'
import WhatsAppChat from './components/common/WhatsAppChat'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Clients from './pages/Clients'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Scroll to top helper on route change
const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeChat, setActiveChat] = useState(null) // 'ai', 'whatsapp', or null

  useEffect(() => {
    // Show premium loader for 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTopOnRouteChange />
        
        {/* Intro Loading Screen */}
        <Loader isLoading={isLoading} />

        <div className="flex flex-col min-h-screen bg-light text-navy antialiased">
          {/* Global Header */}
          <Navbar />

          {/* Main App Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              {/* ── Old URL redirects (mirrors .htaccess 301 rules) ── */}
              <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
              <Route path="/contact-us/" element={<Navigate to="/contact" replace />} />
              <Route path="/contact_us" element={<Navigate to="/contact" replace />} />
              <Route path="/about-us" element={<Navigate to="/about" replace />} />
              <Route path="/about_us" element={<Navigate to="/about" replace />} />
              <Route path="/who-we-are" element={<Navigate to="/about" replace />} />
              <Route path="/our-services" element={<Navigate to="/services" replace />} />
              <Route path="/our-projects" element={<Navigate to="/projects" replace />} />
              <Route path="/our-gallery" element={<Navigate to="/gallery" replace />} />
              <Route path="/our-clients" element={<Navigate to="/clients" replace />} />
              <Route path="/certifications" element={<Navigate to="/certificates" replace />} />
              <Route path="/our-certificates" element={<Navigate to="/certificates" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* AI Chatbot */}
          <AIChatbot activeChat={activeChat} setActiveChat={setActiveChat} />

          {/* WhatsApp Chat */}
          <WhatsAppChat activeChat={activeChat} setActiveChat={setActiveChat} />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
