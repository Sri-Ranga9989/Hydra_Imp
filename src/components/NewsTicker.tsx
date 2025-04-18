import { useState } from 'react'

const NewsTicker = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeUpdate, setActiveUpdate] = useState<number | null>(null)
  
  const updates = [
    {
      text: "HYDRAA successfully conducted disaster preparedness drill in Hyderabad Central Zone",
      link: "/news/disaster-preparedness-drill"
    },
    {
      text: "New emergency response vehicles added to HYDRAA fleet",
      link: "/news/new-vehicles"
    },
    {
      text: "HYDRAA team completes advanced fire safety training program",
      link: "/news/fire-safety-training"
    },
    {
      text: "24/7 emergency helpline now operational: 040-2988 0769",
      link: "/Contact"
    },
    {
      text: "HYDRAA launches mobile app for citizen reporting",
      link: "/news/mobile-app"
    }
  ]

  const handleUpdateClick = (index: number) => {
    setActiveUpdate(index)
    // You can add navigation logic here
    console.log(`Navigating to: ${updates[index].link}`)
  }

  return (
    <div 
      className="bg-blue-600 text-white py-3 shadow-lg relative z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="bg-red-500 text-white px-4 py-1.5 rounded-full mb-2 md:mb-0 md:mr-4 font-bold whitespace-nowrap shadow-md hover:bg-red-600 transition-colors duration-300">
            LIVE UPDATES
          </div>
          <div className="overflow-hidden flex-1 w-full relative">
            <div 
              className={`flex whitespace-nowrap ${
                isHovered ? 'animate-none' : 'animate-scroll'
              }`}
              style={{
                animation: isHovered ? 'none' : 'scroll 10s linear infinite',
              }}
            >
              {/* First copy of updates */}
              {updates.map((update, index) => (
                <span 
                  key={`first-${index}`}
                  className={`inline-block mr-8 cursor-pointer transition-all duration-300 ${
                    activeUpdate === index 
                      ? 'text-blue-100 font-semibold scale-105' 
                      : 'hover:text-blue-100'
                  }`}
                  onClick={() => handleUpdateClick(index)}
                >
                  {update.text}
                  {" • "}
                </span>
              ))}
              {/* Second copy of updates for seamless loop */}
              {updates.map((update, index) => (
                <span 
                  key={`second-${index}`}
                  className={`inline-block mr-8 cursor-pointer transition-all duration-300 ${
                    activeUpdate === index 
                      ? 'text-blue-100 font-semibold scale-105' 
                      : 'hover:text-blue-100'
                  }`}
                  onClick={() => handleUpdateClick(index)}
                >
                  {update.text}
                  {" • "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile touch indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 md:hidden"></div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default NewsTicker 