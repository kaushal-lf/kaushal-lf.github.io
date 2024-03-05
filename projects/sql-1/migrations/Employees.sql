-- migrations/Employees.sql

CREATE TABLE Employees (
    EmployeeId SERIAL PRIMARY KEY,
    LastName VARCHAR(255),
    FirstName VARCHAR(255),
    BirthDate DATE,
    Photo BYTEA,
    Notes TEXT
);