import React from 'react'

const FireNOC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Apply for Fire Service NOC</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <form className="space-y-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your address"
                />
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="propertyType">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select property type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="institutional">Institutional</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="propertyArea">
                  Property Area (sq ft)
                </label>
                <input
                  type="number"
                  id="propertyArea"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter property area"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="floors">
                  Number of Floors
                </label>
                <input
                  type="number"
                  id="floors"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter number of floors"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="propertyAddress">
                  Property Address
                </label>
                <textarea
                  id="propertyAddress"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter property address"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Required Documents</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="buildingPlan">
                  Building Plan
                </label>
                <input
                  type="file"
                  id="buildingPlan"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="ownership">
                  Ownership Document
                </label>
                <input
                  type="file"
                  id="ownership"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FireNOC 