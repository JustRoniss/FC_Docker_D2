CREATE DATABASE IF NOT EXISTS db_desafio;
USE db_desafio;

CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);