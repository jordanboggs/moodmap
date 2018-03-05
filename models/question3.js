module.exports = function (sequelize, DataTypes) {
    var Question3 = sequelize.define("Question3", {
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        answer: {
            type:  DataTypes.STRING,
            allowNull: false
        }
    });
    Question3.associate = function (models) {
        Question3.belongsTo(models.UserInfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Question3;
};