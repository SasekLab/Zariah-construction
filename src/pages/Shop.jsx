import Preloader from '../components/layout/Preloader'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Shop() {
  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-lg text-gray-600">Shop page content - coming from original shop.html</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
