const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export interface NewsUpdate {
  id: number;
  text: string;
  link: string;
  created_at: Date;
  updated_at: Date;
}

export const getNewsUpdates = async (): Promise<NewsUpdate[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news updates:', error);
    throw error;
  }
};

export const addNewsUpdate = async (text: string, link: string): Promise<NewsUpdate> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text, link })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding news update:', error);
    throw error;
  }
};

export const updateNewsUpdate = async (id: number, text: string, link: string): Promise<NewsUpdate> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text, link })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating news update:', error);
    throw error;
  }
};

export const deleteNewsUpdate = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error deleting news update:', error);
    throw error;
  }
};

export const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/news`);
    return response.ok;
  } catch (error) {
    console.error('API connection failed:', error);
    return false;
  }
}; 