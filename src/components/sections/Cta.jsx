import { Link } from 'react-router-dom'
import ctaShape from '../../assets/img/home-1/cta-shape.png'
import ctaShape2 from '../../assets/img/home-1/cta-shape-2.png'
import cta1 from '../../assets/img/home-1/cta-1.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Cta() {
  const imageRef = useRef(null)
  const isInView = useInView(imageRef, { once: true, amount: 0.3 })

  return (
    <section className="cta-section-1 fix">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-shape">
            <img src={ctaShape} alt="shape" />
          </div>
          <div className="cta-shape-2">
            <img src={ctaShape2} alt="shape" />
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="cta-content">
                <div className="gt-section-title mb-0">
                  <h6 className="text-white wow fadeInUp">START TODAY!</h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">JOIN US TODAY</h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  After more than twenty success in the wood products industry, the Bilder family founded.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="gt-theme-btn style-2 wow fadeInUp" data-wow-delay=".5s">
                    <span className="gt-text-btn">
                      <span className="gt-text-2">JOIN NOW <i className="fa-solid fa-arrow-right"></i></span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6">
              <motion.div
                ref={imageRef}
                className="cta-image"
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.3, ease: [0.645, 0.045, 0.355, 1] }}
              >
                <img src={cta1} alt="CTA" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
