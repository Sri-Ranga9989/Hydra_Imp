import React, { useEffect, useRef } from 'react'
import cmPhoto from '../assets/images/CM Photo.jpeg'

const ChiefMinisterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-8 md:py-12 opacity-0 transition-opacity duration-1000"
      aria-labelledby="cm-message-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
          <div className="w-full md:w-1/4 max-w-[250px] sm:max-w-[300px] mx-auto md:mx-0">
            <div className="aspect-[4/5] w-full relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <img 
                src={cmPhoto}
                alt="Anumula Revanth Reddy, Chief Minister of Telangana" 
                className="absolute w-full h-full object-cover object-top transform transition-transform duration-700 hover:scale-105"
                style={{
                  objectPosition: '50% 10%'
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 id="cm-message-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 text-center md:text-left">Chief Minister's Message</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4 md:mb-6 text-center md:text-left">Hyderabad Disaster Response and Asset Protection Agency (HYDRAA)</h3>
            
            <div className="space-y-3 md:space-y-4 text-gray-700 text-justify">
              <p className="text-sm md:text-base">
                In recent years, the city of Hyderabad has witnessed unprecedented growth in infrastructure, population, and technological advancement. With this progress comes the critical responsibility of ensuring the safety, security, and well-being of every citizen. In this regard, the establishment of the Hyderabad Disaster Response and Asset Protection Agency (HYDRAA) marks a significant step forward in our commitment to building a resilient and secure urban environment.
              </p>
              
              <p className="text-sm md:text-base">
                HYDRAA has been envisioned as a dedicated agency to proactively respond to emergencies, mitigate disaster risks, and safeguard public and private assets. From natural calamities such as floods and fire accidents to man-made incidents that may threaten public safety, HYDRAA will serve as the first line of defense. It will operate with advanced technologies, a highly trained workforce, and an integrated command structure to ensure rapid and effective response at all times.
              </p>
              
              <p className="text-sm md:text-base">
                This initiative is not just about disaster management. It is about instilling a culture of preparedness, resilience, and accountability. It will also focus on awareness campaigns, community participation, and coordination with local bodies to create a safer Hyderabad for all.
              </p>
              
              <p className="text-sm md:text-base">
                I urge citizens to extend their support to HYDRAA and actively participate in building a city that is not only smart and sustainable but also secure and disaster-resilient.
              </p>
              
              <p className="text-sm md:text-base font-semibold">
                Together, let us work towards a safer Hyderabad.
              </p>
              
              <div className="mt-6 md:mt-8 text-center md:text-left">
                <p className="font-bold text-base md:text-lg">Anumula Revanth Reddy,</p>
                <p className="text-blue-600 text-base md:text-lg">Chief Minister, Telangana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChiefMinisterSection 