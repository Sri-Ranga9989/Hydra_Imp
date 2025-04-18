import { useState, useEffect } from 'react'
import disasterManagementMap from '../assets/images/Disaster-Management-Map.jpg'
import disasterImage1 from '../assets/Temp Disaster/WhatsApp Image 2025-04-10 at 13.45.57.jpeg'
import disasterImage2 from '../assets/Temp Disaster/WhatsApp Image 2025-04-10 at 13.40.20.jpeg'
import disasterImage3 from '../assets/Temp Disaster/WhatsApp Image 2025-04-10 at 13.49.22.jpeg'
import disasterVideo from '../assets/Temp Disaster/WhatsApp Video 2025-04-14 at 13.33.14.mp4'

const DisasterResponse = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const mediaItems = [
    { type: 'image', src: disasterImage2, alt: 'Disaster Response Operation 2' },
    { type: 'image', src: disasterImage3, alt: 'Disaster Response Operation 3' },
    { type: 'video', src: disasterVideo, alt: 'Disaster Response Video' },
    { type: 'image', src: disasterImage1, alt: 'Disaster Response Operation 1' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isVideoPlaying) {
        setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
      }
    }, 2500)

    return () => clearInterval(timer)
  }, [isVideoPlaying, mediaItems.length])

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleVideoEnd = () => {
    setIsVideoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Disaster Response</h1>

      {/* Main Content Sections */}
      <div className="space-y-8 mb-12">
        {/* Emergency Response Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Emergency Response by Disaster Response Force (DRF)</h2>
          <p className="text-gray-700 leading-relaxed">
            HYDRAA's Disaster Response Force (DRF) undertakes immediate disaster response and relief operations during any emergency or disaster situation within its jurisdiction.
          </p>
        </div>

        {/* Disaster Response Media Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Disaster Response in Action</h2>
          
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 hidden'
                  }`}
                >
                  {item.type === 'video' ? (
                    <video
                      className="w-full h-auto max-h-[400px]"
                      controls
                      autoPlay={index === currentSlide}
                      muted
                      onPlay={handleVideoPlay}
                      onEnded={handleVideoEnd}
                      playsInline
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto max-h-[400px] object-cover"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-3 space-x-2">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsVideoPlaying(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Coordination Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Coordination with National and State Disaster Agencies</h2>
          <p className="text-gray-700 leading-relaxed">
            HYDRAA coordinates closely with the National Disaster Response Force (NDRF), State Disaster Management Authority (SDMA), and the Telangana Disaster Response & Fire Services (TG DR&FS) Department, along with other State and National disaster management agencies.
          </p>
        </div>

        {/* Technical Agencies Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Liaison with Technical Forecasting Agencies</h2>
          <p className="text-gray-700 leading-relaxed">
            HYDRAA works in collaboration with technical agencies such as the Indian Meteorological Department (IMD) and the National Remote Sensing Agency (NRSA) to receive early warnings. It ensures that timely alerts and forewarnings are communicated to all relevant line departments.
          </p>
        </div>

        {/* Multi-Agency Coordination Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Multi-Agency Coordination for Emergency Management</h2>
          <p className="text-gray-700 leading-relaxed">
            In times of crisis, HYDRAA coordinates with all concerned departments including the Police, GHMC, local bodies, HMWS&SB, HMDA, HMR, HGCL, MRDCL, TGSPDCL, Forest Department, Urban Bio-Diversity (UBD), and the Irrigation Department to manage various types of emergencies effectively.
          </p>

        </div>

        {/* Risk Management Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Risk Data Management and Future Assessment</h2>
          <p className="text-gray-700 leading-relaxed">
            HYDRAA maintains a dedicated database to collect and consolidate disaster-related information, which is used for risk assessment, pattern analysis, and future disaster risk prediction.
          </p>
        </div>

        {/* Fire Safety Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Fire Safety Compliance and Certification</h2>
          <p className="text-gray-700 leading-relaxed">
            HYDRAA is also entrusted with the inspection of premises and issuance of Fire No Objection Certificates (NOCs), as authorized by the Director General of the Disaster Response & Fire Services under the provisions of the Telangana Fire Services Act, 1999.
          </p>
        </div>
      </div>

      {/* Disaster Management Map Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Disaster Management Coverage Map</h2>
        <div className="flex flex-col items-center">
          <img 
            src={disasterManagementMap} 
            alt="HYDRAA Disaster Management Coverage Map" 
            className="w-full max-w-4xl rounded-lg shadow-md mb-6"
          />
        </div>
      </div>

      {/* DRF Teams Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">DRF Team Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { team: "01", circle: "01", location: "ECIL" },
            { team: "02", circle: "02", location: "UPPAL" },
            { team: "03", circle: "03", location: "VANASTHALIPURAM" },
            { team: "04", circle: "04", location: "LB NAGAR" },
            { team: "05", circle: "05", location: "SAROOR NAGAR" },
            { team: "06", circle: "06", location: "MALAKPET" },
            { team: "07", circle: "07", location: "SANTOSH NAGAR" },
            { team: "08", circle: "08", location: "CHANDRAYANAGUTTA" },
            { team: "09", circle: "09", location: "CHARMINAR" },
            { team: "10", circle: "10", location: "FALAKNUMA" },
            { team: "11", circle: "11", location: "RAJENDRANAGAR" },
            { team: "12", circle: "12", location: "GUDIMALKAPUR" },
            { team: "13", circle: "13", location: "KARWAN" },
            { team: "14", circle: "14", location: "ASSEMBLY" },
            { team: "15", circle: "15", location: "NTR STADIUM" },
            { team: "16", circle: "16", location: "AMBERPET" },
            { team: "17", circle: "17", location: "RAJBHAVAN" },
            { team: "18", circle: "18", location: "KBR PARK" },
            { team: "19", circle: "19", location: "KRISHNA KANTH PARK" },
            { team: "20", circle: "20", location: "BIODIVERSITY" },
            { team: "21", circle: "21", location: "SHILPARAMAM" },
            { team: "22", circle: "22", location: "BHEL X ROAD" },
            { team: "23", circle: "23", location: "NEXUSMALL" },
            { team: "24", circle: "24", location: "KUKATPALLY Y JUNCTION" },
            { team: "25", circle: "25", location: "SUCHITRA" },
            { team: "26", circle: "26", location: "GAJULRAMARAM" },
            { team: "27", circle: "27", location: "ALWAL" },
            { team: "28", circle: "28", location: "MALKAJGIRI" },
            { team: "29", circle: "29", location: "FATHULLAGUDA" },
            { team: "30", circle: "30", location: "CM CAMP OFFICE" }
          ].map((team, index) => (
            <div 
              key={index}
              className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  {team.team}
                </div>
                <div>
                  <div className="text-sm text-gray-600">Circle {team.circle}</div>
                  <div className="font-semibold text-blue-800">{team.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DisasterResponse 