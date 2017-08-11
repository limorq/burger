DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burger (
id INTEGER(11) auto_increment NOT NULL,
burger_name VARCHAR(100),
devoured BOOLEAN,
timeOf TIMESTAMP,
PRIMARY KEY(id)
);
select * from burger;
