import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Preloader() {
  const location = useLocation()

  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.querySelector('.preloader')
      if (preloader) {
        preloader.classList.add('loaded')
        setTimeout(() => {
          preloader.style.display = 'none'
        }, 600)
      }
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [location])

  return (
    <div className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="C" className="letters-loading">C</span>
          <span data-text-preloader="O" className="letters-loading">O</span>
          <span data-text-preloader="N" className="letters-loading">N</span>
          <span data-text-preloader="Z" className="letters-loading">Z</span>
          <span data-text-preloader="T" className="letters-loading">T</span>
          <span data-text-preloader="R" className="letters-loading">R</span>
          <span data-text-preloader="A" className="letters-loading">A</span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
