'use strict';

module.exports = function(sequelize, DataTypes) {
    var moodMap = sequelize.define('moodMap', {
        UserId: DataType.INTEGER,
        FirstName: DataType.STRING,
        LastName: DataType.STRING,
        Age: DataType.INTEGER,
        Email: DataType.STRING,
    }, {
        classMethods: {
            associate: function(models){
                // Associations defined here
            }
        }
    });
    return moodMap;
};

sequelize.sync().then(function() {
    return moodMap.create({
        FirstName: 'Jane',
        LastName: 'Doe',
        Age: 15,
        Email: "janedoe@gmail.com"
    });
}).then(funciton(userInfo){
    console.log(userInfo.get({
        plain: true
    }));
});