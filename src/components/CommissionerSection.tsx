import { useEffect, useRef } from 'react'

const CommissionerSection = () => {
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
    <div 
      ref={sectionRef}
      className="bg-white py-8 md:py-12 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
          <div className="w-full md:w-1/4 max-w-[250px] sm:max-w-[300px] mx-auto md:mx-0">
            <div className="aspect-[4/5] w-full relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <img 
                src="/src/assets/images/commissioner Full image.jpg" 
                alt="Commissioner HYDRAA" 
                className="absolute w-full h-full object-cover object-top transform transition-transform duration-700 hover:scale-105"
                style={{
                  objectPosition: '50% 10%'
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 text-center md:text-left">Commissioner's Message</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4 md:mb-6 text-center md:text-left">Hyderabad Disaster Response and Asset Protection Agency (HYDRAA)</h3>
            
            <div className="space-y-3 md:space-y-4 text-gray-700 text-justify">
              <p className="text-sm md:text-base">
                Hyderabad Disaster Response and Asset Protection Agency, a dedicated agency formed to protect what matters most: the lives, safety, and vital infrastructure of our beloved city.
              </p>
              
              <p className="text-sm md:text-base">
                At HYDRAA, our core mission is to ensure the safety and well-being of every citizen through proactive disaster preparedness, rapid emergency response, and strategic asset protection. In an era marked by increasing urban challenges ranging from natural calamities to critical infrastructure vulnerabilities. Our role has never been more vital.
              </p>
              
              <p className="text-sm md:text-base">
                We are equipped with cutting-edge technology, trained personnel, and a vision that combines resilience with responsibility. Whether it is responding to floods, fires, industrial hazards, or safeguarding public assets and critical infrastructure, HYDRAA stands ready around the clock to act swiftly and decisively.
              </p>
              
              <p className="text-sm md:text-base">
                But our commitment goes beyond emergency response. We strive to build a culture of safety, preparedness, and community involvement. Through awareness programs, drills, and partnerships with civic agencies and the public, we aim to empower every Hyderabadi to be an active participant in creating a safer urban ecosystem.
              </p>
              
              <p className="text-sm md:text-base">
                Together, let us strengthen our city's capacity to withstand challenges, bounce back stronger, and continue to thrive. HYDRAA is not just a response force. it is a promise of protection, preparedness, and progress.
              </p>
              
              <div className="mt-6 md:mt-8 text-center md:text-left">
                <p className="font-bold text-base md:text-lg">A.V. Ranganath, IPS.,</p>
                <p className="text-blue-600 text-base md:text-lg">Commissioner, HYDRAA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommissionerSection 