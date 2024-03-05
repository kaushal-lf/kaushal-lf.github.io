-- migrations/Categories.sql

CREATE TABLE Categories (
    CategoryId SERIAL PRIMARY KEY,
    CategoryName VARCHAR(255),
    Description TEXT
);
