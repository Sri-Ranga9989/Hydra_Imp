import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'

interface ContactBoxProps {
  title: string
  phone: string
  email: string
  location: string
  timings: string
}

const ContactBox: React.FC<ContactBoxProps> = ({ title, phone, email, location, timings }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-blue-600 mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="flex items-start">
          <FaPhone className="mt-1 text-blue-500 mr-3" />
          <div>
            <p className="font-semibold">Phone</p>
            <p>{phone}</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaEnvelope className="mt-1 text-blue-500 mr-3" />
          <div>
            <p className="font-semibold">Email</p>
            <p>{email}</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaMapMarkerAlt className="mt-1 text-blue-500 mr-3" />
          <div>
            <p className="font-semibold">Location</p>
            <p>{location}</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaGlobe className="mt-1 text-blue-500 mr-3" />
          <div>
            <p className="font-semibold">Working Hours</p>
            <p>{timings}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  const wings = [
    {
      title: "Main Office - HYDRAA Headquarters",
      phone: "040-2988 0769",
      email: "commissionerhydraa@gmail.com",
      location: "7th Floor, Budha Bhavan, Ranigunj, Hyderabad - 500003",
      timings: "Monday to Saturday: 10:00 AM - 5:00 PM"
    },
    {
      title: "Fire Safety Wing",
      phone: "040-2988 0770",
      email: "firesafety.hydraa@gmail.com",
      location: "Ground Floor, Budha Bhavan, Ranigunj, Hyderabad - 500003",
      timings: "24/7 Emergency Response"
    },
    {
      title: "Disaster Response Wing",
      phone: "040-2988 0771",
      email: "disaster.hydraa@gmail.com",
      location: "6th Floor, Budha Bhavan, Ranigunj, Hyderabad - 500003",
      timings: "24/7 Emergency Response"
    },
    {
      title: "Asset Protection Wing",
      phone: "040-2988 0772",
      email: "asset.hydraa@gmail.com",
      location: "5th Floor, Budha Bhavan, Ranigunj, Hyderabad - 500003",
      timings: "Monday to Saturday: 10:00 AM - 5:00 PM"
    },
    {
      title: "Traffic Management Wing",
      phone: "040-2988 0773",
      email: "traffic.hydraa@gmail.com",
      location: "4th Floor, Budha Bhavan, Ranigunj, Hyderabad - 500003",
      timings: "24/7 Operations"
    },
    {
      title: "Advertisement Wing",
      phone: "040-2988 0774",
      email: "advertisement.hydraa@gmail.com",
      location: "3rd Floor, Budha Bhavan, Ranigunj, Hyderabad - 500003",
      timings: "Monday to Saturday: 10:00 AM - 5:00 PM"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        
        {/* Emergency Notice - Moved to top and enhanced */}
        <div className="mb-12 bg-red-50 border-2 border-red-300 rounded-lg p-8 text-center max-w-3xl mx-auto shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <FaPhone className="text-red-600 text-3xl mr-3" />
            <h2 className="text-3xl font-bold text-red-600">Emergency Contact</h2>
          </div>
          <p className="text-gray-700 text-lg mb-4">
            For immediate emergency assistance, our teams are available 24/7
          </p>
          <div className="bg-white rounded-lg p-4 inline-block shadow-md">
            <p className="text-3xl font-bold text-red-600">040-2988 0769</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Department Contacts</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Get in touch with our different wings for specific assistance. For emergencies, our disaster response and fire safety teams are available 24/7.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wings.map((wing, index) => (
            <ContactBox key={index} {...wing} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact 