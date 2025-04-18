import { useState, useEffect } from 'react'
import adImage1 from '../assets/Temp Advertisement/DJI_0267.JPG'
import adImage2 from '../assets/Temp Advertisement/DJI_0278.JPG'
import adImage3 from '../assets/Temp Advertisement/dji_fly_20250207_113906_0030_1738924216547_photo.JPG'
import adImage4 from '../assets/Temp Advertisement/dji_fly_20250207_115502_0040_1738924214548_photo.JPG'

const Advertisement = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const mediaItems = [
    { type: 'image', src: adImage1, alt: 'Advertisement Monitoring 1' },
    { type: 'image', src: adImage2, alt: 'Advertisement Monitoring 2' },
    { type: 'image', src: adImage3, alt: 'Advertisement Monitoring 3' },
    { type: 'image', src: adImage4, alt: 'Advertisement Monitoring 4' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [mediaItems.length])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Advertisement Wing</h1>

      {/* Main Content Sections */}
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Enforcement of Advertisement Regulations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            HYDRAA is authorized to take strict penal action against unauthorized advertisements and hoardings that violate the permissions granted by the concerned Urban Local Bodies (ULBs). This includes advertisements that deviate from approved specifications or are installed without valid authorization.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To ensure accuracy and transparency, HYDRAA operates using real-time databases shared by the respective ULBs. All enforcement actions in this regard are carried out under the legal framework of the relevant Acts, Rules, and Regulations governing the ULBs. While exercising these powers, HYDRAA authorities are deemed to be functioning under the jurisdiction and authority of the respective ULBs.
          </p>
        </div>

        {/* Advertisement Monitoring Media Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Advertisement Wing in Action</h2>
          
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 hidden'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto max-h-[400px] object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-3 space-x-2">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enforcement Process */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Enforcement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Monitoring & Detection</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Real-time database monitoring</li>
                <li>Regular field inspections</li>
                <li>Complaint verification</li>
                <li>Documentation of violations</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Action & Enforcement</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Notice issuance to violators</li>
                <li>Penalty assessment</li>
                <li>Removal of unauthorized installations</li>
                <li>Legal proceedings initiation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advertisement 