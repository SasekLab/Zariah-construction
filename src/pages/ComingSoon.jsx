import Preloader from '../components/layout/Preloader'

export default function ComingSoon() {
  return (
    <div className="page-wrapper">
      <Preloader />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-lg text-gray-600">This page is under construction</p>
        </div>
      </main>
    </div>
  )
}
