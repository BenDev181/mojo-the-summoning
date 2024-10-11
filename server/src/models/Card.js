// create your User model here
const { db, DataTypes, Model } = require("../db/config.js");

class Card extends Model {};

Card.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
}, {
    sequelize: db,
    modelName: "Card"
});

module.exports = Card;
