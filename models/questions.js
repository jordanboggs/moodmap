module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define("Question1", {
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        answer: {
            type:  DataTypes.STRING,
            allowNull: false
        }
    });
    Question.associate = function (models) {
        Question.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Question;
};
