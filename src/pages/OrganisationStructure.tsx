import React from 'react'

const OrganisationStructure = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Organisation Structure</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center">
            {/* Commissioner Level */}
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md w-64 text-center mb-8">
              <h2 className="font-bold">Commissioner, HYDRAA</h2>
            </div>

            {/* Additional Commissioners Level */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-8 w-full">
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-sm">Addl. Commissioner, Hyderabad</h3>
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-sm">Addl. Commissioner, Cyberabad</h3>
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-sm">Addl. Commissioner, Rachakonda</h3>
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-sm">Addl. Commissioner, Administration</h3>
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-sm">Addl. Director (FIRE)</h3>
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-sm">HYDRAA Police Station</h3>
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-sm">Logistic Support Team</h3>
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-sm">Motor Transport & Maintenance</h3>
              </div>
            </div>

            {/* Wings and Teams */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Hyderabad Zone */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-blue-600 mb-4">Hyderabad Zone</h3>
                <ul className="space-y-2">
                  <li className="bg-gray-50 p-3 rounded">Asset Protection Wing - 4 Teams</li>
                  <li className="bg-gray-50 p-3 rounded">Disaster Management Wing - 5 DMU Teams</li>
                </ul>
              </div>

              {/* Cyberabad Zone */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-blue-600 mb-4">Cyberabad Zone</h3>
                <ul className="space-y-2">
                  <li className="bg-gray-50 p-3 rounded">Asset Protection Wing - 7 Teams</li>
                  <li className="bg-gray-50 p-3 rounded">Disaster Management Wing - 5 DMU Teams</li>
                </ul>
              </div>

              {/* Rachakonda Zone */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-blue-600 mb-4">Rachakonda Zone</h3>
                <ul className="space-y-2">
                  <li className="bg-gray-50 p-3 rounded">Asset Protection Wing - 4 Teams</li>
                  <li className="bg-gray-50 p-3 rounded">Disaster Management Wing - 2 DMU Teams</li>
                </ul>
              </div>
            </div>

            {/* Administration Wing */}
            <div className="mt-8 w-full">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-blue-600 mb-4">Administration Wing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded">Administration & Personnel Management</div>
                  <div className="bg-gray-50 p-3 rounded">Legal Wing & Domain Experts</div>
                  <div className="bg-gray-50 p-3 rounded">Central Technical Team</div>
                  <div className="bg-gray-50 p-3 rounded">GIS, IT & Database Management</div>
                  <div className="bg-gray-50 p-3 rounded">Accounts & Finance Wing</div>
                  <div className="bg-gray-50 p-3 rounded">Armed Force - 1 Coy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganisationStructure 