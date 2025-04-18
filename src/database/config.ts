import pg from 'pg';

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Hydra",
  password: "postgres ",
  port: 5432,
});

// Connect to the database
db.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Error connecting to PostgreSQL database:', err));

export default db; 