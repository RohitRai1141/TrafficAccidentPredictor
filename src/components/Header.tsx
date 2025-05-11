import { AlertTriangle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
  }

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <AlertTriangle size={32} className="text-yellow-300" />
          <h1 className="text-2xl font-bold">Traffic Accident Predictor</h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className={`transition-colors ${isActive('/')}`}>
            Dashboard
          </Link>
          <Link to="/alerts" className={`transition-colors ${isActive('/alerts')}`}>
            Alerts
          </Link>
          <Link to="/about" className={`transition-colors ${isActive('/about')}`}>
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}