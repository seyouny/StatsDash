module.exports = function (sequelize, DataTypes) {
    var Friendship = sequelize.define("Friendship", {
        accepted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
    });
    
    return Friendship;
};
