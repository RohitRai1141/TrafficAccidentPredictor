import React, { useState } from 'react'
import MapView from '../components/MapView'
import RiskForm from '../components/RiskForm'
import PredictionResults from '../components/PredictionResults'

export default function Home() {
  const [risk, setRisk] = useState<number | undefined>(undefined)

  const handlePredict = (lat: number, lng: number) => {
    // For now, we'll use a mock prediction
    // In a real app, this would make an API call to your backend
    const mockRisk = Math.random()
    setRisk(mockRisk)
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MapView />
        </div>
        <div className="space-y-6">
          <RiskForm onPredict={handlePredict} />
          {risk !== undefined && <PredictionResults risk={risk} />}
        </div>
      </div>
    </main>
  )
}