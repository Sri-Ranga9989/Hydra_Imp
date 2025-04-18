import { useState, useEffect, useMemo, useCallback } from 'react'
import { getNewsUpdates, NewsUpdate, testConnection } from '../services/newsService'

//const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
//const dbHost = import.meta.env.VITE_DB_HOST;

const NewsTicker = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeUpdate, setActiveUpdate] = useState<number | null>(null)
  const [updates, setUpdates] = useState<NewsUpdate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const checkConnection = async () => {
      const isConnected = await testConnection();
      if (!isConnected) {
        setError('Database connection failed. Please check your connection settings.');
        setLoading(false);
        return false;
      }
      return true;
    };

    const fetchUpdates = async () => {
      try {
        const isConnected = await checkConnection();
        if (!isConnected) return;

        const data = await getNewsUpdates();
        if (!data || data.length === 0) {
          setError('No updates available');
          setLoading(false);
          return;
        }

        setUpdates(data);
        setLoading(false);
        setError(null);
      } catch (err) {
        console.error('Error fetching updates:', err);
        if (retryCount < 3) {
          setRetryCount(prev => prev + 1);
          setTimeout(fetchUpdates, 2000); // Retry after 2 seconds
        } else {
          setError('Failed to load news updates after multiple attempts');
          setLoading(false);
        }
      }
    };

    fetchUpdates();
  }, [retryCount]);

  const handleUpdateClick = useCallback((index: number) => {
    setActiveUpdate(index);
    if (updates[index]?.link) {
      window.open(updates[index].link, '_blank');
    }
  }, [updates]);

  const newsItems = useMemo(() => {
    if (!updates.length) return null;
    
    return (
      <>
        {updates.map((update, index) => (
          <span 
            key={`first-${update.id}`}
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
        {updates.map((update, index) => (
          <span 
            key={`second-${update.id}`}
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
      </>
    );
  }, [updates, activeUpdate, handleUpdateClick]);

  if (loading) {
    return (
      <div className="bg-blue-600 text-white py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="animate-pulse">Loading updates...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-600 text-white py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            {error}
          </div>
        </div>
      </div>
    )
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
              {newsItems}
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