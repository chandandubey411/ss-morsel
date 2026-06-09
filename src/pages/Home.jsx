import { HelmetProvider, Helmet } from 'react-helmet-async'
import PageTransition from '../components/layout/PageTransition'
import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import AboutPreview from '../components/home/AboutPreview'
import ServicesPreview from '../components/home/ServicesPreview'
import ProcessFlow from '../components/home/ProcessFlow'
import Industries from '../components/home/Industries'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ProjectsShowcase from '../components/home/ProjectsShowcase'
import ClientLogos from '../components/home/ClientLogos'
import Certificates from '../components/home/Certificates'
import Testimonials from '../components/home/Testimonials'
import TeamSection from '../components/home/TeamSection'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>SS Morsel India Pvt Ltd | Office Dismantling & Bare Shelling Experts</title>
        <meta name="description" content="Leading office dismantling, office reinstatement, bare shelling, IT asset disposal, scrap purchasing and waste management company serving clients across India." />
      </Helmet>
      <Hero />
      <Stats />
      <ClientLogos />
      <AboutPreview />
      <ServicesPreview />
      <ProcessFlow />
      <WhyChooseUs />
      <ProjectsShowcase />
      <Industries />
      <Certificates />
      <Testimonials />
      <TeamSection />
      <CTA />
    </PageTransition>
  )
}

export default Home
