-- migrations/Suppliers.sql

CREATE TABLE Suppliers (
    SupplierId SERIAL PRIMARY KEY,
    SupplierName VARCHAR(255),
    ContactName VARCHAR(255),
    Address VARCHAR(255),
    City VARCHAR(255),
    PostalCode VARCHAR(20),
    Country VARCHAR(100),
    Phone VARCHAR(20)
);