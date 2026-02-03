import Preloader from '../components/layout/Preloader'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Projects from '../components/sections/Projects'
import Counter from '../components/sections/Counter'
import Purposes from '../components/sections/Purposes'
import Brand from '../components/sections/Brand'
import Testimonials from '../components/sections/Testimonials'
import Faq from '../components/sections/Faq'
import Cta from '../components/sections/Cta'
import { useEffect } from 'react'
import { useMainScripts } from '../hooks/useMainScripts'
import { useLocation } from 'react-router-dom'

export default function Home() {
  useMainScripts()
  const location = useLocation()

  useEffect(() => {
    // Initialize WOW animations - must happen after DOM is rendered
    if (window.WOW) {
      window.wow = new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      })
      window.wow.init()
    }

    // Initialize Splitting
    if (window.Splitting) {
      window.Splitting()
    }
  }, [])

  // Handle hash scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Counter />
        <Purposes />
        {/* <Brand /> */}
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
