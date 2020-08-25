module.exports = function (sequelize, DataTypes) {
    var TournamentList = sequelize.define("TournamentList", {}, { timestamps: false });

    return TournamentList;
};