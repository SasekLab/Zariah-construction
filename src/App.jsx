import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import ServiceDetails from './pages/ServiceDetails'
import Project from './pages/Project'
import ProjectDetails from './pages/ProjectDetails'
import Team from './pages/Team'
import TeamDetails from './pages/TeamDetails'
import News from './pages/News'
import NewsDetails from './pages/NewsDetails'
import NewsGrid from './pages/NewsGrid'
import Pricing from './pages/Pricing'
import Shop from './pages/Shop'
import ShopDetails from './pages/ShopDetails'
import ShopCart from './pages/ShopCart'
import ShopList from './pages/ShopList'
import Checkout from './pages/Checkout'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'
import Index2 from './pages/Index2'
import Index3 from './pages/Index3'
import Index4 from './pages/Index4'
import Index5 from './pages/Index5'
import Preloader from './components/layout/Preloader'

function App() {
  return (
    <>
      <Router>
        <Preloader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index-2" element={<Index2 />} />
          <Route path="/index-3" element={<Index3 />} />
          <Route path="/index-4" element={<Index4 />} />
          <Route path="/index-5" element={<Index5 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/news-details" element={<NewsDetails />} />
          <Route path="/news-grid" element={<NewsGrid />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-details" element={<ShopDetails />} />
          <Route path="/shop-cart" element={<ShopCart />} />
          <Route path="/shop-list" element={<ShopList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
