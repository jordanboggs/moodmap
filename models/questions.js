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
    Questions.sync().then(() => {
        //first set of question dummy data
        Questions.create({
            questionId: 1,
            answer: "5",
            UserUserId: 1
        });
        Questions.create({
            questionId: 2,
            answer: "3",
            UserUserId: 1
        });
        Questions.create({
            questionId: 3,
            answer: "2",
            UserUserId: 1
        });
        Questions.create({
            questionId: 4,
            answer: "1",
            UserUserId: 1
        });
        Questions.create({
            questionId: 5,
            answer: "5",
            UserUserId: 1
        });
        //second set of question dummy data
        Questions.create({
            questionId: 1,
            answer: "4",
            UserUserId: 2
        });
        Questions.create({
            questionId: 2,
            answer: "1",
            UserUserId: 2
        });
        Questions.create({
            questionId: 3,
            answer: "1",
            UserUserId: 2
        });
        Questions.create({
            questionId: 4,
            answer: "1",
            UserUserId: 2
        });
        Questions.create({
            questionId: 5,
            answer: "3",
            UserUserId: 2
        });
    });
    Questions.associate = function (models) {
        Questions.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Questions;
};