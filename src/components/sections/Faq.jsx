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
    <section className="faq-section-new fix section-padding" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="faq-wrapper-new">
          <div className="row justify-content-center">
            <div className="col-lg-10" style={{ position: 'relative' }}>
              {/* Black background behind */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '600px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(15px)',
                borderRadius: '12px',
                zIndex: 1
              }} />
              {/* Video on top */}
              <iframe 
                ref={ref}
                src="https://player.vimeo.com/video/1161589477?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ 
                  position: 'relative',
                  width: '100%',
                  height: '600px',
                  borderRadius: '12px',
                  zIndex: 2
                }} 
                title="WhatsApp Video 2026-01-27 at 19.21.57"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
