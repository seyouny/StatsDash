module.exports = function (sequelize, DataTypes) {
    var Tournaments = sequelize.define("Tournaments", {
       
        name: DataTypes.STRING,
        games: DataTypes.INTEGER,
        gulagKillsMultiplier: DataTypes.INTEGER,
        gulagDeathsMultiplier: DataTypes.INTEGER,
        killsMultiplier: DataTypes.INTEGER,
        deathsMultiplier: DataTypes.INTEGER,
        damageMultiplier: DataTypes.INTEGER,
        placementMultiplier: DataTypes.INTEGER,
        revivesMultiplier: DataTypes.INTEGER,
        clutchKillsMultiplier: DataTypes.INTEGER,
        damageToKillsMultiplier:DataTypes.INTEGER,
    });

    Tournaments.associate = function (models) {
        Tournaments.hasMany(models.Performances, {
            onDelete: "cascade"
        });
        
    };
    return Tournaments;
};