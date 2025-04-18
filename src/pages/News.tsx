import { useState } from 'react'
import news1 from '@/assets/News Images/News1.jpeg'
import news2 from '@/assets/News Images/News2.jpeg'
import news3 from '@/assets/News Images/News3.jpeg'
import ImageModal from '@/components/ImageModal'

const News = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null)

  // News data with actual images
  const newsItems = [
    {
      id: 1,
      title: 'HYDRAA signs MoU with NRSC towards making land/lake data accessible to people',
      date: 'April 6th, 2025',
      image: news1,
      excerpt: 'The Hyderabad Disaster Response and Asset Protection Agency (HYDRAA) signed an MoU with the National Remote Sensing Centre (NRSC) to gather and make public verified data on lakes, canals, stormwater drains, buffer zones, parks, and government lands in and around the Outer Ring Road (ORR) in Hyderabad. A centralized geo-portal will be created for easy access, supporting environmental and disaster management efforts.',
      link: '#'
    },
    {
      id: 2,
      title: 'HYDRAA to map water bodies, make info public',
      date: 'April 6th, 2025',
      image: news2,
      excerpt: 'HYDRAA and NRSC collaboration will make data publicly accessible via the Telangana Core Urban Region (TCUR). The initiative focuses on eliminating confusion around lake boundaries, Full Tank Levels (FTLs), and buffer zones using satellite imagery. Data from the Survey of India, revenue maps, and Bhuvan platform will be used, shared as per the Geospatial Data Policy 2023.',
      link: '#'
    },
    {
      id: 3,
      title: 'ప్రజల సమాచారాలకు పరిణామానికి (Towards public awareness and transformation)',
      date: 'April 8th, 2025',
      image: news3,
      excerpt: 'HYDRAA Commissioner A.V. Ranganath visited 57 municipalities in the Hyderabad region as part of the implementation of the new initiative. The main goal is to digitize and make water bodies data transparent and accessible to the public. Efforts include using satellite tech and digital mapping to reduce illegal encroachments across multiple districts including Medchal–Malkajgiri and Rangareddy.',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">HYDRAA on News</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and developments from the Hyderabad Disaster Response and Asset Protection Agency.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* News Image */}
              <div 
                className="aspect-video relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage({ image: news.image, title: news.title })}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* News Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                  {news.title}
                </h2>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <a
                  href={news.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Read More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            image={selectedImage.image}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  )
}

export default News 