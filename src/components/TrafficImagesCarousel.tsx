import React, { useState, useEffect } from 'react'
import trafficImage1 from '../assets/Temp traffic/a1.jpg'
import trafficImage2 from '../assets/Temp traffic/a2.jpg'
import trafficImage3 from '../assets/Temp traffic/a3.jpg'

const TrafficImagesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const mediaItems = [
    { src: trafficImage1, alt: 'HYDRAA Traffic Management - Activity 1' },
    { src: trafficImage2, alt: 'HYDRAA Traffic Management - Activity 2' },
    { src: trafficImage3, alt: 'HYDRAA Traffic Management - Activity 3' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [mediaItems.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
    }
    if (touchEnd - touchStart > 50) {
      setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {mediaItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrafficImagesCarousel 