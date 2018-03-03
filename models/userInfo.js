module.exports = function(sequelize, DataTypes) {
    // Creates a "UserInfo" model that matches up with DB
var UserInfo = sequelize.define("UserInfo", {
    userId: {
        type:  DataTypes.INTEGER,
        primaryKey: true, 
    },
    username: {
        type:  DataTypes.STRING,
        allowNull: false
    },
    password: {
        type:  DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:  DataTypes.STRING,
        allowNull: false
    }
});
UserInfo.associate = function(models) {
    UserInfo.hasMany(models.Question1, {
        onDelete: "cascade"
    });
};
    return UserInfo;
};