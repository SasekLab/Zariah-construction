import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import news1 from '../../assets/img/home-1/news/news-01.jpg'
import news2 from '../../assets/img/home-1/news/news-02.jpg'
import news3 from '../../assets/img/home-1/news/news-03.jpg'

const news = [
  {
    id: 1,
    image: news1,
    title: 'High quality work for Demand our customer.',
    date: '11 March 2025',
    comments: 19,
    excerpt: 'After more than twenty years of success in the wood products industry, the Bilder family.'
  },
  {
    id: 2,
    image: news2,
    title: 'Satisfection for the customer our first parity.',
    date: '11 March 2025',
    comments: 19,
    excerpt: 'After more than twenty years of success in the wood products industry, the Bilder family.'
  },
  {
    id: 3,
    image: news3,
    title: 'How to Choose the Best Freight Solution Your Business',
    date: '11 March 2025',
    comments: 19,
    excerpt: 'After more than twenty years of success in the wood products industry, the Bilder family.'
  },
]

export default function News() {
  return (
    <section className="gt-news-section fix section-padding section-bg">
      <div className="container">
        <div className="gt-section-title-area">
          <div className="gt-section-title">
            <h6 className="wow fadeInUp">NEWS & BLOG</h6>
            <h2 className="wow splt-txt" data-splitting>
              LATEST NEWS & ARTICLES
            </h2>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/news" className="gt-theme-btn style-2 wow fadeInUp" data-wow-delay=".5s">
              <span className="gt-text-btn">
                <span className="gt-text-2">VIEW ALL News <i className="fa-solid fa-arrow-right"></i></span>
              </span>
            </Link>
          </motion.div>
        </div>
        <div className="row">
          {news.map((item, index) => (
            <div key={item.id} className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`} data-wow-delay={`.${3 + index * 2}s`}>
              <motion.div
                className="gt-news-card-items"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="gt-news-image">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="gt-news-content">
                  <h3>
                    <Link to="/news-details">{item.title}</Link>
                  </h3>
                  <ul className="gt-date-list">
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>
                      {item.date}
                    </li>
                    <li>
                      <i className="fa-solid fa-comments"></i>
                      {item.comments} Comments
                    </li>
                  </ul>
                  <p>{item.excerpt}</p>
                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/news-details" className="gt-link-btn">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
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
