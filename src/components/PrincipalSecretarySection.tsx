import { useEffect, useRef } from 'react'
import danaKishorePhoto from '../assets/images/Dana kishore2.jpg'

const PrincipalSecretarySection = () => {
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
      aria-labelledby="ps-message-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
          <div className="w-full md:w-1/4 max-w-[250px] sm:max-w-[300px] mx-auto md:mx-0">
            <div className="aspect-[4/5] w-full relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <img 
                src={danaKishorePhoto}
                alt="Sri Dana Kishore, IAS, Principal Secretary to Government" 
                className="absolute w-full h-full object-cover object-top transform transition-transform duration-700 hover:scale-105"
                style={{
                  objectPosition: '50% 10%'
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 id="ps-message-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 text-center md:text-left">Principal Secretary's Message</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4 md:mb-6 text-center md:text-left">Municipal Administration & Urban Development Department</h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6 text-center md:text-left">Government of Telangana</h4>
            
            <div className="space-y-3 md:space-y-4 text-gray-700 text-justify">
              <p className="text-sm md:text-base">
                It gives me immense pride to acknowledge the pivotal role played by the Hyderabad Disaster Response and Asset Protection Agency (HYDRAA) in safeguarding our city and its people. As urban landscapes rapidly evolve, the challenges we face—natural disasters, environmental hazards, and infrastructure vulnerabilities—demand a proactive, coordinated, and resilient approach.
              </p>
              
              <p className="text-sm md:text-base">
                HYDRAA stands as a beacon of our commitment to citizen safety, asset protection, and swift emergency response. The agency's dedication, agility, and use of innovative strategies have significantly enhanced Hyderabad's disaster preparedness and mitigation capabilities. From urban flooding response to building collapses, from fire safety to climate resilience, HYDRAA's presence reassures every citizen that help is not only near but also effective.
              </p>
              
              <p className="text-sm md:text-base">
                I extend my deepest appreciation to the officers and personnel of HYDRAA who work tirelessly, often risking their own safety, to protect lives and property. I urge every department and citizen to continue their support and cooperation with HYDRAA, as we move towards a safer, more resilient Hyderabad.
              </p>
              
              <p className="text-sm md:text-base">
                Together, let us build a city that is not only smart and sustainable but also secure and prepared for any challenge.
              </p>
              
              <div className="mt-6 md:mt-8 text-center md:text-left">
                <p className="font-bold text-base md:text-lg">Jai Hind.</p>
                <p className="font-bold text-base md:text-lg mt-4">M. Dana Kishore, IAS.,</p>
                <p className="text-blue-600 text-base md:text-lg">Principal Secretary (MA & UD) to Government of Telangana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipalSecretarySection 