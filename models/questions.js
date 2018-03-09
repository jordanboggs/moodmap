module.exports = function (sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
		id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        questionId: {
            type: DataTypes.INTEGER,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            // allowNull: false
        }
    }, {
        timestamps: true
    });
    // Questions.sync();
    Questions.associate = function (models) {
        Questions.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Questions;
};