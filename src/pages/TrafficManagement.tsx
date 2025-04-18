import React from 'react'
import TrafficImagesCarousel from '../components/TrafficImagesCarousel'

const TrafficManagement = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Traffic Management</h1>

      {/* Main Content Sections */}
      <div className="space-y-8">
        {/* HYDRAA Traffic Volunteers Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">HYDRAA Traffic Volunteers Initiative</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HYDRAA DRF personnel are set to assist traffic police under the new "Hydra Traffic Volunteers" initiative. In the first phase, 50 members received training at the Traffic Training Institute in Goshamahal to learn traffic management skills.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            These volunteers, wearing reflective jackets with the name "HYDRAA Traffic Volunteers," will support the police at key junctions and congested areas during peak hours and special situations. HYDRAA Commissioner AV Ranganath stated that during non-emergency periods, such as when there are no natural calamities, these volunteers will focus on aiding traffic control.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Training & Deployment</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>50 DRF personnel trained at Traffic Training Institute</li>
                <li>Specialized traffic management skills</li>
                <li>Deployment at key junctions and congested areas</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Volunteer Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Support during peak hours</li>
                <li>Assist in special situations</li>
                <li>Focus on traffic control during non-emergency periods</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Traffic Images Carousel */}
        <TrafficImagesCarousel />

        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Traffic Coordination and Management</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HYDRAA plays a crucial role in ensuring smooth and safe traffic flow, particularly during emergency and disaster situations. In collaboration with the Traffic Police Department, HYDRAA and its designated officers actively coordinate traffic management operations, especially in challenging scenarios caused by natural or man-made disruptions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A key focus is on addressing traffic congestion during heavy rains, particularly in waterlogged zones, road-damaged areas, disaster-prone regions, and locations impacted by overflowing stormwater drains or related hazards. HYDRAA teams work in real time to identify affected routes, deploy resources, assist in traffic redirection, and ensure emergency vehicle access.
          </p>
        </div>

        {/* Integration Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Integration Benefits</h2>
          <p className="text-gray-700 leading-relaxed">
            By integrating disaster response with traffic regulation, HYDRAA enhances the city's resilience and ability to recover quickly during high-stress scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Real-Time Response</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Immediate identification of affected routes</li>
                <li>Quick deployment of resources</li>
                <li>Efficient traffic redirection</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Emergency Management</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Priority access for emergency vehicles</li>
                <li>Coordination with Traffic Police</li>
                <li>Rapid response to changing conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrafficManagement 