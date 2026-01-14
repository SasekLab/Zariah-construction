import { motion } from 'framer-motion'
import brand1 from '../../assets/img/home-1/brand/brand-01.png'
import brand2 from '../../assets/img/home-1/brand/brand-02.png'
import brand3 from '../../assets/img/home-1/brand/brand-03.png'
import brand4 from '../../assets/img/home-1/brand/brand-04.png'
import brand5 from '../../assets/img/home-1/brand/brand-05.png'
import brand6 from '../../assets/img/home-1/brand/brand-06.png'

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
]

// Duplicate brands for seamless infinite scroll - need enough to fill screen + buffer
const scrollBrands = [...brands, ...brands, ...brands, ...brands]

export default function Brand() {
  // Calculate the width of one set: 6 brands × (114px width + 100px gap) - 100px (last gap)
  // = 6 × 214 - 100 = 1184px
  const oneSetWidth = 1184

  return (
    <div className="gt-brand-section section-padding fix">
      <div className="gt-brand-slider" style={{ overflow: 'hidden', width: '100%' }}>
        <motion.div
          className="brand-track"
          style={{
            display: 'flex',
            gap: '100px',
            width: 'fit-content',
          }}
          animate={{
            x: [0, -oneSetWidth]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
        >
          {scrollBrands.map((brand, index) => (
            <div
              key={index}
              className="gt-brand-slide-element"
              style={{ flex: '0 0 auto' }}
            >
              <div className="brand-image">
                <img src={brand} alt={`brand-${index % brands.length}`} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
