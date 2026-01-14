import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import shop1 from '../../assets/img/home-1/shop/shop-01.png'
import shop2 from '../../assets/img/home-1/shop/shop-02.png'
import shop3 from '../../assets/img/home-1/shop/shop-03.png'
import shop4 from '../../assets/img/home-1/shop/shop-04.png'
import shop5 from '../../assets/img/home-1/shop/shop-05.png'
import shop6 from '../../assets/img/home-1/shop/shop-06.png'
import shop7 from '../../assets/img/home-1/shop/shop-07.png'
import shop8 from '../../assets/img/home-1/shop/shop-08.png'

const products = [
  {
    id: 1,
    image: shop1,
    title: 'Drill Machine',
    price: '$29.99',
    oldPrice: '$37.99',
    discount: '-27%',
    reviews: 1
  },
  {
    id: 2,
    image: shop2,
    title: 'Professional Jigsaw',
    price: '$29.99',
    oldPrice: '$37.99',
    discount: null,
    reviews: 1
  },
  {
    id: 3,
    image: shop3,
    title: 'Screwdriver Drill',
    price: '$29.99',
    oldPrice: '$37.99',
    discount: '-08%',
    reviews: 1
  },
  {
    id: 4,
    image: shop4,
    title: 'Wood Cutting',
    price: '$29.99',
    oldPrice: '$37.99',
    discount: null,
    reviews: 1
  },
  {
    id: 5,
    image: shop5,
    title: 'Screwdriver Set',
    price: '$29.99',
    oldPrice: '$37.99',
    discount: null,
    reviews: 1
  },
  {
    id: 6,
    image: shop6,
    title: 'Battery screwdriver',
    price: '$29.99',
    oldPrice: '$37.99',
    discount: '-08%',
    reviews: 1
  },
  {
    id: 7,
    image: shop7,
    title: 'Saw Machine',
    price: '$29.99',
    oldPrice: '$37.99',
    discount: null,
    reviews: 1
  },
  {
    id: 8,
    image: shop8,
    title: 'Grinder Tool',
    price: '$29.99',
    oldPrice: '$37.99',
    discount: '-29%',
    reviews: 1
  },
]

export default function Shop() {
  return (
    <section className="gt-shop-section fix section-padding section-bg">
      <div className="container">
        <div className="gt-section-title-area">
          <div className="gt-section-title">
            <h6 className="wow fadeInUp">THIS IS THE OFFICIAL SHOP</h6>
            <h2 className="wow splt-txt" data-splitting>
              FEATURED PRODUCTS
            </h2>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/shop" className="gt-theme-btn style-2 wow fadeInUp" data-wow-delay=".5s">
              <span className="gt-text-btn">
                <span className="gt-text-2">VIEW ALL SHOP <i className="fa-solid fa-arrow-right"></i></span>
              </span>
            </Link>
          </motion.div>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <div key={product.id} className={`col-xl-3 col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`.${2 + (index % 4) * 2}s`}>
              <motion.div
                className="gt-shop-card-items"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="gt-shop-image">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  />
                  {product.discount && <span className="discount">{product.discount}</span>}
                  <ul className="gt-shop-icon d-grid justify-content-center align-items-center">
                    <li>
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/shop-cart"><i className="far fa-heart"></i></Link>
                      </motion.div>
                    </li>
                    <li>
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/shop-cart"><i className="far fa-shopping-cart"></i></Link>
                      </motion.div>
                    </li>
                    <li>
                      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <i className="far fa-eye"></i>
                      </motion.button>
                    </li>
                  </ul>
                </div>
                <div className="gt-shop-content">
                  <div className="gt-star-list">
                    <div className="gt-star">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <span>{product.reviews} Review</span>
                  </div>
                  <h3><Link to="/shop-details">{product.title}</Link></h3>
                  <ul className="gt-price-list">
                    <li>{product.price}</li>
                    <li><del>{product.oldPrice}</del></li>
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
