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
        }
    }, {
        timestamps: true,
        // createdAt: true,
        updatedAt: false
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