import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const faqs = [
  {
    id: 'One',
    question: 'How do i get started with green energy?',
    answer: 'success in the wood products industry, the Bilder family founded its capital venture in 2009 investing in real estate in the western.'
  },
  {
    id: 'Two',
    question: 'Can i use green energy in my home or business?',
    answer: 'success in the wood products industry, the Bilder family founded its capital venture in 2009 investing in real estate in the western.'
  },
  {
    id: 'three',
    question: 'Green energy reliable during bad weather?',
    answer: 'success in the wood products industry, the Bilder family founded its capital venture in 2009 investing in real estate in the western.'
  },
  {
    id: 'four',
    question: 'Do you offer a free, no obligation quotation?',
    answer: 'success in the wood products industry, the Bilder family founded its capital venture in 2009 investing in real estate in the western.'
  },
]

export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="faq-section-new fix section-padding">
      <div className="container">
        <div className="faq-wrapper-new">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <motion.div
                ref={ref}
                className="faq-image"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.3, ease: [0.645, 0.045, 0.355, 1], delay: 0.4 }}
              >
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='700' viewBox='0 0 600 700'%3E%3Crect width='600' height='700' fill='%234B5563'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='white'%3EFAQ Image%3C/text%3E%3C/svg%3E" alt="FAQ" />
              </motion.div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="gt-section-title">
                  <h6 className="wow fadeInUp text-white">OUR FAQS</h6>
                  <h2 className="wow fadeInUp text-white" data-wow-delay=".3s">FREQUENTLY ASKED QUESTIONS</h2>
                </div>
                <div className="faq-items wow fadeInUp" data-wow-delay=".3s">
                  <div className="accordion" id="accordionExample">
                    {faqs.map((faq, index) => (
                      <div key={faq.id} className={`accordion-item wow fadeInUp`} data-wow-delay={`.${3 + (index % 2) * 2}s`}>
                        <h2 className="accordion-header" id={`heading${faq.id}`}>
                          <button
                            className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${faq.id}`}
                            aria-expanded={index === 0}
                            aria-controls={`collapse${faq.id}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${faq.id}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          aria-labelledby={`heading${faq.id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
