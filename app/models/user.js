/* jshint indent: 2 */
const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define('user', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    user_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'user'
  });

  // Class Methods
	user.cryptPassword = (plainText) => {
		return new Promise((resolve, reject) => {
			bcrypt.genSalt(10, (err, salt) => {
				if (err) reject(err);
				else {
					bcrypt.hash(plainText, salt, (err, hash) => {
						if (err) reject(err);
						else resolve(hash);
					});
				}
			});
		});
	};

	// Instance Methods
	user.prototype.authenticate = (plainText,db_password) => {
		return new Promise((resolve, reject) => {
			console.log("plainText",plainText);
			console.log("password",db_password);
			bcrypt.compare(plainText, db_password, (err, res) => {
				if (err) reject(err);
				else resolve(res);
			});
		});
	};

	// Hooks(automatically called)
	user.beforeCreate((usr, options) => {
    console.log("blablkajsdlkfjlaksdjlfasldfa");
		if (usr.user_password) {
			if (usr.user_password.length >= 6) {
				return user.cryptPassword(usr.user_password)
					.then((hash) => {
						usr.user_password = hash;
					})
					.catch((err) => {
						if (err) throw new Error(err);
					});
			} else {
				throw new Error('Too short password length minimum 6.');
			}
		}
  });

  return user;
};
