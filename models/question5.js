module.exports = function (sequelize, DataTypes) {
    var Question5 = sequelize.define("Question5", {
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        answer: {
            type:  DataTypes.STRING,
            allowNull: false
        }
    });
    Question5.associate = function (models) {
        Question5.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Question5;
};