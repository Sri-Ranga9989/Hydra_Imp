const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Log environment variables (without password)
console.log('Database Configuration:');
console.log('Host:', process.env.VITE_DB_HOST);
console.log('Port:', process.env.VITE_DB_PORT);
console.log('Database:', process.env.VITE_DB_NAME);
console.log('User:', process.env.VITE_DB_USER);

// Database configuration
const pool = new Pool({
  user: process.env.VITE_DB_USER,
  host: process.env.VITE_DB_HOST,
  database: 'Hydra',
  password: 'postgres ',
  port: parseInt(process.env.VITE_DB_PORT || '5432'),
});

// Test database connection with better error handling
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    console.error('Error code:', err.code);
    console.error('Error message:', err.message);
    return;
  }
  
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Database connected successfully');
    console.log('Current time:', result.rows[0].now);
  });
});

// Routes
app.get('/api/news', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM news_updates ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM news_updates WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'News update not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/news', async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    const result = await pool.query(
      'INSERT INTO news_updates (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    const result = await pool.query(
      'UPDATE news_updates SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'News update not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM news_updates WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'News update not found' });
    }
    res.json({ message: 'News update deleted successfully' });
  } catch (err) {
    console.error('Error deleting news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 