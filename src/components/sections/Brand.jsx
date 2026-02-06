import { motion } from 'framer-motion'
import brand1 from '../../assets/img/main_asset/clients/dl.png'
import brand2 from '../../assets/img/main_asset/clients/presby.png'
import brand3 from '../../assets/img/main_asset/clients/sda.png'

const brands = [
  brand1,
  brand2,
  brand3,
]

// Duplicate brands for seamless infinite scroll - need enough to fill screen + buffer
const scrollBrands = [...brands, ...brands, ...brands, ...brands]

export default function Brand() {
  // Calculate the width of one set: 3 brands × (114px width + 100px gap) - 100px (last gap)
  // = 3 × 214 - 100 = 542px
  const oneSetWidth = 542

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
                <img src={brand} alt={`brand-${index % brands.length}`} style={{ maxWidth: '150px', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
