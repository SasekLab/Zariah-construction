import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import service1 from '../../assets/img/home-1/service/service-01.jpg'
import service2 from '../../assets/img/home-1/service/service-02.jpg'
import service3 from '../../assets/img/home-1/service/service-03.jpg'

const services = [
  {
    icon: 'fa-regular fa-industry',
    title: 'Steel Trusses',
    description: 'We design, fabricate, and install robust steel trusses for large-scale projects such as warehouses, churches, and factories, ensuring structural integrity and longevity.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo0r15TDSEg0cY23zWPSnUZjkMuiAQ8GD9oTKJa"
  },
  {
    icon: 'fa-regular fa-tree',
    title: 'Wooden Trusses',
    description: 'Our skilled craftsmen create custom wooden trusses for residential homes, providing reliable and aesthetically pleasing roofing support.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo0jrAOXhG8ZXM40AfIJYNwgHnc7xTRskuqCvmi"
  },
  {
    icon: 'fa-regular fa-screwdriver-wrench',
    title: 'Truss Installation',
    description: 'Beyond fabrication, we provide professional installation services for both steel and wooden trusses, guaranteeing secure and precise fitting.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo0Rz7ss7d3lQiHnWjqarTV9PRSOGBv5ubphxKM"
  },
  {
    icon: 'fa-regular fa-shield-halved',
    title: 'Burglar-Proof Windows & Gates',
    description: 'Enhance the security of your property with our custom-designed burglar-proof windows and gates, combining strength with elegant design.',
    image: service1
  },
  {
    icon: 'fa-regular fa-dungeon',
    title: 'Custom Gates',
    description: 'We offer a variety of gate solutions, including modern cooling gates, efficient sliding gates, and classic wooden gates, tailored to your aesthetic and functional requirements.',
    image: service2
  },
  {
    icon: 'fa-regular fa-building',
    title: 'Building Construction',
    description: 'From foundational work to complete structural builds, we manage all aspects of general building construction, ensuring quality and adherence to specifications.',
    image: service3
  },
  {
    icon: 'fa-regular fa-road',
    title: 'Infrastructure Development',
    description: 'Our capabilities extend to various infrastructure projects, contributing to the development of robust and sustainable community assets.',
    image: service1
  },
  {
    icon: 'fa-regular fa-layer-group',
    title: 'Roofing',
    description: 'We provide expert roofing services, including installation, repair, and maintenance, utilizing high-quality materials for lasting protection.',
    image: service2
  },
  {
    icon: 'fa-regular fa-window-maximize',
    title: 'Glass Works',
    description: 'Specializing in various glass installations, we offer solutions for windows, facades, and interior elements, focusing on precision and aesthetic appeal.',
    image: service3
  },
  {
    icon: 'fa-regular fa-fire-burner',
    title: 'Gas Stove Production',
    description: 'We are also involved in the production of high-quality gas stoves for a range of applications, including homes, restaurants, and hotels, focusing on efficiency and safety.',
    image: service1
  }
]

export default function Services() {
  return (
    <section id="services" className="service-section-1 section-padding section-bg fix">
      <div className="container">
        <div className="gt-section-title text-center">
          <h6 className="wow fadeInUp">OUR SERVICES</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">EXPLORE OUR SERVICES</h2>
          <p className="wow fadeInUp mt-3 w-75 mx-auto" data-wow-delay=".4s">
            At Azaria Construction Company, we offer a comprehensive range of construction and fabrication services designed to meet diverse needs. Our expertise ensures high-quality results, durability, and client satisfaction.
          </p>
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
                    <Link to="/service">{service.title}</Link>
                  </h4>
                  <p>{service.description}</p>
                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/service" className="link-btns">READ MORE <i className="fas fa-plus"></i></Link>
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
