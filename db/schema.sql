-- creates a database to store burgers

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INTEGER(100)AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (200) NOT NULL,
devoured BOOLEAN, 
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
PRIMARY KEY (id)
);

