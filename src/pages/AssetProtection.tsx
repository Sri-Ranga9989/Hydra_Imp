import React from 'react'
import assetProtectionMap from '../assets/images/Asset-Protection-Map.jpg'
import lakeVideo from '../assets/Temp Asset/WhatsApp Video 2025-04-14 at 20.58.21.mp4'
import AssetProtectionCarousel from '../components/AssetProtectionCarousel'

const AssetProtection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Asset Protection</h1>

      {/* Main Content Sections */}
      <div className="space-y-8 mb-12">
        {/* Protection of Assets Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Protection of Government and Local Body Assets</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HYDRAA is responsible for safeguarding the assets of Local Bodies and Government entities—such as parks, designated layout open spaces, playgrounds, lakes, nalas (drains), land parcels, roads, carriageways, and footpaths—from encroachments and unauthorized occupation.
          </p>
          
          {/* Asset Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              { title: 'Government Lands', icon: '🏛️' },
              { title: 'Parks', icon: '🌳' },
              { title: 'Open Spaces', icon: '🌲' },
              { title: 'Community / Society Places', icon: '🏘️' },
              { title: 'Lakes Protection', icon: '💧' },
              { title: 'Lakes Rejuvenation', icon: '🌊' },
              { title: 'Nalas Protection', icon: '🌊' },
              { title: 'FTL Demarcation', icon: '📏' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-blue-800">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Asset Protection Activities Carousel */}
        <AssetProtectionCarousel />

        {/* Video Section - Moved here */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Lake Rejuvenation</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
              <video 
                className="w-full h-auto"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster={assetProtectionMap}
              >
                <source src={lakeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="text-gray-600 text-center mt-4">
            Watch how HYDRAA contributes to lake rejuvenation efforts across the region.
          </p>
        </div>

        {/* Lake Encroachments Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Removal of Lake Encroachments</h2>
          <p className="text-gray-700 leading-relaxed">
            In coordination with GHMC, HMDA, local bodies, the Irrigation Department, the Revenue Department, and other relevant agencies, HYDRAA undertakes the removal of encroachments affecting lakes and water bodies.
          </p>
        </div>

        {/* Know Your Lakes Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Know Your Lakes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Explore comprehensive information about lakes in the Hyderabad Metropolitan Development Authority (HMDA) region.
          </p>
          <a 
            href="https://lakes.hmda.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Visit HMDA Lakes Portal
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Inspection Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Inspection of Private Premises for Regulatory Compliance</h2>
          <p className="text-gray-700 leading-relaxed">
            Upon receiving requests from Urban Local Bodies (ULBs), Urban Development Authorities (UDAs), or planning authorities, HYDRAA is empowered to inspect private premises for violations of building and town planning regulations. It also acts in cases involving dilapidated structures that pose a threat to public safety. While performing these duties, HYDRAA officials are deemed to be operating under the jurisdiction of the concerned ULBs, UDAs, and planning authorities, in accordance with their respective Acts, Rules, and Regulations.
          </p>
        </div>
      </div>

      {/* Asset Protection Map Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Asset Protection Jurisdiction Map</h2>
        <div className="flex flex-col items-center">
          <img 
            src={assetProtectionMap} 
            alt="HYDRAA Asset Protection Units Map" 
            className="w-full max-w-4xl rounded-lg shadow-md mb-6"
          />
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">Cyberabad - 7 Units</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Madhapur</li>
                  <li>Gachibowli</li>
                  <li>Kukatpally</li>
                  <li>Balanagar - Medical</li>
                  <li>Rajendranagar - Nursing</li>
                  <li>Shamshabad</li>
                  <li>Patancheru</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">Hyderabad - 4 Units</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Hyderabad West</li>
                  <li>Hyderabad North East</li>
                  <li>Hyderabad Central</li>
                  <li>Hyderabad South</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">Rachakonda - 4 Units</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Malkajgiri</li>
                  <li>Saroornagar</li>
                  <li>Bhongir-Yadadri</li>
                  <li>Pahadi Shareef - Adibatla</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetProtection 