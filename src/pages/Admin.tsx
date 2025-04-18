import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface NewsUpdate {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsUpdate[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/news');
      const data = await response.json();
      setNews(data);
    } catch (err) {
      setError('Failed to fetch news updates');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingId 
        ? `http://localhost:3000/api/news/${editingId}`
        : 'http://localhost:3000/api/news';
      
      const method = editingId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save news update');
      
      setFormData({ title: '', content: '' });
      setEditingId(null);
      fetchNews();
    } catch (err) {
      setError('Failed to save news update');
    }
  };

  const handleEdit = (newsItem: NewsUpdate) => {
    setFormData({
      title: newsItem.title,
      content: newsItem.content
    });
    setEditingId(newsItem.id);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this news update?')) return;
    
    try {
      const response = await fetch(`http://localhost:3000/api/news/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete news update');
      
      fetchNews();
    } catch (err) {
      setError('Failed to delete news update');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">News Updates Admin</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {editingId ? 'Update News' : 'Add News'}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setFormData({ title: '', content: '' });
              setEditingId(null);
            }}
            className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        )}
      </form>

      <div className="grid gap-4">
        {news.map((item) => (
          <div key={item.id} className="border rounded p-4">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.content}</p>
            <div className="text-sm text-gray-500 mb-2">
              Created: {new Date(item.created_at).toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Updated: {new Date(item.updated_at).toLocaleString()}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
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