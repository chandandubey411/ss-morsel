import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight, FiPlay, FiMaximize2 } from 'react-icons/fi'
import PageTransition from '../components/layout/PageTransition'
import CTA from '../components/home/CTA'
import SectionHeading from '../components/common/SectionHeading'
import commercialOfficesSlideImg from '../assets/images/commercial_offices_slide.png'
import insideOfficeSlideImg from '../assets/images/inside_office_slide.jpg'

// Vite dynamic imports to automatically import all images and videos from assets/images
const imageModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg,webp,WEBP,PNG,JPG,JPEG}', { eager: true });
const videoModules = import.meta.glob('../assets/images/*.mp4', { eager: true });

const slideFilenames = [
  'business_license_slide.png',
  'testimonials_slide.png',
  'clients_offices_slide.png',
  'commercial_offices_slide.png',
  'inside_office_slide.jpg'
];

const categories = [
  'Before Dismantling',
  'During Dismantling',
  'After Bare Shelling',
  'IT Asset & Waste Recovery',
  'Safety & Operations'
];

const sortedImageKeys = Object.keys(imageModules)
  .filter(path => !slideFilenames.some(filename => path.endsWith(filename)))
  .sort();
const sortedVideoKeys = Object.keys(videoModules).sort();

const galleryImages = [
  ...sortedImageKeys.map((path, idx) => {
    const src = imageModules[path].default || imageModules[path];
    
    // Distribute images across 5 main categories
    const category = categories[idx % categories.length];
    
    let title = '';
    const num = Math.floor(idx / categories.length) + 1;
    switch (category) {
      case 'Before Dismantling':
        const beforeTitles = [
          'Pre-demolition Workstations Layout',
          'Executive Conference Room Inspection',
          'Server Room Cable Configuration',
          'Initial Site Layout Assessment',
          'Executive Cabins Pre-dismantling',
          'Commercial Office Partition Assessment',
          'Office Cafeteria Pre-dismantling Layout'
        ];
        title = beforeTitles[num % beforeTitles.length] + ` (Site Area #${num})`;
        break;
      case 'During Dismantling':
        const duringTitles = [
          'Active Partition Wall Demolition',
          'Workstation Desks Stripping',
          'Acoustic Ceiling Tile Disassembly',
          'IT Cabling Extraction & Bundling',
          'HVAC Ducting & Electrical Stripping',
          'Debris Management & Floor Clearing'
        ];
        title = duringTitles[num % duringTitles.length] + ` (Phase #${num})`;
        break;
      case 'After Bare Shelling':
        const afterTitles = [
          'Completed Bare Shell Office Handover',
          'Floor Concrete Substrate Reinstated',
          'Reinstated Column & Perimeter Walls',
          'Final Post-dismantling Site Cleanup',
          'Landlord Handover Ready Bare Shell'
        ];
        title = afterTitles[num % afterTitles.length] + ` (Zone #${num})`;
        break;
      case 'IT Asset & Waste Recovery':
        const recoveryTitles = [
          'IT Monitors & System Segregation',
          'Authorized E-Waste Storage Area',
          'Recyclable Copper Cabling Recovery',
          'Office Scrap & Metal Sorting'
        ];
        title = recoveryTitles[num % recoveryTitles.length] + ` (Batch #${num})`;
        break;
      case 'Safety & Operations':
        const safetyTitles = [
          'Daily On-Site HSE Toolbox Briefing',
          'Operations Team Site Alignment',
          'PPE Compliance & Site Audit Check',
          'Supervisor Quality Execution Briefing'
        ];
        title = safetyTitles[num % safetyTitles.length] + ` (Crew #${num})`;
        break;
      default:
        title = `Project Site Highlight #${idx + 1}`;
    }

    return {
      id: `img-${idx}`,
      src,
      category,
      title,
      type: 'image'
    };
  }),
  ...sortedVideoKeys.map((path, idx) => {
    const src = videoModules[path].default || videoModules[path];
    
    return {
      id: `vid-${idx}`,
      src,
      category: 'Project Videos',
      title: `On-Site Demolition & Bare Shelling Process Video #${idx + 1}`,
      type: 'video'
    };
  })
];

const filters = ['All', 'Before Dismantling', 'During Dismantling', 'After Bare Shelling', 'IT Asset & Waste Recovery', 'Safety & Operations', 'Project Videos']

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'All' ? galleryImages : galleryImages.filter(i => i.category === activeFilter)

  const prevImg = () => {
    const idx = filtered.findIndex(i => i.id === lightbox.id)
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length])
  }
  const nextImg = () => {
    const idx = filtered.findIndex(i => i.id === lightbox.id)
    setLightbox(filtered[(idx + 1) % filtered.length])
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Gallery | SS Morsel India Pvt Ltd</title>
        <meta name="description" content="View our gallery of office dismantling, bare shelling, and IT asset disposal projects." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: 'linear-gradient(135deg, #081C3A, #0B3D91)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white font-poppins leading-tight mb-4"
          >
            Project{' '}
            <span className="text-[#1E824C]">
              Gallery
            </span>
          </motion.h1>
          <p className="text-gray-300 text-lg font-inter">Visual showcase of our work across India</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-poppins transition-all duration-300 ${
                  activeFilter === f
                    ? 'text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                }`}
                style={activeFilter === f ? { background: '#0B3D91' } : {}}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="masonry-item group relative rounded-2xl overflow-hidden cursor-pointer shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                onClick={() => setLightbox(img)}
              >
                {img.type === 'video' ? (
                  <div className="relative w-full h-64 bg-slate-900 flex items-center justify-center overflow-hidden">
                    <video
                      src={img.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <FiPlay size={24} className="ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <FiZoomIn className="text-white mx-auto mb-2" size={28} />
                    <p className="text-white text-sm font-inter font-semibold mb-1 line-clamp-2">{img.title}</p>
                    <span className="inline-block px-2 py-0.5 text-white text-xs rounded-full font-medium" style={{ background: 'rgba(0,195,137,0.85)' }}>{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(8,28,58,0.97)', backdropFilter: 'blur(8px)' }}
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/40 transition-colors">
              <FiX size={18} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImg() }} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/40 transition-colors">
              <FiChevronLeft size={22} />
            </button>
            <motion.div
              key={lightbox.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              {lightbox.type === 'video' ? (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-2xl shadow-2xl max-h-[75vh] object-contain bg-black mx-auto"
                />
              ) : (
                <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto rounded-2xl shadow-2xl max-h-[75vh] object-contain mx-auto" />
              )}
              <div className="text-center mt-4">
                <h3 className="text-white text-lg font-bold font-poppins">{lightbox.title}</h3>
                <p className="text-[#00C389] text-sm font-semibold font-inter mt-1">{lightbox.category}</p>
              </div>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); nextImg() }} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/40 transition-colors">
              <FiChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </PageTransition>
  )
}

export default Gallery
