import { Shield, AlertTriangle, Info } from 'lucide-react'

interface PredictionResultsProps {
  risk?: number
}

export default function PredictionResults({ risk = 0.75 }) {
  const getRiskLevel = (risk: number) => {
    if (risk >= 0.7) return { level: 'High', color: 'text-red-600', bg: 'bg-red-100' }
    if (risk >= 0.4) return { level: 'Medium', color: 'text-yellow-600', bg: 'bg-yellow-100' }
    return { level: 'Low', color: 'text-green-600', bg: 'bg-green-100' }
  }

  const { level, color, bg } = getRiskLevel(risk)

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Shield className="text-blue-600" />
          Risk Assessment
        </h2>
        <div className={`${bg} ${color} px-4 py-1 rounded-full flex items-center gap-2`}>
          <AlertTriangle size={16} />
          {level} Risk
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-sm font-semibold text-gray-700">
              Risk Percentage
            </div>
            <div className="text-sm font-semibold text-gray-700">
              {(risk * 100).toFixed(1)}%
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${risk * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-yellow-400 to-red-500"
            />
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold flex items-center gap-2 mb-2">
            <Info className="text-blue-600" />
            Safety Recommendations
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>Maintain increased vigilance in this area</li>
            <li>Follow traffic signals strictly</li>
            <li>Keep safe distance from other vehicles</li>
            <li>Consider alternative routes during peak hours</li>
          </ul>
        </div>
      </div>
    </div>
  )
}