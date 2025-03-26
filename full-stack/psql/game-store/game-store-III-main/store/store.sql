-- Drop the table if it exists
DROP TABLE IF EXISTS game;

-- Create Game Table
CREATE TABLE game (
    game_id INT PRIMARY KEY,
    game_title VARCHAR(255) UNIQUE NOT NULL CHECK (game_title ~ '^[A-Za-z0-9 _\-:''\\]+$'),
    quantity INT NOT NULL CHECK(quantity > 0 AND quantity < 51),
    price DECIMAL(5, 2) NOT NULL CHECK(price > 10 AND price < 60)
);



-- Insert Sample Data into Game Table
\COPY game FROM './data/game.csv' WITH CSV HEADER;


DROP TABLE IF EXISTS action_figure;

CREATE TABLE action_figure (
    id INT PRIMARY KEY,
    action_figure_title VARCHAR UNIQUE CHECK(
        action_figure_title = INITCAP(action_figure_title) AND
        action_figure_title ~ '^[A-Za-z0-9 -]+$'
        ),
    quantity INT CHECK(
        quantity >0 AND quantity <31
    ),
    price DECIMAL(5,2) CHECK(
        price >= 10 AND price <= 100
    )
);

\COPY action_figure FROM './data/action_figure.csv' WITH CSV HEADER;

DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    employee_name VARCHAR CHECK(
        employee_name = INITCAP(employee_name) AND
        employee_name ~ '^[A-Za-z ]+$'
    ),
    position VARCHAR CHECK(
        position in ('Sales Associate', 'Store Manager', 'Inventory Clerk', 'Customer Service Representative', 'IT Specialist', 'Marketing Coordinator', 'Assistant Manager', 'Finance Analyst', 'Security Officer', 'HR Coordinator')
    ),
    salary DECIMAL(7,2) CHECK (
        salary >= 32000 AND salary <= 60000
    )
);

\COPY employee FROM './data/employee.csv' WITH CSV HEADER;

DROP TABLE IF EXISTS poster;

CREATE TABLE poster (
    id INT PRIMARY KEY,
    poster_title VARCHAR UNIQUE CHECK(
        --checks if the INTICAP using the first piece prior to *
        poster_title ~ '^[A-Z][A-Za-z0-9 -]*( [A-Z][A-Za-z0-9 -]*)*$'
    ),
    quantity INT CHECK(
        quantity >=1 AND quantity <= 30
    ),
    price DECIMAL(4,2) CHECK (
        price >= 6 and price <= 20
    )
);

\COPY poster FROM './data/poster.csv' WITH CSV HEADER;