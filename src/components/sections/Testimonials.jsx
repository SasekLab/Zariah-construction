import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules'
import { motion } from 'framer-motion'
import client01 from '../../assets/img/home-1/testimonial/client-01.jpg'
import client02 from '../../assets/img/home-1/testimonial/client-02.jpg'
import client03 from '../../assets/img/home-1/testimonial/client-03.jpg'


const testimonials = [
  {
    id: 1,
    image: client01,
    text: "Zariah Construction transformed our vision into reality with outstanding craftsmanship. Their attention to detail and professional approach throughout the entire project exceeded our expectations. Highly recommend their services!",
    author: 'Ethan Mensah',
    role: 'Business Owner'
  },
  {
    id: 2,
    image: client02,
    text: "Working with Zariah Construction was a seamless experience. They completed our warehouse steel truss installation on time and within budget. The team's expertise and reliability are truly commendable.",
    author: 'Kekeli Yaw',
    role: 'Project Manager'
  },
  {
    id: 3,
    image: client03,
    text: "I'm thoroughly impressed with the quality of work delivered by Zariah Construction. From the initial consultation to the final installation, their professionalism and dedication to excellence were evident at every stage.",
    author: 'Sophia Johnson',
    role: 'Property Developer'
  },
]

export default function Testimonials() {
  return (
    <section className="gt-testimonial-section fix section-padding pt-10">
      <div className="container">
        <div className="gt-section-title text-center">
          <h6 className="wow fadeInUp">TESTIMONIAL</h6>
          <h2 className="wow splt-txt" data-splitting>
            OUR WORKS SPEAK FOR US
          </h2>
        </div>
      </div>
      <div className="gt-testimonial-wrapper">
        <Swiper
          className="gt-testimonial-content-slider"
          modules={[Navigation, Autoplay, Thumbs]}
          spaceBetween={30}
          speed={3000}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          breakpoints={{
            1199: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          navigation={{
            nextEl: '.array-prev',
            prevEl: '.array-next',
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="gt-testimonial-box-items"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                style={{ paddingTop: '0' }}
              >
                <div className="gt-testi-content" style={{ marginTop: '0', paddingTop: '60px' }}>
                  <h5>{testimonial.text}</h5>
                  <div className="client-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="gt-array-items">
          {/*           <motion.button
            className="array-prev"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </motion.button>

          <motion.button
            className="array-next"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </motion.button> */}
        </div>
      </div>
    </section>
  )
}
