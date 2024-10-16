// create your User model here
const { db, DataTypes, Model } = require("../db/config.js");

class User extends Model {};

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: DataTypes.STRING,
}, {
    sequelize: db,
    modelName: "User"
});

module.exports = {User};
