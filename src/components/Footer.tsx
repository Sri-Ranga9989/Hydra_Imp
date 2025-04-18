import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-200" />
                <a href="tel:040-2988 0769" className="hover:text-blue-200 transition-colors">
                  040-2988 0769
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-200" />
                <a href="mailto:commissionerhydraa@gmail.com" className="hover:text-blue-200 transition-colors">
                  commissionerhydraa@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-blue-200" />
                <span className="hover:text-blue-200 transition-colors">
                  HYDRAA Office,
                  7th Floor, Budha Bhavan, Ranigunj, 
                  Hyderabad, Telangana - 500003
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-200 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-200 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/organisation-structure" className="hover:text-blue-200 transition-colors">Organisation Structure</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Our Major Functions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/asset-protection" className="hover:text-blue-200 transition-colors">Asset Protection</Link>
              </li>
              <li>
                <Link to="/disaster-response" className="hover:text-blue-200 transition-colors">Disaster Response</Link>
              </li>
              <li>
                <Link to="/traffic-management" className="hover:text-blue-200 transition-colors">Traffic Management</Link>
              </li>
              <li>
                <Link to="/advertisement" className="hover:text-blue-200 transition-colors">Advertisement</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-blue-200 transition-colors transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-500 mt-8 pt-8 text-center">
          <p className="text-blue-100 text-sm md:text-base">
            © {new Date().getFullYear()} HYDRAA - Hyderabad Disaster Response and Asset Administration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 