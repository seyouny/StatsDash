CREATE DATABASE statdashdb;

//DO THE FOLLOWING IN SUBSEQUENT STEPS IN MYSQL WORKBENCH

//1 - Create Users Table - Skip this step if using Sequelize
USE statdashdb;

DROP TABLE IF EXISTS Users;

CREATE TABLE Users  (
        id varchar(4) NOT NULL,
        firstName varchar(20),
        lastName varchar(20),
        email varchar(20),
        gamerTag varchar(20),
        platform varchar(20),
        activisionId varchar(20),
        username varchar(20),
        password varchar(20),
        PRIMARY KEY (id),
        createdAt DATETIME,
        updatedAt DATETIME
    )


//2 - Create Performances Table - Skip this step if using Sequelize

USE statdashdb;

DROP TABLE IF EXISTS Performances;

CREATE TABLE Performances (
          
    id INTEGER,
    gulagKills INTEGER,
    gulagDeaths INTEGER,
    kills INTEGER,
    deaths INTEGER,
    damage INTEGER,
    placement INTEGER,
    revives INTEGER,
    clutchKills INTEGER,
    damageToKills INTEGER,
    overallScore INTEGER,
    startMatch VARCHAR(30),
    createdAt DATETIME,
    updatedAt DATETIME,
    TournamentId VARCHAR(50),
    UserId VARCHAR(30),
    PRIMARY KEY (id)
)


//3 - Insert Seed User Data into Users Table
USE statdashdb;

INSERT INTO Users (id, firstName, lastName, email, gamerTag, platform, activisionId, username, password, createdAt, updatedAt)
VALUES ('10', 'Jen', 'Jayme', 'jeniferjayme@gmail.com', 'GeneralJayme', 'Steam - (steam)', '', 'Jen', 'password', '2020-08-28 04:56:40', '2020-08-28 04:56:40');

INSERT INTO Users (id, firstName, lastName, email, gamerTag, platform, activisionId, username, password, createdAt, updatedAt)
VALUES ('20','Stacey', 'Yoon', 'stacey.exp@gmail.com', 'yungsnowflake510', 'Playstation - (psn)', '', 'Stacey', 'password', '2020-08-28 04:56:40', '2020-08-28 04:56:40');

INSERT INTO Users (id, firstName, lastName, email, gamerTag, platform, activisionId, username, password, createdAt, updatedAt)
VALUES ('30', 'Alex', 'Aguirrebena', 'alex@gmail.com', 'snaggemenhaggem', 'Playstation - (psn)', '', 'Alex', 'password', '2020-08-28 04:56:40', '2020-08-28 04:56:40');

INSERT INTO Users (id, firstName, lastName, email, gamerTag, platform, activisionId, username, password, createdAt, updatedAt)
VALUES ('40', 'Royce', 'Williams', 'royce@gmail.com', 'roycedub510', 'Playstation - (psn)', '', 'Royce', 'password', '2020-08-28 04:56:40', '2020-08-28 04:56:40');

INSERT INTO Users (id, firstName, lastName, email, gamerTag, platform, activisionId, username, password, createdAt, updatedAt)
VALUES ('50', 'Gio', 'Noisy', 'gio@gmail.com', 'gameonFoo', 'XBox - (xbl)', '', 'Gio', 'password', '2020-08-28 04:56:40', '2020-08-28 04:56:40');


//4- Insert Seed Tournaments into Tournaments Table
USE statdashdb;

INSERT INTO Tournaments (id, tName, games, gulagKillsMultiplier, gulagDeathsMultiplier, killsMultiplier, damageMultiplier, placementMultiplier, revivesMultiplier, clutchKillsMultiplier, damageToKillsMultiplier, startDate, endDate, status, joinCode, adminId, createdAt, updatedAt)
VALUES ('100','Memorial Day Tournament',12,75,-25,50,1,50,10,10,25,'2020-08-28 04:56:40', '2020-08-29 04:56:40','active','MemorialDayTournament#267', 40, '2020-08-26 04:56:40', '2020-08-30 04:56:40');

