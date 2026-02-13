import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'
import Preloader from './components/layout/Preloader'

// Lazy load all other pages
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Service = lazy(() => import('./pages/Service'))
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'))
const Project = lazy(() => import('./pages/Project'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const Team = lazy(() => import('./pages/Team'))
const TeamDetails = lazy(() => import('./pages/TeamDetails'))
const News = lazy(() => import('./pages/News'))
const NewsDetails = lazy(() => import('./pages/NewsDetails'))
const NewsGrid = lazy(() => import('./pages/NewsGrid'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Shop = lazy(() => import('./pages/Shop'))
const ShopDetails = lazy(() => import('./pages/ShopDetails'))
const ShopCart = lazy(() => import('./pages/ShopCart'))
const ShopList = lazy(() => import('./pages/ShopList'))
const Checkout = lazy(() => import('./pages/Checkout'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Index2 = lazy(() => import('./pages/Index2'))
const Index3 = lazy(() => import('./pages/Index3'))
const Index4 = lazy(() => import('./pages/Index4'))
const Index5 = lazy(() => import('./pages/Index5'))

function App() {
  return (
    <>
      <Router>
        <Preloader />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
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
        </Suspense>
      </Router>
    </>
  )
}

export default App
