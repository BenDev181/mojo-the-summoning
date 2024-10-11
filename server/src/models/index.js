const { User } = require('./User.js');
const { Deck } = require('./Deck.js');
const { Card } = require('./Card.js');
const { Attack } = require('./Attack.js');

User.hasOne(Deck);
Deck.belongsTo(User);

Deck.hasMany(Card);
Card.belongsTo(Deck);

Card.belongsToMany(Attack, {through: "CardAttacks"});
Attack.belongsToMany(Card, {through: "CardAttacks"});

module.exports = {
    User,
    Deck,
    Card,
    Attack
}
