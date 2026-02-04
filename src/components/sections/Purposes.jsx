import { Link } from 'react-router-dom'
import purposesImage from '../../assets/img/home-1/purposes/purposes-image.jpg'
import textCircle from '../../assets/img/home-1/text-circle.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const purposes = [
  {
    icon: 'fa-solid fa-briefcase',
    title: 'EXPERT & PROFESSIONAL',
    description: 'With years of expertise, a skilled team, and a passion for precision'
  },
  {
    icon: 'fa-solid fa-building-columns',
    title: 'HIGHT QUALITY WORK',
    description: 'We deliver exceptional results that stand the test of time.'
  },
  {
    icon: 'fa-solid fa-gem',
    title: 'PROFESSIONAL APPROACH',
    description: 'We approach every project with integrity, transparency, and a commitment to excellence.'
  }
]

export default function Purposes() {
  const imageRef = useRef(null)
  const isInView = useInView(imageRef, { once: true, amount: 0.3 })

  return (
    <section className="gt-purposes-section fix">
      <div className="container">
        <div className="gt-purposes-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <motion.div
                ref={imageRef}
                className="gt-purposes-image"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.3, ease: [0.645, 0.045, 0.355, 1], delay: 0.4 }}
              >
                <img src={purposesImage} alt="purposes" />
                <div className="gt-circle-box">
                  <Link to="/contact" className="gt-arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <div className="gt-text-circle">
                    <img src={textCircle} alt="circle" />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <div className="gt-purposes-content">
                <div className="gt-section-title mb-0">
                  <h6 className="text-white wow fadeInUp">WHATS REASONS</h6>
                  <h2 className="text-white wow splt-txt" data-splitting>
                    WHY CHOOSE US
                  </h2>
                </div>
                <p className="text">
                  At Zariah Construction, we believe construction is more than just building it's about creating spaces that inspire and endure. With years of expertise, a skilled team, and a passion for precision
                </p>
                <ul className="gt-icon-items">
                  {purposes.map((purpose, index) => (
                    <li key={index} className="wow fadeInUp" data-wow-delay={`.${3 + index * 2}s`}>
                      <div className="gt-purposes-icon">
                        <i className={purpose.icon}></i>
                      </div>
                      <div className="gt-icon-purposes-content">
                        <h3>{purpose.title}</h3>
                        <p>{purpose.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/about" className="gt-theme-btn wow fadeInUp" data-wow-delay=".5s">
                    <span className="gt-text-btn">
                      <span className="gt-text-2">LEARN MORE <i className="fa-solid fa-arrow-right"></i></span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
