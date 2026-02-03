import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroBg from '../../assets/img/home-1/hero/hero-bg.jpg'
import heroShape from '../../assets/img/home-1/hero/hero-2.png'
import groupShape from '../../assets/img/home-1/hero/group-shape.png'
import heroLine from '../../assets/img/home-1/hero/hero-line.png'
import topShape from '../../assets/img/home-1/hero/top.png'
import hero1 from '../../assets/img/home-1/hero/hero-1.png'
import hero3 from '../../assets/img/home-1/hero/hero-3.png'
import hero4 from '../../assets/img/home-1/hero/hero-4.png'

export default function Hero() {
  const heroSliderRef = useRef(null)
  const imageSliderRef = useRef(null)

  useEffect(() => {
    // Initialize WOW animation on mount
    if (window.WOW && typeof window.WOW === 'function') {
      new window.WOW().init()
    }
  }, [])

  return (
    <section className="hero-section hero-1 fix bg-cover" style={{ backgroundImage: `url('${heroBg}')` }}>
      <motion.div
        className="hero-shape"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={heroShape} alt="shape" />
      </motion.div>
      <motion.div
        className="group-shape float-bob-x"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={groupShape} alt="shape" />
      </motion.div>
      <motion.div
        className="line-shape"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={heroLine} alt="shape" />
      </motion.div>
      <motion.div
        className="top-shape"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img src={topShape} alt="shape" />
      </motion.div>
      <div className="pagi-item">
        <div className="dot-number">
          <span className="dot-num"><span>02</span></span>
          <span className="dot-num"><span className="style-2">03</span></span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7 col-md-12 order-2 order-lg-1">
            <Swiper
              ref={heroSliderRef}
              className="hero-slider-1"
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              loop={true}
              slidesPerView={1}
              effect="fade"
              speed={3000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".dot-number",
                clickable: true,
                renderBullet: (index, className) => {
                  const dots = ['02', '03']
                  return `<span class="${className}"><span class="${index === 0 ? '' : 'style-2'}">${dots[index] || ''}</span></span>`
                },
              }}
            >
              {[1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                  <div className="hero-content">
                    <h1 className="wow fadeInUp" data-wow-delay=".3s">
                      BUILDING FOUNDATIONS, <span>CRAFTING FUTURES</span>
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      At Azaria Construction Company, we are dedicated to delivering exceptional construction solutions. We combine innovative design with advanced techniques to build structures that stand the test of time, ensuring quality and reliability in every project.
                    </p>
                    <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/service" className="gt-theme-btn">
                          <span className="gt-text-btn">
                            <span className="gt-text-2">OUR SERVICES <i className="fa-solid fa-arrow-right"></i></span>
                          </span>
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/contact" className="gt-theme-btn new">
                          <span className="gt-text-btn">
                            <span className="gt-text-2">REACH OUT TO US <i className="fa-solid fa-arrow-right"></i></span>
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-lg-5 col-md-12 order-1 order-lg-2">
            <Swiper
              ref={imageSliderRef}
              className="image-slider"
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              speed={800}
              effect="slide"
              pagination={{
                el: ".dot-number",
                clickable: true,
              }}
            >
              <SwiperSlide>
                <motion.div
                  className="hero-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <img src={hero1} alt="hero" />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  className="hero-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <img src={hero3} alt="hero" />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  className="hero-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <img src={hero4} alt="hero" />
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
