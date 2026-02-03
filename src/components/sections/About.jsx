import { Link } from 'react-router-dom'
import aboutImg1 from '../../assets/img/home-1/about/about-01.jpg'
import aboutImg2 from '../../assets/img/home-1/about/about-02.jpg'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const imageRef1 = useRef(null)
  const imageRef2 = useRef(null)
  const isInView1 = useInView(imageRef1, { once: true, amount: 0.3 })
  const isInView2 = useInView(imageRef2, { once: true, amount: 0.3 })

  return (
    <section id="about" className="gt-about-section fix section-padding">
      <div className="container">
        <div className="gt-about-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="gt-about-content">
                <div className="gt-section-title mb-0">
                  <h6 className="wow fadeInUp">About Us</h6>
                  <h2 className="wow splt-txt" data-splitting>
                    MASTERS OF MODERN BUILDING & FABRICATION
                  </h2>
                </div>
                <p className="gt-about-text wow fadeInUp" data-wow-delay=".5s">
                  Zariah Construction Company is a dedicated and experienced firm committed to excellence in every project. With a strong foundation in quality craftsmanship and client satisfaction, we specialize in a diverse range of construction and fabrication services.
                  <br />
                  Our team brings expertise and passion to every build, ensuring durable, functional, and aesthetically pleasing results.
                </p>
                <ul className="gt-about-list wow fadeInUp" data-wow-delay=".3s" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
                  <li><i className="icon-icon-3"></i>Quality Craftsmanship</li>
                  <li><i className="icon-icon-3"></i>Integrity</li>
                  <li><i className="icon-icon-3"></i>Reliability & Safety</li>
                </ul>
                {/* <div className="gt-skill-feature-items">
                  <div className="gt-skill-feature wow fadeInUp" data-wow-delay=".3s">
                    <h3 className="gt-box-title">Regularly Maintainin</h3>
                    <div className="gt-progress">
                      <div className="gt-progress-bar" style={{width: '88%'}} data-width="88%">
                        <div className="gt-progress-value"><span className="counter-number2">88</span>%</div>
                      </div>
                    </div>
                  </div>
                  <div className="gt-skill-feature wow fadeInUp" data-wow-delay=".4s">
                    <h3 className="gt-box-title">Comprehensive Services</h3>
                    <div className="gt-progress">
                      <div className="gt-progress-bar" style={{width: '64%'}} data-width="64%">
                        <div className="gt-progress-value"><span className="counter-number2">64</span>%</div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="gt-about-button wow fadeInUp" data-wow-delay=".3s">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/about" className="gt-theme-btn style-2">
                      <span className="gt-text-btn">
                        <span className="gt-text-2">LEARN MORE <i className="fa-solid fa-arrow-right"></i></span>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gt-about-image-items">
                <motion.div
                  ref={imageRef1}
                  className="gt-about-image"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView1 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1.3, ease: [0.645, 0.045, 0.355, 1], delay: 0.4 }}
                >
                  {/* <img src={aboutImg1} alt="about" className="gt-about-img-1" /> */}
                  <div style={{ padding: '112.5% 0 0 0', position: 'relative' }}>
                    <iframe
                      src="https://player.vimeo.com/video/1161589511?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;muted=1"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px' }}
                      title="Zariah Construction 1"
                    ></iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script>
                </motion.div>
                {/* <motion.div
                  ref={imageRef2}
                  className="gt-about-image-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView2 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1.3, ease: [0.645, 0.045, 0.355, 1], delay: 0.6 }}
                >
                  <img src={aboutImg2} alt="about" />
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
