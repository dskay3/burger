-- Creates database called burgers_db if it does not exist already.
CREATE DATABASE IF NOT EXISTS burgers_db;

-- Uses the burgers_db.
USE burgers_db;

-- Create burger table
CREATE TABLE IF NOT EXISTS burgers (
	id INTEGER(30) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    date TIMESTAMP,
    PRIMARY KEY (id)
);