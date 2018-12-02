DROP DATABASE IF EXISTS beerquest_db;

CREATE DATABASE brewmaster_db;

CREATE TABLE reviews (
review_id INT NOT NULL AUTO_INCREMENT,
review_username VARCHAR(255) NULL, 
score DECIMAL(5,1) NULL,
review VARCHAR(280) NULL,
PRIMARY KEY (review_id)
);