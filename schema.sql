CREATE TABLE users (
    id serial primary key,
    authid varchar(40),
    name varchar(40)
),

CREATE TABLE productList (
    id integer,
    productName text,
    brandName text,
    size text,
    price integer,
    productPhoto text,
    quantity integer
)