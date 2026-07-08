import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiArrowRight } from 'react-icons/fi'
import { NAV_LINKS, BRAND } from '../../utils/constants'

const Footer = () => {
  const services = [
    'Office Furniture Dismantling',
    'Office Reinstatement',
    'Bare Shelling',
    'IT Asset Disposal',
    'Scrap Purchasing',
    'E-Waste Management',
  ]

  return (
    <footer className="bg-navy text-white">
      {/* Top Wave */}
      <div className="h-1 w-full" style={{ background: '#0B3D91' }} />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/logo.jpg"
                alt="SS Morsel India Logo"
                className="w-12 h-12 rounded-2xl object-cover flex-shrink-0 border border-white/10"
              />
              <div>
                <div className="text-white font-bold text-lg font-poppins leading-tight">SS Morsel India</div>
                <div className="text-gray-400 text-xs font-inter">Pvt. Ltd.</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm font-inter leading-relaxed mb-6">
              India's leading office dismantling and bare shelling experts. Trusted by 200+ multinational corporations for precision, compliance, and performance.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                style={{ background: '#0B3D91' }}>
                MCA Registered
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white border border-white/20">
                MSTC Licensed
              </span>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: FiLinkedin, href: '#' },
                { icon: FiFacebook, href: '#' },
                { icon: FiInstagram, href: '#' },
                { icon: FiTwitter, href: '#' },
                { icon: FiYoutube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base font-poppins mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-secondary text-sm font-inter flex items-center gap-2 group transition-colors duration-300"
                  >
                    <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base font-poppins mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-secondary text-sm font-inter flex items-center gap-2 group transition-colors duration-300"
                  >
                    <FiArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base font-poppins mb-6 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMapPin className="text-secondary text-sm" />
                </div>
                <p className="text-gray-400 text-sm font-inter leading-relaxed">{BRAND.address}</p>
              </div>
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-secondary text-sm" />
                </div>
                <span className="text-gray-400 group-hover:text-secondary text-sm font-inter transition-colors duration-300">{BRAND.phone}</span>
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-secondary text-sm" />
                </div>
                <span className="text-gray-400 group-hover:text-secondary text-sm font-inter transition-colors duration-300">{BRAND.email}</span>
              </a>
              <a href={`mailto:${BRAND.email2}`} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-secondary text-sm" />
                </div>
                <span className="text-gray-400 group-hover:text-secondary text-sm font-inter transition-colors duration-300">{BRAND.email2}</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-gray-400 text-xs font-inter mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-inter placeholder-gray-500 outline-none focus:border-secondary transition-colors duration-300"
                />
                <button
                  className="px-4 py-2.5 rounded-lg text-white text-xs font-semibold transition-all duration-300 hover:opacity-90"
                  style={{ background: '#0B3D91' }}
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center gap-4">
          <p className="text-gray-500 text-[10px] md:text-[11px] font-inter text-center leading-relaxed max-w-5xl opacity-70 italic">
            Note: All client logos, trademarks, and brand names displayed on this website/document are the property of their respective owners. These logos are shown solely for the purpose of showcasing our previous work and professional associations. We have provided services to the respective clients where mentioned. The use of these logos does not imply any endorsement, partnership, or ownership unless explicitly stated.
          </p>
          <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-4 gap-4">
            <p className="text-gray-500 text-xs font-inter text-center">
              © {new Date().getFullYear()} SS Morsel India Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-xs font-inter hover:text-secondary cursor-pointer transition-colors duration-300">Privacy Policy</span>
              <span className="text-gray-500 text-xs font-inter hover:text-secondary cursor-pointer transition-colors duration-300">Terms of Service</span>
              <span className="text-gray-500 text-xs font-inter hover:text-secondary cursor-pointer transition-colors duration-300">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
