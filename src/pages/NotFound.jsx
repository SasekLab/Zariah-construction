import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-wrapper min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gt-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">The page you are looking for doesn't exist.</p>
        <Link to="/" className="gt-theme-btn">
          <span className="gt-text-btn">
            <span className="gt-text-2">Go Home <i className="fa-solid fa-arrow-right"></i></span>
          </span>
        </Link>
      </div>
    </div>
  )
}
