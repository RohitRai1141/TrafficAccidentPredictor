import { useState } from 'react'
import { MapPin, AlertCircle } from 'lucide-react'

interface RiskFormProps {
  onPredict: (lat: number, lng: number) => void;
}

export default function RiskForm({ onPredict }: RiskFormProps) {
  const [location, setLocation] = useState({ lat: '', lng: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const lat = parseFloat(location.lat)
    const lng = parseFloat(location.lng)

    if (isNaN(lat) || isNaN(lng)) {
      setError('Please enter valid latitude and longitude values')
      return
    }

    if (lat < -90 || lat > 90) {
      setError('Latitude must be between -90 and 90 degrees')
      return
    }

    if (lng < -180 || lng > 180) {
      setError('Longitude must be between -180 and 180 degrees')
      return
    }

    onPredict(lat, lng)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <MapPin className="text-blue-600" />
        Check Location Risk
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Latitude
            </label>
            <input
              type="text"
              value={location.lat}
              onChange={(e) => setLocation(prev => ({ ...prev, lat: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="40.7128"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Longitude
            </label>
            <input
              type="text"
              value={location.lng}
              onChange={(e) => setLocation(prev => ({ ...prev, lng: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="-74.0060"
            />
          </div>
        </div>
        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <AlertCircle size={20} />
          Predict Risk
        </button>
      </form>
    </div>
  )
}