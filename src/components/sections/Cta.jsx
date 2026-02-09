import { Link } from 'react-router-dom'
import ctaBg from '../../assets/img/main_asset/zar/cta.jpg'
import { motion } from 'framer-motion'

export default function Cta() {
  return (
    <section className="cta-hero-section fix">
      <div 
        className="cta-hero-background"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '120px 0',
          minHeight: '500px'
        }}
      >
        {/* Dark Overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(1, 170, 165, 0.3) 100%)',
            zIndex: 1
          }}
        />
        
        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <motion.div 
                className="cta-hero-content text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Small Label */}
                <motion.h6 
                  className="text-white mb-3 wow fadeInUp"
                  style={{ 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px',
                    fontWeight: '600',
                    fontSize: '14px',
                    color: 'white'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  START TODAY!
                </motion.h6>

                {/* Main Headline */}
                <motion.h1 
                  className="text-white mb-4 wow fadeInUp"
                  style={{ 
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    textTransform: 'uppercase',
                    marginBottom: '24px'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  READY TO START YOUR PROJECT?
                </motion.h1>

                {/* Description */}
                <motion.p 
                  className="text-white mb-5 wow fadeInUp"
                  style={{ 
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    lineHeight: '1.8',
                    maxWidth: '700px',
                    margin: '0 auto 40px',
                    opacity: '0.95'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Let's bring your vision to life with expert craftsmanship and reliable service.
                </motion.p>

                {/* Buttons */}
                <motion.div 
                  className="cta-buttons d-flex flex-wrap gap-3 justify-content-center mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/contact" 
                      className="gt-theme-btn"
                      style={{
                        padding: '16px 40px',
                        fontSize: '16px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        backgroundColor: '#01AAA5',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        textDecoration: 'none'
                      }}
                    >
                      GET FREE CONSULTATION <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                  className="cta-contact-info text-white"
                  style={{ fontSize: '1rem', opacity: '0.9' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <i className="fa-solid fa-phone" style={{ marginRight: '8px', fontSize: '14px' }}></i>
                  Or call us: <a href="tel:+233246682191" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>+233246682191</a> / <a href="tel:+233501720506" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>+233501720506</a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
