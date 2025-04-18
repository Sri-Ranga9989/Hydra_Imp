

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About HYDRAA</h1>
        
        {/* Introduction Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Urban Growth and Challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Urbanization Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                Telangana is one of India's fastest urbanizing states, with an annual urban population growth rate of 3.2%, significantly higher than the national average.
              </p>
            </div>

            {/* Industry Growth Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                This rapid expansion is fueled by growth in IT, ITES, Pharmaceuticals, Biotechnology, Warehousing, Logistics, Aerospace, and Renewable Energy sectors.
              </p>
            </div>

            {/* ORR Impact Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                The Outer Ring Road (ORR) has emerged as the natural boundary of the metropolitan area, encompassing a diverse mix of urban and rural local bodies.
              </p>
            </div>

            {/* Service Disparity Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                While displaying characteristics of a unified urban agglomeration, the quality and consistency of civic services vary greatly across different local bodies.
              </p>
            </div>

            {/* Disaster Management Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                This disparity is especially evident in disaster management, with GHMC having basic support while other zones lack fundamental response mechanisms.
              </p>
            </div>

            {/* HYDRAA Solution Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                HYDRAA serves as the centralized authority for disaster response, risk mitigation, and asset protection across the TCUR region.
              </p>
            </div>
          </div>
        </div>

        {/* Constitution Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Constitution of HYDRAA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Formation Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Formation</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Constituted by Government of Telangana vide GOMs. 99 Dt:19.07.2024 under MA&UD Department.
              </p>
            </div>

            {/* TCUR Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">TCUR Definition</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Comprises entire GHMC and areas of Hyderabad, Rangareddy, Medchal Malkajgiri and Sangareddy Districts up to ORR.
              </p>
            </div>

            {/* Jurisdiction Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Jurisdiction</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Covers entire GHMC, all ULBs & RLBs up to ORR (TCUR), and any area as specified by the Government.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Our Vision</h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              Through unified effort, HYDRAA aims to ensure equitable, efficient, and proactive disaster management—creating a safer, more resilient urban future for Hyderabad and its growing metropolitan region.
            </p>
          </div>
        </div>

        {/* Purpose and Vision */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Purpose and Vision</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              <p className="text-gray-700">
                To bridge this critical gap, the Government of Telangana has initiated the establishment of a single, unified agency to oversee disaster management across the Telangana Core Urban Region (TCUR). The TCUR includes the entire GHMC area and adjoining urban stretches within Hyderabad, Rangareddy, Medchal–Malkajgiri, and Sangareddy districts—all falling within the ORR boundary.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              <p className="text-gray-700">
                In response to this need, the Hyderabad Disaster Response and Asset Administration (HYDRAA) has been constituted. HYDRAA will serve as the centralized authority for disaster response, risk mitigation, emergency coordination, and critical asset protection across the TCUR.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              <p className="text-gray-700 font-semibold">
                Through this unified effort, HYDRAA aims to ensure equitable, efficient, and proactive disaster management—creating a safer, more resilient urban future for Hyderabad and its growing metropolitan region.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Functions Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">Major Functions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <p className="text-gray-700">
                  To protect assets of Local Bodies and Government such as parks, layout open spaces, playgrounds, lakes, nalas, land parcels, roads, carriageways, footpaths, etc from encroachments.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <p className="text-gray-700">
                  Removal of lake encroachments in coordination with GHMC, other local bodies, HMDA, Irrigation department, Revenue department, etc.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <p className="text-gray-700">
                  Any other enforcement work as entrusted by the Government from time to time.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <p className="text-gray-700">
                  Taking up of Disaster response and relief work by Disaster Response Force (DRF) of HYDRAA in case of any disaster / emergency.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <p className="text-gray-700">
                  Coordination with all concerned departments such as Police, GHMC and other Local Bodies concerned, HMWS&SB, HMDA, HMR, HGCL, MRDCL, TGSPDCL, Forest, UBD, Irrigation. etc., to handle all types of emergencies / emergency situations.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <p className="text-gray-700">
                  Coordination with NDRF, SDMA, TG DR&FS Department and other State and National agencies of Disaster Management.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <p className="text-gray-700">
                  Inspection of premises and issuing of Fire NOCs as entrusted by the DG DR&FS under the provisions of Telangana Fire Services Act, 1999.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 