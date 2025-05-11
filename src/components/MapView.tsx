import { useEffect } from 'react'
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface RiskZone {
  lat: number
  lng: number
  risk: number
}

const mockRiskZones: RiskZone[] = [
  { lat: 13.0827, lng: 80.2707, risk: 0.8 }, // Chennai
  { lat: 11.0168, lng: 76.9558, risk: 0.6 }, // Coimbatore
  { lat: 9.9252, lng: 78.1198, risk: 0.9 }   // Madurai
]

export default function MapView() {
  useEffect(() => {
    // Fix for Leaflet icon issues in production
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    })
  }, [])

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[11.1271, 78.6569]} // Tamil Nadu center coordinates
        zoom={7} // Adjusted zoom level to show more of Tamil Nadu
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {mockRiskZones.map((zone, index) => (
          <Circle
            key={index}
            center={[zone.lat, zone.lng]}
            radius={5000} // Adjusted radius for better visibility at state level
            pathOptions={{
              color: `rgb(${255 * zone.risk}, ${255 * (1 - zone.risk)}, 0)`,
              fillColor: `rgb(${255 * zone.risk}, ${255 * (1 - zone.risk)}, 0)`,
              fillOpacity: 0.5
            }}
          />
        ))}
      </MapContainer>
    </div>
  )
}