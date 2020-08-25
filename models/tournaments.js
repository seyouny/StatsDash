module.exports = function (sequelize, DataTypes) {
    var Tournaments = sequelize.define("Tournaments", {
       
        tName: DataTypes.STRING,
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
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        status: DataTypes.STRING,
        joinCode: DataTypes.STRING

    });

    Tournaments.associate = function (models) {
        Tournaments.hasMany(models.Performances, {
            onDelete: "cascade"
        });
        Tournaments.belongsToMany(models.Users,{ through: models.TournamentList })
    };
    return Tournaments;
};
