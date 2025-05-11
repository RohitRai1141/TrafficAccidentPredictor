import React, { useState } from 'react'
import { Bell, MapPin, Calendar, ArrowRight, X, Settings, AlertTriangle } from 'lucide-react'

interface Alert {
  id: string
  location: string
  riskLevel: 'High' | 'Medium' | 'Low'
  timestamp: string
  description: string
  details?: {
    weatherCondition: string
    trafficDensity: string
    historicalIncidents: number
    recommendations: string[]
  }
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    location: 'Chennai, Marina Beach Road',
    riskLevel: 'High',
    timestamp: '2024-03-20 08:30 AM',
    description: 'Heavy traffic congestion with adverse weather conditions',
    details: {
      weatherCondition: 'Heavy Rain',
      trafficDensity: 'Very High',
      historicalIncidents: 12,
      recommendations: [
        'Avoid route if possible',
        'Maintain safe distance',
        'Use hazard lights in heavy rain',
        'Reduce speed significantly'
      ]
    }
  },
  {
    id: '2',
    location: 'Coimbatore, Avinashi Road',
    riskLevel: 'Medium',
    timestamp: '2024-03-20 09:15 AM',
    description: 'Increased pedestrian activity during rush hour',
    details: {
      weatherCondition: 'Clear',
      trafficDensity: 'Medium',
      historicalIncidents: 5,
      recommendations: [
        'Watch for pedestrians',
        'Follow traffic signals strictly',
        'Reduce speed in crowded areas'
      ]
    }
  },
  {
    id: '3',
    location: 'Madurai, Pantheon Road',
    riskLevel: 'High',
    timestamp: '2024-03-20 10:00 AM',
    description: 'Construction work causing unusual traffic patterns',
    details: {
      weatherCondition: 'Sunny',
      trafficDensity: 'High',
      historicalIncidents: 8,
      recommendations: [
        'Follow diversion signs',
        'Be aware of construction vehicles',
        'Expect delays',
        'Consider alternative routes'
      ]
    }
  }
]

const getRiskColor = (level: string) => {
  switch (level) {
    case 'High':
      return 'bg-red-100 text-red-800'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800'
    case 'Low':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

interface AlertDetailsModalProps {
  alert: Alert
  onClose: () => void
}

const AlertDetailsModal: React.FC<AlertDetailsModalProps> = ({ alert, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Alert Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="text-gray-500" />
              <span className="font-semibold">{alert.location}</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(alert.riskLevel)}`}>
              {alert.riskLevel} Risk
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Weather</h3>
              <p>{alert.details?.weatherCondition}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Traffic Density</h3>
              <p>{alert.details?.trafficDensity}</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Safety Recommendations</h3>
            <ul className="list-disc list-inside space-y-1">
              {alert.details?.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Historical Data</h3>
            <p>{alert.details?.historicalIncidents} incidents reported in this area recently</p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ConfigureAlertsModalProps {
  onClose: () => void
}

const ConfigureAlertsModal: React.FC<ConfigureAlertsModalProps> = ({ onClose }) => {
  const [settings, setSettings] = useState({
    riskLevels: {
      high: true,
      medium: true,
      low: false
    },
    radius: 5,
    notifications: true
  })

  const handleSave = () => {
    // In a real app, this would save to backend/localStorage
    console.log('Saving settings:', settings)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Settings className="text-blue-600" />
            Alert Settings
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Risk Level Notifications</h3>
            <div className="space-y-2">
              {Object.entries(settings.riskLevels).map(([level, enabled]) => (
                <label key={level} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      riskLevels: {
                        ...prev.riskLevels,
                        [level]: e.target.checked
                      }
                    }))}
                    className="rounded text-blue-600"
                  />
                  <span className="capitalize">{level} Risk</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Monitoring Radius (km)</h3>
            <input
              type="range"
              min="1"
              max="10"
              value={settings.radius}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                radius: parseInt(e.target.value)
              }))}
              className="w-full"
            />
            <div className="text-sm text-gray-600 mt-1">{settings.radius} kilometers</div>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  notifications: e.target.checked
                }))}
                className="rounded text-blue-600"
              />
              <span>Enable Push Notifications</span>
            </label>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Alerts() {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null)
  const [showConfig, setShowConfig] = useState(false)

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Bell className="text-blue-600" />
            Active Alerts
          </h1>
          <button
            onClick={() => setShowConfig(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Settings size={20} />
            Configure Alerts
          </button>
        </div>

        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div key={alert.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gray-500" />
                  <span className="font-semibold">{alert.location}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(alert.riskLevel)}`}>
                  {alert.riskLevel} Risk
                </span>
              </div>
              <p className="text-gray-600 mb-2">{alert.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {alert.timestamp}
                </div>
                <button
                  onClick={() => setSelectedAlert(alert)}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAlert && (
        <AlertDetailsModal
          alert={selectedAlert}
          onClose={() => setSelectedAlert(null)}
        />
      )}

      {showConfig && (
        <ConfigureAlertsModal
          onClose={() => setShowConfig(false)}
        />
      )}
    </main>
  )
}