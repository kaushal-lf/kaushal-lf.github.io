-- migrations/Orders.sql

CREATE TABLE Orders (
    OrderId SERIAL PRIMARY KEY,
    CustomerId INTEGER REFERENCES customers(CustomerId),
    EmployeeId INTEGER,
    OrderDate DATE,
    ShipperId INTEGER REFERENCES shippers(ShipperId)
);