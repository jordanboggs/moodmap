module.exports = function (sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
        questionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        timestamps: true
    });
    Questions.associate = function (models) {
        Questions.belongsTo(models.UserInfo, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Questions;
};