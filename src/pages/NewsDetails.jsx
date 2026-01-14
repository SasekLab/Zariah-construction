import Preloader from '../components/layout/Preloader'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function NewsDetails() {
  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Details</h1>
          <p className="text-lg text-gray-600">Blog details page - coming from original news-details.html</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
