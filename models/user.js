module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('User', {
		userId: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		firstname: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		lastname: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		username: {
			type: Sequelize.TEXT
		},
		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		last_login: {
			type: Sequelize.DATE
		},
		status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}
	});
	User.sync().then(() => {
		//Dummy user data
		User.create({
		  userId: 1,
		  firstname: 'Gregory',
		  lastname: "Heroku",
		  username: "gherokudude",
		  email: "gherokudude@whatever.com",
		  password: "fjkelwjfew"
		});
		User.create({
			userId: 2,
			firstname: 'Marjorie',
			lastname: "Smoethson",
			username: "majormarjorie",
			email: "somethingelse@something.com",
			password: "fjkelwjfew"
		  });
	  });
	User.associate = function(models) {
    User.hasMany(models.Questions, {
            onDelete: "cascade"
        });
    };
  return User;
}