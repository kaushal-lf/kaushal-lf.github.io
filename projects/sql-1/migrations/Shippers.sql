-- migrations/Shippers.sql

CREATE TABLE Shippers (
    ShipperId SERIAL PRIMARY KEY,
    ShipperName VARCHAR(255),
    Phone VARCHAR(20)
);