INSERT INTO Tournaments (id, tName, games, gulagKillsMultiplier, gulagDeathsMultiplier, killsMultiplier, damageMultiplier, placementMultiplier, revivesMultiplier, clutchKillsMultiplier, damageToKillsMultiplier, startDate, endDate, status, joinCode, adminId, createdAt, updatedAt)
VALUES ('200',"Royce's Birthday Tournament",12,75,-25,50,1,50,10,10,25,'2020-07-28 04:56:40', '2020-07-29 04:56:40','active','RoycesBirthdayTournament#200', 40, '2020-07-26 04:56:40', '2020-07-30 04:56:40');

INSERT INTO Tournaments (id, tName, games, gulagKillsMultiplier, gulagDeathsMultiplier, killsMultiplier, damageMultiplier, placementMultiplier, revivesMultiplier, clutchKillsMultiplier, damageToKillsMultiplier, startDate, endDate, status, joinCode, adminId, createdAt, updatedAt)
VALUES ('300',"Demo Tournament",12,75,-25,50,1,50,10,10,25,'2020-07-28 04:56:40', '2020-07-29 04:56:40','active','DemoTournament#300', 40, '2020-07-26 04:56:40', '2020-07-30 04:56:40');

INSERT INTO Tournaments (id, tName, games, gulagKillsMultiplier, gulagDeathsMultiplier, killsMultiplier, damageMultiplier, placementMultiplier, revivesMultiplier, clutchKillsMultiplier, damageToKillsMultiplier, startDate, endDate, status, joinCode, adminId, createdAt, updatedAt)
VALUES ('400',"Final Project Day Tournament",12,75,-25,50,1,50,10,10,25,'2020-07-28 04:56:40', '2020-07-29 04:56:40','active','FinalProjectDay#400', 40, '2020-07-26 04:56:40', '2020-07-30 04:56:40');



//5- Insert Seed Date into Performances Table
USE statdashdb;

INSERT INTO Performances (id, gulagKills, gulagDeaths, kills, deaths, damage, placement, revives, clutchKills, damageToKills, overallScore, startMatch, createdAt, updatedAt, TournamentId, UserId)
VALUES ('10',21,12,64,3,51,3,22,19,55,103,null,'2020-08-28 04:56:40', '2020-08-28 04:56:40','400','10');

INSERT INTO Performances (id, gulagKills, gulagDeaths, kills, deaths, damage, placement, revives, clutchKills, damageToKills, overallScore, startMatch, createdAt, updatedAt, TournamentId, UserId)
VALUES ('20',12,33,52,2,59,1,33,12,43,99,null,'2020-08-28 04:56:40', '2020-08-28 04:56:40','400','20');

INSERT INTO Performances (id, gulagKills, gulagDeaths, kills, deaths, damage, placement, revives, clutchKills, damageToKills, overallScore, startMatch, createdAt, updatedAt, TournamentId, UserId)
VALUES ('30',17,23,57,2,65,2,29,16,52,92,null,'2020-08-28 04:56:40', '2020-08-28 04:56:40','400','30');

INSERT INTO Performances (id, gulagKills, gulagDeaths, kills, deaths, damage, placement, revives, clutchKills, damageToKills, overallScore, startMatch, createdAt, updatedAt, TournamentId, UserId)
VALUES ('40',25,28,49,4,61,1,35,20,61,107,null,'2020-08-28 04:56:40', '2020-08-28 04:56:40','400','40');

INSERT INTO Performances (id, gulagKills, gulagDeaths, kills, deaths, damage, placement, revives, clutchKills, damageToKills, overallScore, startMatch, createdAt, updatedAt, TournamentId, UserId)
VALUES ('50',25,28,49,4,61,1,35,20,61,107,null,'2020-08-28 04:56:40', '2020-08-28 04:56:40','400','50');


//6 - To Delete a row, use this syntax
USE statdashdb;

DELETE FROM tournaments
WHERE id = 302;