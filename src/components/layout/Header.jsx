import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import blackLogo from '../../assets/img/logo/black-logo.svg'
import dotIcon from '../../assets/img/home-1/dot.svg'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <>
      {/* Back to Top Button */}
      <button id="gt-back-top" className="gt-back-to-top">
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      {/* Mouse Cursor */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      {/* Offcanvas Area */}
      <div className="fix-area">
        <div className={`offcanvas__info ${isOffcanvasOpen ? 'info-open' : ''}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img src={blackLogo} alt="logo" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={toggleOffcanvas}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com"><span className="mailto:info@example.com">info@example.com</span></a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <Link to="/contact" className="gt-theme-btn">
                  <span className="gt-icon-btn"><i className="icon-icon-1"></i></span>
                  <span className="gt-text-btn">
                    <span className="gt-text-2">get a quote</span>
                  </span>
                </Link>
                <div className="social-icon d-flex align-items-center">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${isOffcanvasOpen ? 'overlay-open' : ''}`} onClick={toggleOffcanvas}></div>

      {/* Header */}
      <header id="header-sticky" className={`header-1 ${isSticky ? 'sticky' : ''}`}>
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="logo">
                <Link to="/" className="header-logo">
                  <img src={blackLogo} alt="logo" />
                </Link>
                <Link to="/" className="header-logo-2">
                  <img src={blackLogo} alt="logo" />
                </Link>
              </div>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className={`has-dropdown menu-thumb ${location.pathname === '/' ? 'active' : ''}`}>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/#about">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/#services">Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                {/* Search button hidden */}
                {/* Hamburger button hidden */}
                <Link to="/contact" className="gt-theme-btn">
                  <span className="gt-text-btn">
                    <span className="gt-text-2">get a quote</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Popup */}
      <div className={`search-popup ${isSearchOpen ? 'active' : ''}`}>
        <div className="search-popup__overlay search-toggler" onClick={toggleSearch}></div>
        <div className="search-popup__content">
          <form role="search" method="get" className="search-popup__form" action="#">
            <input type="text" id="search" name="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="search-btn">
              <span><i className="fa-regular fa-magnifying-glass"></i></span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
