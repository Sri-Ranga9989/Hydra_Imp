import { useState, useEffect } from 'react'
import IMG1 from '../assets/common/IMG1.jpg'
import IMG2 from '../assets/common/IMG2.jpg'
import IMG3 from '../assets/common/IMG3.jpg'
import IMG4 from '../assets/common/IMG4.JPG'
import IMG5 from '../assets/common/IMG5.jpg'
import IMG6 from '../assets/common/IMG6.JPG'
import IMG7 from '../assets/common/IMG7.JPG'
import IMG8 from '../assets/common/IMG8.JPG'
import DSC_3016 from '../assets/common/DSC_3016.JPG'
import DSC_3029 from '../assets/common/DSC_3029.JPG'

const AssetProtectionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const mediaItems = [
    { type: 'image', src: IMG1, alt: 'HYDRAA Parjavani ' },
    { type: 'image', src: IMG2, alt: 'HYDRAA Parjavani ' },
    { type: 'image', src: IMG3, alt: 'HYDRAA Parjavani ' },
    { type: 'image', src: IMG4, alt: 'Field Inspection ' },
    { type: 'image', src: IMG5, alt: 'Field Inspection ' },
    { type: 'image', src: IMG6, alt: 'Field Inspection ' },
    { type: 'image', src: IMG7, alt: 'Field Inspection ' },
    { type: 'image', src: IMG8, alt: 'Field Inspection ' },
    { type: 'image', src: DSC_3016, alt: 'HYDRAA Collaborating with GHMC ' },
    { type: 'image', src: DSC_3029, alt: 'HYDRAA Collaborating with GHMC ' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [mediaItems.length])

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Asset Protection Activities</h2>
      
      <div className="relative w-full max-w-4xl mx-auto">
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
                className="w-full h-auto max-h-[500px] object-cover"
              />
              <div className="bg-gray-50 p-4 text-center">
                <p className="text-lg font-semibold text-blue-600">{item.alt}</p>
              </div>
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
  )
}

export default AssetProtectionCarousel 