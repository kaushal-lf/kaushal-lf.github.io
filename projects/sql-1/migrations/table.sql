-- Table Customers
CREATE TABLE Customers (
    CustomerId SERIAL PRIMARY KEY,
    CustomerName VARCHAR(255),
    ContactName VARCHAR(255),
    Address VARCHAR(255),
    City VARCHAR(255),
    PostalCode VARCHAR(20),
    Country VARCHAR(100)
);

-- Table Shippers
CREATE TABLE Shippers (
    ShipperId SERIAL PRIMARY KEY,
    ShipperName VARCHAR(255),
    Phone VARCHAR(20)
);

-- Table Employees
CREATE TABLE Employees (
    EmployeeId SERIAL PRIMARY KEY,
    LastName VARCHAR(255),
    FirstName VARCHAR(255),
    BirthDate DATE,
    Photo BYTEA, -- Assuming photo is stored as binary data
    Notes TEXT
);

-- Table Suppliers
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

-- Table Categories
CREATE TABLE Categories (
    CategoryId SERIAL PRIMARY KEY,
    CategoryName VARCHAR(255),
    Description TEXT
);

-- Table Products
CREATE TABLE Products (
    ProductId SERIAL PRIMARY KEY,
    ProductName VARCHAR(255),
    SupplierId INTEGER REFERENCES Suppliers(SupplierId),
    CategoryId INTEGER REFERENCES Categories(CategoryId),
    Unit VARCHAR(50),
    Price DECIMAL(10, 2)
);

-- Table Orders
CREATE TABLE Orders (
    OrderId SERIAL PRIMARY KEY,
    CustomerId INTEGER REFERENCES Customers(CustomerId),
    EmployeeId INTEGER REFERENCES Employees(EmployeeId),
    OrderDate DATE,
    ShipperId INTEGER REFERENCES Shippers(ShipperId)
);

-- Table OrderDetails
CREATE TABLE OrderDetails (
    OrderDetailId SERIAL PRIMARY KEY,
    OrderId INTEGER REFERENCES Orders(OrderId),
    ProductId INTEGER REFERENCES Products(ProductId),
    Quantity INTEGER
);