import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import jQuery and make global
import $ from 'jquery'
window.jQuery = $
window.$ = $

// Import original CSS files from template
import './styles/bootstrap.min.css'
import './styles/main.css'
import './styles/nice-select.css'
import './styles/meanmenu.css'
import './styles/magnific-popup.css'
import './styles/splitting.css'
import './styles/icomon.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import Animate.css - Deferred
setTimeout(() => {
  import('animate.css')
}, 100)

// Import WOW.js - Deferred and use dynamic import to handle CJS/ESM issues
setTimeout(() => {
  import('wowjs/dist/wow.js').then(module => {
    window.WOW = module.default || module.WOW || window.WOW
  }).catch(() => {
    console.warn('WOW.js failed to load, animations may not work')
  })
}, 200)

// Import Splitting.js and make it available globally
import Splitting from 'splitting'
window.Splitting = Splitting

// Dynamically import jQuery plugins (they require jQuery to be global first)
// Defer to improve initial load time
setTimeout(() => {
  Promise.all([
    import('jquery-nice-select'),
    import('waypoints/lib/jquery.waypoints.js')
  ]).then(() => {
    // Import jquery.counterup after waypoints (it depends on waypoints)
    return import('jquery.counterup')
  }).then(() => {
    console.log('jQuery plugins loaded')
  }).catch(err => {
    console.warn('Some jQuery plugins failed to load:', err)
  })
}, 300)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
