import React from 'react'
import { Info, Shield, Brain, Bell, Map, Database } from 'lucide-react'

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Info className="text-blue-600" />
              About Traffic Accident Predictor
            </h1>
            <p className="text-gray-600 text-lg">
              An advanced system using machine learning to predict and prevent traffic accidents
              in real-time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="p-6 border rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="text-purple-600" size={24} />
                <h2 className="text-xl font-semibold">AI-Powered Predictions</h2>
              </div>
              <p className="text-gray-600">
                Utilizing state-of-the-art machine learning models to analyze traffic patterns,
                weather conditions, and historical data for accurate risk assessment.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Map className="text-green-600" size={24} />
                <h2 className="text-xl font-semibold">Real-time Monitoring</h2>
              </div>
              <p className="text-gray-600">
                Interactive maps showing live traffic conditions and risk zones, helping users
                make informed decisions about their routes.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="text-red-600" size={24} />
                <h2 className="text-xl font-semibold">Early Warning System</h2>
              </div>
              <p className="text-gray-600">
                Proactive alerts for high-risk areas and dangerous conditions, enabling
                preventive measures before incidents occur.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Database className="text-blue-600" size={24} />
                <h2 className="text-xl font-semibold">Data-Driven Insights</h2>
              </div>
              <p className="text-gray-600">
                Comprehensive analysis of accident patterns and risk factors to provide
                actionable safety recommendations.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We're committed to making roads safer for everyone by leveraging advanced
              technology and data analytics. Our goal is to prevent accidents before they
              happen by providing timely, accurate risk assessments and actionable safety
              recommendations to drivers, city planners, and emergency responders.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}