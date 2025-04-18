import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface NewsUpdate {
  id: number;
  text: string;
  link: string;
  created_at: string;
  updated_at: string;
}

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsUpdate[]>([]);
  const [formData, setFormData] = useState({
    text: '',
    link: ''
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching news updates...');
      const response = await fetch('http://localhost:3000/api/news');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Received news updates:', data);
      setNews(data);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(`Failed to fetch news updates: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const url = editingId 
        ? `http://localhost:3000/api/news/${editingId}`
        : 'http://localhost:3000/api/news';
      
      const method = editingId ? 'PUT' : 'POST';
      
      console.log(`Sending ${method} request to ${url}`);
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Server error response:', responseData);
        throw new Error(
          responseData.details || 
          responseData.error || 
          `HTTP error! status: ${response.status}`
        );
      }
      
      setFormData({ text: '', link: '' });
      setEditingId(null);
      setSuccess(editingId ? 'News update updated successfully!' : 'News update created successfully!');
      fetchNews();
    } catch (err) {
      console.error('Error saving news:', err);
      setError(`Failed to save news update: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (newsItem: NewsUpdate) => {
    setFormData({
      text: newsItem.text,
      link: newsItem.link
    });
    setEditingId(newsItem.id);
    setSuccess(null);
    setError(null);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this news update?')) return;
    
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      console.log(`Deleting news update with id: ${id}`);
      const response = await fetch(`http://localhost:3000/api/news/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || `HTTP error! status: ${response.status}`);
      }
      
      setSuccess('News update deleted successfully!');
      fetchNews();
    } catch (err) {
      console.error('Error deleting news:', err);
      setError(`Failed to delete news update: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">News Updates Admin</h1>
      
      {loading && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
          Loading...
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <div className="font-bold">Error:</div>
          <div className="whitespace-pre-wrap">{error}</div>
          <button
            onClick={() => setError(null)}
            className="mt-2 text-sm text-red-600 hover:text-red-800"
          >
            Dismiss
          </button>
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Text *
          </label>
          <textarea
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            required
            disabled={loading}
            placeholder="Enter news text"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Link *
          </label>
          <input
            type="url"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            disabled={loading}
            placeholder="Enter news link"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            disabled={loading}
          >
            {editingId ? 'Update News' : 'Add News'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setFormData({ text: '', link: '' });
                setEditingId(null);
                setSuccess(null);
                setError(null);
              }}
              className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              disabled={loading}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="grid gap-4">
        {news.map((item) => (
          <div key={item.id} className="border rounded p-4 bg-white shadow">
            <p className="text-gray-700 mb-4 whitespace-pre-wrap">{item.text}</p>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mb-4 block"
            >
              {item.link}
            </a>
            <div className="text-sm text-gray-500 mb-2">
              Created: {new Date(item.created_at).toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Updated: {new Date(item.updated_at).toLocaleString()}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
                disabled={loading}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
                disabled={loading}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin; 