CREATE DATABASE MoodMap;

USE MoodMap;

CREATE TABLE UserInfo (
    id INT AUTO_INCREMENT,
    UserID INT,
    FirstName TEXT,
    LastName TEXT,
    Age INT,
    Email TEXT,
    CreatedAt DATE,
    PRIMARY KEY (id)
);

CREATE TABLE Question1 (
    id INT,
    UserID INT,
    Answer INT,
    CreatedAt DATE,
    PRIMARY KEY (id)
);

CREATE TABLE Question2 (
    id INT,
    UserID INT,
    Answer INT,
    CreatedAt DATE,
    PRIMARY KEY (id)
);
CREATE TABLE Question3 (
    id INT,
    UserID INT,
    Answer INT,
    CreatedAt DATE,
    PRIMARY KEY (id)
);
CREATE TABLE Question4 (
    id INT,
    UserID INT,
    Answer INT,
    CreatedAt DATE,
    PRIMARY KEY (id)
);
CREATE TABLE Question5 (
    id INT,
    UserID INT,
    Answer INT,
    CreatedAt DATE,
    PRIMARY KEY (id)
);