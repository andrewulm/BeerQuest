DROP DATABASE IF EXISTS brewmaster_db;

CREATE DATABASE brewmaster_db;

USE brewmaster_db;

CREATE TABLE reviews (
review_id INT NOT NULL AUTO_INCREMENT,
review_username VARCHAR(255) NULL, 
score DECIMAL(5,1) NULL,
review VARCHAR(280) NULL,
PRIMARY KEY (review_id)
);

CREATE TABLE beer (
beer_id INT NOT NULL AUTO_INCREMENT,
beer_name VARCHAR(255) NOT NULL,
beer_desc VARCHAR(255),
beer_rating VARCHAR(255),
PRIMARY KEY (beer_id)
);