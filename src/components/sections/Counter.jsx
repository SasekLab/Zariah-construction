import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

const counters = [
  { number: 30, label: 'Completed', subLabel: 'Projects', suffix: '+' },
  { number: 50, label: 'Experienced', subLabel: 'Workers', suffix: '+' },
  { number: 100, label: 'Client', subLabel: 'Satisfaction', suffix: '%' },
]

function CounterNumber({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 30 })
  const displayValue = useTransform(springValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = displayValue.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = v
      }
    })
    return () => unsubscribe()
  }, [displayValue])

  return <span ref={ref} className="gt-count">0</span>
}

export default function Counter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="gt-counter-section section-padding section-bg">
      <div className="container">
        <div className="gt-counter-wrapper">
          <div className="row g-4 justify-content-center">
            {counters.map((counter, index) => (
              <motion.div
                key={index}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`.${2 + index * 2}s`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="gt-counter-box"
                  whileHover={{
                    y: -10,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="gt-content">
                    <h2><CounterNumber value={counter.number} />{counter.suffix}</h2>
                    <p>{counter.label} <br /> {counter.subLabel}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
