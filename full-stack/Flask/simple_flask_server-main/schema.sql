
DROP TABLE IF EXISTS students;

CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    age VARCHAR(20),
    grade VARCHAR(20)
);

\i fill_data.sql

