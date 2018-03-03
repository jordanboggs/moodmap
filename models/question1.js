module.exports = function (sequelize, DataTypes) {
    var Question1 = sequelize.define("Question1", {
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        answer: {
            type:  DataTypes.STRING,
            allowNull: false
        }
    });
    Question1.associate = function (models) {
        Question1.belongsTo(models.UserInfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Question1;
};
