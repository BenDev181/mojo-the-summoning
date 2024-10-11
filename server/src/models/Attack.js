// create your User model here
const { title } = require("process");
const { db, DataTypes, Model } = require("../db/config.js");

class Attack extends Model {};

Attack.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
}, {
    sequelize: db,
    modelName: "Attack"
});

module.exports = Attack;
