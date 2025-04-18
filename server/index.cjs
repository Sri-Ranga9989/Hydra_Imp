const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from Vite dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
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

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    console.error('Error details:', {
      code: err.code,
      message: err.message,
      stack: err.stack
    });
  } else {
    console.log('Database connected successfully');
    console.log('Current time:', res.rows[0].now);
  }
});

// Routes
// Get all news updates
app.get('/api/news', async (req, res) => {
  try {
    console.log('Fetching latest 10 news updates...');
    const result = await pool.query(
      'SELECT * FROM news_updates ORDER BY created_at DESC LIMIT 10'
    );
    console.log(`Found ${result.rows.length} news updates`);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      details: err.message,
      stack: err.stack
    });
  }
});

// Get single news update
app.get('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Fetching news update with id:', id);
    const result = await pool.query('SELECT * FROM news_updates WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'News update not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      details: err.message,
      stack: err.stack
    });
  }
});

// Create news update
app.post('/api/news', async (req, res) => {
  try {
    const { text, link } = req.body;
    console.log('Creating new news update:', { text, link });
    
    if (!text || !link) {
      console.log('Validation failed: Missing required fields');
      return res.status(400).json({ 
        error: 'Text and link are required',
        details: 'Both text and link fields must be provided'
      });
    }

    // First check if the table exists
    console.log('Checking if table exists...');
    const tableExists = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'news_updates'
      );
    `);

    console.log('Table exists check result:', tableExists.rows[0].exists);

    if (!tableExists.rows[0].exists) {
      console.log('Table news_updates does not exist, creating it...');
      try {
        // Create the table if it doesn't exist
        await pool.query(`
          CREATE TABLE news_updates (
            id SERIAL PRIMARY KEY,
            text TEXT NOT NULL,
            link TEXT NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        `);
        console.log('Table news_updates created successfully');
      } catch (createError) {
        console.error('Error creating table:', createError);
        console.error('Create table error details:', {
          code: createError.code,
          message: createError.message,
          stack: createError.stack
        });
        return res.status(500).json({ 
          error: 'Failed to create table',
          details: createError.message,
          stack: createError.stack
        });
      }
    }

    console.log('Inserting new news update...');
    const result = await pool.query(
      'INSERT INTO news_updates (text, link) VALUES ($1, $2) RETURNING *',
      [text, link]
    );
    console.log('News update created successfully:', result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating news:', err);
    console.error('Error details:', {
      message: err.message,
      code: err.code,
      stack: err.stack
    });
    res.status(500).json({ 
      error: 'Internal server error',
      details: err.message,
      code: err.code,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
});

// Update news update
app.put('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { text, link } = req.body;
    console.log('Updating news update:', { id, text, link });
    
    if (!text || !link) {
      return res.status(400).json({ error: 'Text and link are required' });
    }
    const result = await pool.query(
      'UPDATE news_updates SET text = $1, link = $2 WHERE id = $3 RETURNING *',
      [text, link, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'News update not found' });
    }
    console.log('News update updated successfully:', result.rows[0]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating news:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      details: err.message,
      stack: err.stack
    });
  }
});

// Delete news update
app.delete('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Deleting news update with id:', id);
    const result = await pool.query('DELETE FROM news_updates WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'News update not found' });
    }
    console.log('News update deleted successfully:', result.rows[0]);
    res.json({ message: 'News update deleted successfully' });
  } catch (err) {
    console.error('Error deleting news:', err);
    res.status(500).json({ 
      error: 'Internal server error',
      details: err.message,
      stack: err.stack
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 