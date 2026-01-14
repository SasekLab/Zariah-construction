import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import project1 from '../../assets/img/home-1/project/01.jpg'
import project2 from '../../assets/img/home-1/project/02.jpg'
import project3 from '../../assets/img/home-1/project/03.jpg'
import project4 from '../../assets/img/home-1/project/04.jpg'
import project5 from '../../assets/img/home-1/project/05.jpg'

const projects = [
  {
    id: 1,
    number: '01.',
    title: 'Engineering Design NYC',
    link: '/project-details',
    description: 'In addition to competition companies also face challenges related',
    image: project1
  },
  {
    id: 2,
    number: '02.',
    title: 'Construction Engineering',
    link: '/project-details',
    description: 'In addition to competition companies also face challenges related',
    image: project2
  },
  {
    id: 3,
    number: '03.',
    title: 'Telecommunication Towers',
    link: '/pricing',
    description: 'In addition to competition companies also face challenges related',
    image: project3
  },
  {
    id: 4,
    number: '04.',
    title: 'Development Projects',
    link: '/project-details',
    description: 'In addition to competition companies also face challenges related',
    image: project4
  },
  {
    id: 5,
    number: '05.',
    title: 'Corporate Headquarters Build',
    link: '/project-details',
    description: 'In addition to competition companies also face challenges related',
    image: project5
  }
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleMouseEnter = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="project-section-new section-padding fix pt-0">
      <div className="container">
        <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-xxl-7 col-xl-8 col-lg-9">
            <div className="gt-section-title text-center">
              <h6 className="wow fadeInUp">OUR WORK</h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">EXPLORE RECENT PROJECTS</h2>
            </div>
          </div>
        </div>
        <div className="project-top-wrapper">
          <div className="row g-0 mb-60">
            <div className="col-lg-8">
              <ul className="project-list">
                {projects.map((project, index) => (
                  <motion.li
                    key={project.id}
                    className="single-project wow animate fadeInLeft"
                    data-wow-delay={`${200 + index * 200}ms`}
                    data-wow-duration="1500ms"
                    onMouseEnter={() => handleMouseEnter(index)}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-content">
                      <span>{project.number}</span>
                      <h5>
                        <Link to={project.link}>
                          {project.title}
                          <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.7606 11.8843L0.876899 -5.73629e-07L-3.83304e-08 0.876897L11.8843 12.7606L3.66748 12.7606L3.66748 14L14 14L14 3.66748L12.7606 3.66748L12.7606 11.8843Z"/>
                          </svg>
                        </Link>
                      </h5>
                      <p>{project.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="project-img-group">
                <AnimatePresence mode="wait">
                  {projects.map((project, index) => (
                    index === activeIndex && (
                      <motion.li
                        key={project.id}
                        className="active"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <div className="project-img">
                          <img src={project.image} alt={project.title} />
                        </div>
                      </motion.li>
                    )
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
