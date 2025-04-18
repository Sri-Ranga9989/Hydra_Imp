-- Create news_updates table
CREATE TABLE IF NOT EXISTS news_updates (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    link TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_news_updates_updated_at
    BEFORE UPDATE ON news_updates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 