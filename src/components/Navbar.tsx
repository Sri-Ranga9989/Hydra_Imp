import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import hydraaLogo from '@/assets/logos/HYDRAA LOGO.jpeg'
import telanganaLogo from '@/assets/logos/telanganalogo.png'
import cmPhoto from '@/assets/images/CM_Photo-removebg-preview.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const serviceLinks = [
    { name: 'All Services', path: '/services' },
    { name: 'Apply for Fire NOC', path: '/services/fire-noc' }
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className={`transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Header */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={telanganaLogo}
                alt="Telangana Logo"
                className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-4">
              <div className="text-center">
                <h1 className={`font-bold text-gray-800 tracking-wide transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                  HYDERABAD DISASTER RESPONSE AND ASSET PROTECTION AGENCY
                </h1>
                <h2 className={`font-bold text-blue-600 mt-1 transition-all duration-300 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>HYDRAA</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src={cmPhoto}
                alt="Chief Minister Photo"
                className={`object-contain transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}
              />
              <img
                src={hydraaLogo}
                alt="Hydraa Logo"
                className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}
              />
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden">
            <div className="flex justify-between items-center">
              <img
                src={telanganaLogo}
                alt="Telangana Logo"
                className="h-14 sm:h-16"
              />
              <div className="text-center flex-1 px-2 sm:px-4">
                <h1 className="text-xs sm:text-sm font-bold text-gray-800 leading-tight tracking-wide">
                  HYDERABAD DISASTER RESPONSE AND
                </h1>
                <h1 className="text-xs sm:text-sm font-bold text-gray-800 leading-tight tracking-wide">
                  ASSET PROTECTION AGENCY
                </h1>
                <h2 className="text-lg sm:text-xl font-bold text-blue-600 mt-1">HYDRAA</h2>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={cmPhoto}
                  alt="Chief Minister Photo"
                  className="h-14 sm:h-16 object-contain"
                />
                <img
                  src={hydraaLogo}
                  alt="Hydraa Logo"
                  className="h-14 sm:h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center space-x-8 py-3">
            <Link 
              to="/" 
              className={`transition-colors py-2 ${
                isActive('/') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors py-2 ${
                isActive('/about') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
              }`}
            >
              About
            </Link>
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`transition-colors flex items-center py-2 ${
                  isActive('/services') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <svg 
                  className="ml-1 w-4 h-4 transition-transform duration-200 transform group-hover:rotate-180" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div 
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 z-50 ${
                  isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                      isActive(link.path) ? 'bg-blue-50 text-blue-600 font-semibold' : ''
                    }`}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/organisation-structure" 
              className={`transition-colors py-2 ${
                isActive('/organisation-structure') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
              }`}
            >
              Organisation Structure
            </Link>
            <Link 
              to="/asset-protection" 
              className={`transition-colors py-2 ${
                isActive('/asset-protection') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
              }`}
            >
              Asset Protection
            </Link>
            <Link 
              to="/disaster-response" 
              className={`transition-colors py-2 ${
                isActive('/disaster-response') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
              }`}
            >
              Disaster Response
            </Link>
            <Link 
              to="/traffic-management" 
              className={`transition-colors py-2 ${
                isActive('/traffic-management') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
              }`}
            >
              Traffic Management
            </Link>
            <Link 
              to="/advertisement" 
              className={`transition-colors py-2 ${
                isActive('/advertisement') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
              }`}
            >
              Advertisement Wing
            </Link>
            <Link 
              to="/news" 
              className={`transition-colors py-2 ${
                isActive('/news') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
              }`}
            >
              News
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors py-2 ${
                isActive('/contact') ? 'text-blue-100 font-semibold border-b-2 border-blue-100' : 'hover:text-blue-100'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full py-3 flex justify-center items-center"
              aria-label="Toggle menu"
            >
              <span className="mr-2">Menu</span>
              <svg
                className="h-5 w-5 transition-transform duration-200"
                style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <div className="flex flex-col items-center py-2 space-y-2 bg-blue-700">
                <Link
                  to="/"
                  className={`w-full text-center py-2 transition-colors ${
                    isActive('/') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`w-full text-center py-2 transition-colors ${
                    isActive('/about') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <div className="w-full">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full py-2 transition-colors ${
                      isActive('/services') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                    }`}
                  >
                    Services
                  </button>
                  {isServicesOpen && (
                    <div className="bg-blue-800">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={`block w-full text-center py-2 transition-colors ${
                            isActive(link.path) ? 'bg-blue-900 text-blue-100 font-semibold' : 'hover:bg-blue-900'
                          }`}
                          onClick={() => {
                            setIsServicesOpen(false)
                            setIsMenuOpen(false)
                          }}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  to="/organisation-structure"
                  className={`w-full text-center py-2 transition-colors ${
                    isActive('/organisation-structure') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Organisation Structure
                </Link>
                <Link
                  to="/asset-protection"
                  className={`w-full text-center py-2 transition-colors ${
                    isActive('/asset-protection') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Asset Protection
                </Link>
                <Link
                  to="/disaster-response"
                  className={`w-full text-center py-2 transition-colors ${
                    isActive('/disaster-response') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Disaster Response
                </Link>
                <Link
                  to="/traffic-management"
                  className={`w-full text-center py-2 transition-colors ${
                    isActive('/traffic-management') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Traffic Management
                </Link>
                <Link
                  to="/advertisement"
                  className={`w-full text-center py-2 transition-colors ${
                    isActive('/advertisement') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Advertisement Wing
                </Link>
                <Link
                  to="/news"
                  className={`w-full text-center py-2 transition-colors ${
                    isActive('/news') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                <Link
                  to="/contact"
                  className={`w-full text-center py-2 transition-colors ${
                    isActive('/contact') ? 'bg-blue-800 text-blue-100 font-semibold' : 'hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar 