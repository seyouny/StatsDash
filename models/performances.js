module.exports = function (sequelize, DataTypes) {
    var Performances = sequelize.define("Performances", {
          
        gulagKills: DataTypes.INTEGER,
        gulagDeaths: DataTypes.INTEGER,
        kills: DataTypes.INTEGER,
        deaths: DataTypes.INTEGER,
        damage: DataTypes.INTEGER,
        placement: DataTypes.INTEGER,
        revives: DataTypes.INTEGER,
        clutchKills: DataTypes.INTEGER,
        damageToKills:DataTypes.INTEGER,
        overallScore: DataTypes.INTEGER,
        startMatch: DataTypes.STRING
    });

    // Performances.associate = function (models) {
       
    // };
    return Performances;
};
