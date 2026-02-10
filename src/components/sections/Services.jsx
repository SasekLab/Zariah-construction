import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import service1 from '../../assets/img/home-1/service/service-01.jpg'
import service2 from '../../assets/img/home-1/service/service-02.jpg'
import service3 from '../../assets/img/home-1/service/service-03.jpg'
import weldingImg from '../../assets/img/main_asset/services/welding.jpg'
import landPurchaseImg from '../../assets/img/main_asset/services/land-purchase.jpg'

const services = [
  {
    id: 'steel-trusses',
    icon: 'fa-regular fa-industry',
    title: 'Steel Trusses',
    description: 'Custom steel trusses designed for warehouses, churches, and factories. Built for strength, durability, and long-term performance.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo0r15TDSEg0cY23zWPSnUZjkMuiAQ8GD9oTKJa"
  },
  {
    id: 'wooden-trusses',
    icon: 'fa-regular fa-tree',
    title: 'Wooden Trusses',
    description: 'Handcrafted wooden trusses for residential homes. Reliable roofing support with timeless aesthetic appeal.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo0jrAOXhG8ZXM40AfIJYNwgHnc7xTRskuqCvmi"
  },
  {
    id: 'truss-installation',
    icon: 'fa-regular fa-screwdriver-wrench',
    title: 'Truss Installation',
    description: 'Expert installation of steel and wooden trusses. Secure fitting with precision workmanship guaranteed.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo0Rz7ss7d3lQiHnWjqarTV9PRSOGBv5ubphxKM"
  },
  {
    id: 'burglar-proof',
    icon: 'fa-regular fa-shield-halved',
    title: 'Burglar-Proof Windows & Gates',
    description: 'Custom security solutions for your property. Strong protection paired with elegant, modern design.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo08EtQ01XfEC9BtvOa0dgicA2WVkFHGKTrnbUq"
  },
  {
    id: 'custom-gates',
    icon: 'fa-regular fa-dungeon',
    title: 'Custom Gates',
    description: 'Modern sliding gates, cooling gates, and classic wooden options. Tailored to your style and functionality needs.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo021rx59HTeCp7RZOwlcsiPuvGyjJkSbLMh5rt"
  },
  {
    id: 'building-construction',
    icon: 'fa-regular fa-building',
    title: 'Building Construction',
    description: 'Complete building services from foundation to finish. Quality construction that meets all specifications.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo0dsuFdhefb3XGakRHz4ZComrpsMl0yJEjg8eU"
  },
  {
    id: 'roofing',
    icon: 'fa-regular fa-layer-group',
    title: 'Roofing',
    description: 'Professional roofing installation, repair, and maintenance. Premium materials for lasting weather protection.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo06hfA0WtbvjAgp2VoacHBWO6CThiyL08fueD9"
  },
  {
    id: 'glass-works',
    icon: 'fa-regular fa-window-maximize',
    title: 'Glass Works',
    description: 'Precision glass installations for windows, facades, and interiors. Clean finishes with modern aesthetics.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo0bhSFqvnzBctSg8v5o3XwYrPQiAF6f9Zu4lVD"
  },
  {
    id: 'gas-stove-production',
    icon: 'fa-regular fa-fire-burner',
    title: 'Gas Stove Production',
    description: 'High-quality gas stoves for homes, restaurants, and hotels. Efficient, safe, and built to last.',
    image: "https://fe5lpvispw.ufs.sh/f/DFYBeUqk6Uo0PWNhBJ6bDI8MaqW9BYGAUpw0yrouRi1OKQV4"
  },
  {
    id: 'aluminum-welding',
    icon: 'fa-regular fa-wand-sparkles',
    title: 'Aluminum Welding',
    description: 'Professional welding for residential and commercial projects. Precision work with durable, quality finishes.',
    image: weldingImg
  },
  {
    id: 'land-purchase',
    icon: 'fa-regular fa-map-location-dot',
    title: 'Land Purchase',
    description: 'Expert guidance in finding and acquiring land for your construction projects. Hassle-free process from start to finish.',
    image: landPurchaseImg
  }
]

export default function Services() {
  return (
    <section id="services" className="service-section-1 section-padding section-bg fix" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="gt-section-title text-center">
          <h6 className="wow fadeInUp">OUR SERVICES</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">EXPLORE OUR SERVICES</h2>
          <p className="wow fadeInUp mt-3 w-75 mx-auto" data-wow-delay=".4s">
            At Zariah Construction Company, we offer a comprehensive range of construction and fabrication services designed to meet diverse needs. Our expertise ensures high-quality results, durability, and client satisfaction.
          </p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} id={service.id} className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`} data-wow-delay={`.${3 + index * 2}s`}>
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
                <div className="service-content" style={{ marginTop: '20px' }}>
                  {/* <motion.div
                    className="icon"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className={service.icon}></i>
                  </motion.div> */}
                  <h4>
                    <Link to="/service">{service.title}</Link>
                  </h4>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
