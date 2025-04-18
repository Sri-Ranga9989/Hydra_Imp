import React from 'react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Apply for Fire Service NOC"
            description="Apply for Fire Safety NOC for your property. Get your building certified for fire safety compliance."
            link="/services/fire-noc"
          />
          {/* Add other service cards here */}
        </div>
      </div>
    </div>
  )
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

export default Services 