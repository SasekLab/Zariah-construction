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
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                ref={ref}
                className="video-placeholder"
                style={{
                  width: '100%',
                  height: '500px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: '#6b7280',
                  fontWeight: '600'
                }}
              >
                Video Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
