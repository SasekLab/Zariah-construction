import { useRef, useState, useEffect } from 'react'

export default function VideoShowcase() {
  const ref = useRef(null)
  const [loadVideo, setLoadVideo] = useState(false)

  useEffect(() => {
    // Delay video loading to improve initial page load
    const timer = setTimeout(() => {
      setLoadVideo(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="video-showcase-section fix section-padding">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="gt-section-title text-center" style={{ marginBottom: '50px' }}>
          <h6 className="wow fadeInUp">SEE US IN ACTION</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">QUALITY YOU CAN TRUST</h2>
          <p className="wow fadeInUp mt-3 w-75 mx-auto" data-wow-delay=".4s">
            Watch our team at work on a recent project. From truss fabrication to final installation, this is the craftsmanship and dedication we bring to every build.
          </p>
        </div>
        <div className="video-showcase-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-10" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '600px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '12px',
                  zIndex: 1
                }}
              />
              {loadVideo ? (
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
                  loading="lazy"
                />
              ) : (
                <div
                  ref={ref}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '600px',
                    borderRadius: '12px',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}
                >
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
