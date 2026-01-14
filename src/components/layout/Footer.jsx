import { NavLink } from 'react-router-dom'
import whiteLogo from '../../assets/img/logo/white-logo.svg'
import callIcon from '../../assets/img/call.png'
import locationIcon from '../../assets/img/location.png'

export default function Footer() {
  return (
    <footer className="gt-footer-section footer-bg">
      <div className="container">
        <div className="gt-footer-widget-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="gt-footer-widget-items">
                <div className="gt-widget-head">
                  <NavLink to="/" className="gt-footer-logo">
                    <img src={whiteLogo} alt="logo" />
                  </NavLink>
                </div>
                <div className="gt-footer-content">
                  <p>
                    It is a long established fact that a reader will be distracted the road readable content of a page when looking at layout. of a page when looking at layout.
                  </p>
                  <ul className="gt-contact-list">
                    <li>
                      <div className="icon">
                        <img src={callIcon} alt="call" />
                        <span>Phone</span>
                      </div>
                      <a href="tel:0945424780">(094) 542 - 4780</a>
                    </li>
                    <li>
                      <div className="icon">
                        <img src={locationIcon} alt="location" />
                        <span>Location</span>
                      </div>
                      Toronto, Montreal, City
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="gt-footer-widget-items">
                <div className="gt-widget-head">
                  <h3>Useful Links</h3>
                </div>
                <ul className="gt-list-area">
                  <li><NavLink to="/about">About Us</NavLink></li>
                  <li><NavLink to="/team-details">Team Members</NavLink></li>
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                  <li><NavLink to="/contact">24/7 Online Support</NavLink></li>
                  <li><NavLink to="/contact">Partners</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 ps-lg-3 col-lg-3 col-md-6 col-sm-6">
              <div className="gt-footer-widget-items">
                <div className="gt-widget-head">
                  <h3>Our Services</h3>
                </div>
                <ul className="gt-list-area">
                  <li><NavLink to="/service-details">Building Construction</NavLink></li>
                  <li><NavLink to="/service-details">Architecture Design</NavLink></li>
                  <li><NavLink to="/service-details">Project Management</NavLink></li>
                  <li><NavLink to="/service-details">Building Maintenance</NavLink></li>
                  <li><NavLink to="/service-details">Flooring & Roofing</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
              <div className="gt-footer-widget-items">
                <div className="gt-widget-head">
                  <h3>Our Contact</h3>
                </div>
                <ul className="gt-contact-content">
                  <li>
                    <span><i className="fa-solid fa-location-dot"></i></span>
                    3770 Hidden Meadow Drive Venturia, ND 58489
                  </li>
                  <li>
                    <span><i className="fa-solid fa-phone"></i></span>
                    <a href="tel:+001652069800">+001 6520 698 00</a>
                  </li>
                  <li>
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                </ul>
                <div className="footer-socials">
                  <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                  <a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-wrapper">
            <p>© 2025 <b>Conztra</b>. All Rights Reserved.</p>
            <div className="gt-social-icon d-flex align-items-center">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-vimeo-v"></i></a>
              <a href="#"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
