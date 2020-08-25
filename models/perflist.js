module.exports = function (sequelize, DataTypes) {
    var PerformanceList = sequelize.define("PerformanceList", {}, { timestamps: false });

    return PerformanceList;
};