import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import service1 from '../../assets/img/home-1/service/service-01.jpg'
import service2 from '../../assets/img/home-1/service/service-02.jpg'
import service3 from '../../assets/img/home-1/service/service-03.jpg'

const services = [
  {
    icon: 'fa-regular fa-building-columns',
    title: 'Building Construction',
    description: 'After more than twenty years of success in the wood products industry, the Bilder family founded its capital venture.',
    image: service1
  },
  {
    icon: 'fa-light fa-sitemap',
    title: 'Architecture Design',
    description: 'After more than twenty years of success in the wood products industry, the Bilder family founded its capital venture.',
    image: service2
  },
  {
    icon: 'fa-regular fa-hammer',
    title: 'Building Renovation',
    description: 'After more than twenty years of success in the wood products industry, the Bilder family founded its capital venture.',
    image: service3
  }
]

export default function Services() {
  return (
    <section className="service-section-1 section-padding section-bg fix">
      <div className="container">
        <div className="gt-section-title text-center">
          <h6 className="wow fadeInUp">OUR SERVICES</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">EXPLORE OUR SERVICES</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`} data-wow-delay={`.${3 + index * 2}s`}>
              <motion.div
                className="service-card-items"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-image">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="service-content">
                  <motion.div
                    className="icon"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className={service.icon}></i>
                  </motion.div>
                  <h4>
                    <Link to="/service-details">{service.title}</Link>
                  </h4>
                  <p>{service.description}</p>
                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/service-details" className="link-btns">READ MORE <i className="fas fa-plus"></i></Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
