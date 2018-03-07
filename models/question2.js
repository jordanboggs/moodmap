module.exports = function (sequelize, DataTypes) {
    var Question2 = sequelize.define("Question2", {
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        answer: {
            type:  DataTypes.STRING,
            allowNull: false
        }
    });
    Question2.associate = function (models) {
        Question2.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Question2;
};