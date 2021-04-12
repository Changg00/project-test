CREATE TABLE backgrounds (
  id SERIAL PRIMARY KEY,
  url VARCHAR(201)
);

CREATE TABLE bill_track_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(51) NOT NULL,
  first_name VARCHAR(51) NOT NULL,
  last_name VARCHAR(51) NOT NULL,
  password VARCHAR(151) NOT NULL,
  profile_pic VARCHAR(201),
  background_id INT REFERENCES backgrounds (id)
);


CREATE TABLE expenses_date (
  id SERIAL PRIMARY KEY,
  due_date VARCHAR(201) NOT NULL
);

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  expense_title VARCHAR(201) NOT NULL,
  amount NUMERIC NOT NULL,
  bill_type VARCHAR(201) NOT NULL,
  users_id INT REFERENCES bill_track_users (id) NOT NULL
);

CREATE TABLE expenses_junction (
  id SERIAL PRIMARY KEY,
  expenses_date_id INT REFERENCES expenses_date (id) NOT NULL,
  expenses_id INT REFERENCES expenses (id) NOT NULL
);
