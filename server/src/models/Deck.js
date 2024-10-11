// create your User model here
const { db, DataTypes, Model } = require("../db/config.js");

class Deck extends Model {};

Deck.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
}, {
    sequelize: db,
    modelName: "Deck"
});

module.exports = { Deck };
