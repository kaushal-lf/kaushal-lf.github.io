-- migrations/OrderDetails.sql

CREATE TABLE OrderDetails (
    OrderDetailId SERIAL PRIMARY KEY,
    OrderId INTEGER REFERENCES Orders(OrderId),
    ProductId INTEGER REFERENCES Products(ProductId),
    Quantity INTEGER
);