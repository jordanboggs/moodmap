module.exports = function (sequelize, DataTypes) {
    var Question4 = sequelize.define("Question4", {
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        answer: {
            type:  DataTypes.STRING,
            allowNull: false
        }
    });
    Question4.associate = function (models) {
        Question4.belongsTo(models.UserInfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Question4;
};