-- Schema
DROP TABLE IF EXISTS students;
CREATE TABLE students (
  id           serial PRIMARY KEY,
  first_name   varchar(255) NOT NULL,
  last_name    varchar(255) NOT NULL,
  birthdate    date NOT NULL,
  address_id   integer
);

DROP TABLE IF EXISTS addresses;
CREATE TABLE addresses(
id SERIAL PRIMARY KEY,
line_1 VARCHAR(20),
city VARCHAR(20),
state VARCHAR(20),
zipcode VARCHAR(10)  
);

DROP TABLE IF EXISTS classes;
CREATE TABLE classes(
id SERIAL PRIMARY KEY,
name VARCHAR(20),
credits int
);

DROP TABLE IF EXISTS enrollments;
CREATE TABLE enrollments(
id SERIAL PRIMARY KEY,
student_id INT,
class_id INT,
grade VARCHAR(2)
);

\i seed_data.sql
SELECT last_name, first_name FROM students;
