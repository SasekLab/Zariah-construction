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

// Import Animate.css
import 'animate.css'

// Import WOW.js
import * as WOWModule from 'wowjs'
const WOW = WOWModule.default || WOWModule.WOW

// Import Splitting.js and make it available globally
import Splitting from 'splitting'
window.Splitting = Splitting

// Initialize WOW.js globally so it's available on all pages
window.WOW = WOW

// Dynamically import jQuery plugins (they require jQuery to be global first)
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
