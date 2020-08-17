module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        gamerTag:DataTypes.STRING,
        platform:DataTypes.STRING,
        activisionId:DataTypes.STRING,
        username: DataTypes.STRING
    });

    Users.associate = function (models) {
        Users.hasMany(models.Performances, {
            onDelete: "cascade"
        });
        Users.hasMany(models.Tournaments,{
            onDelete: "cascade"
        });
    };
    return Users;
};
