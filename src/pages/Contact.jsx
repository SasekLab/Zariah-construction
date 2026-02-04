import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Preloader from '../components/layout/Preloader'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useMainScripts } from '../hooks/useMainScripts'
import breadcrumbBg from '../assets/img/breadcrumb-bg.png'
import breadcrumbShape from '../assets/img/breadcrumb-shape.jpg'

export default function Contact() {
  useMainScripts()

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)

    // Re-initialize WOW.js when component mounts
    if (window.WOW && typeof window.WOW === 'function') {
      const wow = new window.WOW()
      wow.init()
    }
  }, [])

  return (
    <div className="page-wrapper">
      <Header />
      <main>
        {/* Breadcrumb Section */}
        <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: `url('${breadcrumbBg}')` }}>
          <div className="gt-right-shape">
            <img src={breadcrumbShape} alt="img" />
          </div>
          <div className="container">
            <div className="gt-page-heading">
              <div className="gt-breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">CONTACT US</h1>
              </div>
              <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <section className="gt-contact-section section-padding fix pb-0">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="contact-info-items">
                  <div className="icon">
                    <i className="fa-solid fa-square-chevron-down"></i>
                  </div>
                  <div className="content">
                    <h4>Email Address</h4>
                    <h6>
                      <a href="mailto:contact@zariahconstruction.com">contact@zariahconstruction.com</a> <br />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="contact-info-items">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="content">
                    <h4>Our Address</h4>
                    <h6>
                      2715 Ash Dr. San Jose, South <br /> Dakota 83475
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="contact-info-items">
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="content">
                    <h4>Phone Number</h4>
                    <h6>
                      <a href="tel:4805550103505">480 555 0103 505</a> <br />
                      <a href="tel:5550125">555 0125</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="gt-contact-us-section section-padding pb-0 fix">
          <div className="container">
            <div className="gt-contact-us-wrapper">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Get In Touch</h2>
              <form action="#" id="contact-form" method="POST">
                <div className="row g-4">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="form-clt">
                      <span>Your Name</span>
                      <input type="text" name="name" id="name" placeholder="Full Name*" />
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="form-clt">
                      <span>Your Email</span>
                      <input type="text" name="email" id="email2" placeholder="Your Email*" />
                    </div>
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                    <div className="form-clt">
                      <span>Your Message</span>
                      <textarea name="message" id="message" placeholder="Message Here*"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay=".6s">
                    <div className="contact-btn">
                      <button type="submit" className="gt-theme-btn">
                        <span className="gt-text-btn">
                          <span className="gt-text-2">SEND MESSAGE <i className="fa-solid fa-chevrons-right"></i></span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <div className="gt-map-section wow fadeInUp" data-wow-delay=".3s">
          <div className="gt-map-items">
            <div className="googpemap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div >
  )
}
