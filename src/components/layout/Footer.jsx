import { NavLink } from 'react-router-dom'
import zariahLogo from '../../assets/img/logo-zariah.png'
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
                    <img src={zariahLogo} alt="logo" style={{ maxWidth: '150px' }} />
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
                      <a href="tel:+233246682191">+233246682191</a> / <a href="tel:+233501720506">+233501720506</a>
                    </li>
                    <li>
                      <div className="icon">
                        <img src={locationIcon} alt="location" />
                        <span>Location</span>
                      </div>
                      Kokofu Mensase, Bekwai, Ghana
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
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About Us</NavLink></li>
                  <li><NavLink to="/service">Services</NavLink></li>
                  <li><NavLink to="/project">Projects</NavLink></li>
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 ps-lg-3 col-lg-3 col-md-6 col-sm-6">
              <div className="gt-footer-widget-items">
                <div className="gt-widget-head">
                  <h3>Our Services</h3>
                </div>
                <ul className="gt-list-area">
                  <li><NavLink to="/service">Steel & Wooden Trusses</NavLink></li>
                  <li><NavLink to="/service">Building Construction</NavLink></li>
                  <li><NavLink to="/service">Burglar-Proof Windows/Gates</NavLink></li>
                  <li><NavLink to="/service">Roofing & Glass Works</NavLink></li>
                  <li><NavLink to="/service">Gas Stove Production</NavLink></li>
                  <li><NavLink to="/service">Aluminum Welding</NavLink></li>
                  <li><NavLink to="/service">Land Purchase</NavLink></li>
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
                    Kokofu Mensase, Bekwai, Ghana
                  </li>
                  <li>
                    <span><i className="fa-solid fa-phone"></i></span>
                    <a href="tel:+233246682191">+233246682191</a> / <a href="tel:+233501720506">+233501720506</a>
                  </li>
                  <li>
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <a href="mailto:contact@zariahconstruction.com">contact@zariahconstruction.com</a>
                  </li>
                </ul>
                <div className="footer-socials">
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                  <a href="https://wa.me/233246682191"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-wrapper">
            <p>@ 2026 <b>Zariah Construction</b>. All Right Reserved. Built by Sasek Labs</p>
            <div className="gt-social-icon d-flex align-items-center">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-tiktok"></i></a>
              <a href="https://wa.me/233246682191"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
