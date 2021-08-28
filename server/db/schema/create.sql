DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS interests CASCADE;
DROP TABLE IF EXISTS matches CASCADE;
-- DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  date_of_birth DATE NOT NULL,
  address VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  about_me TEXT NOT NULL,
  starsign BOOLEAN DEFAULT false,
  vaccinated BOOLEAN NOT NULL
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  photo1_url VARCHAR(255) NOT NULL,
  photo2_url VARCHAR(255) NOT NULL,
  photo3_url VARCHAR(255) NOT NULL,
  photo4_url VARCHAR(255) NOT NULL
);

CREATE TABLE interests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  books BOOLEAN,
  tv_movies BOOLEAN,
  fitness BOOLEAN,
  hiking BOOLEAN,
  arts_culture BOOLEAN,
  music BOOLEAN,
  gaming BOOLEAN,
  travel BOOLEAN,
  studying BOOLEAN,
  sports BOOLEAN,
  eating_out BOOLEAN,
  going_out BOOLEAN,
  other BOOLEAN
);

CREATE TABLE matches (
  user1_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  user2_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  best_friend BOOLEAN DEFAULT false
);

-- CREATE TABLE messages (
--   match_id INTEGER REFERENCES matches(id) ON DELETE CASCADE,
--   message VARCHAR(512),
--   sent_at TIMESTAMP NOT NULL,
--   user1_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   user2_id INTEGER REFERENCES users(id) ON DELETE CASCADE
-- );