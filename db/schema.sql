CREATE DATABASE MoodMap;

USE DATABASE MoodMap;

-- id, name, age, 10 columns for questions, created at (do we need deleted or updated at?)

CREATE TABLE user (
    id INT AUTO_INCREMENT,
    UserID INT,
    FirstName TEXT,
    LastName TEXT,
    Age INT,
    Email TEXT,
    Question1 INT,
    Question2 INT,
    Question3 INT,
    Question4 INT,
    Question5 INT,
    CreatedAt DATE,
    PRIMARY KEY (id)
);