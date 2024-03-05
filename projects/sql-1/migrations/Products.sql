-- migrations/Products.sql

CREATE TABLE Products (
    ProductId SERIAL PRIMARY KEY,
    ProductName VARCHAR(255),
    SupplierId INTEGER REFERENCES Suppliers(SupplierId),
    CategoryId INTEGER REFERENCES Categories(CategoryId),
    Unit VARCHAR(50),
    Price DECIMAL(10, 2)
);