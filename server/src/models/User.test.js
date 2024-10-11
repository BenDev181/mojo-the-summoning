const { describe, test, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Deck, Card, Attack } = require('.')
const { db } = require('../db/config.js')

// define in global scope
let user;
let deck;
let card1;
let card2;
let attack1;
let attack2;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({username: 'gandalf' })
  deck = await Deck.create({name: "Fire Deck", xp: 10})
  card1 = await Card.create({
    name: 'Alaric Flamecaller',
    mojo: 100,
    stamina: 10,
    imgUrl: 'http://localhost:5000/img/alaric-flamecaller.jpg',
  })
  card2 = await Card.create({
    name: 'Theron Thunderstrike',
    mojo: 100,
    stamina: 10,
    imgUrl: 'http://localhost:5000/img/theron-thunderstrike.jpg',
  })
  attack1 = await Attack.create({ title: "Fireball", mojoCost: 30, staminaCost: 25 })
  attack2 = await Attack.create({ title: "Thunderbolt", mojoCost: 20, staminaCost: 10 })
})

// clear db after tests
//afterAll(async () => await db.sync({ force: true }))

describe('Models Tests', () => {
  test('User entries contain properties', async () => {
    expect(user).toHaveProperty('id')
    expect(user.username).toBe('gandalf')
  })

  test('Deck entries contain properties', async () => {
    expect(deck).toHaveProperty('id')
    expect(deck.name).toBe('Fire Deck')
  })

  test('Card entries contain properties', async () => {
    expect(card1).toHaveProperty('id')
    expect(card1.name).toBe('Alaric Flamecaller')
  })

  test('Attck entries contain properties', async () => {
    expect(attack1).toHaveProperty('id')
    expect(attack1.title).toBe('Fireball')
  })
})

describe('Association Tests', () => {
  test('User can only have one deck', async () => {
    await user.setDeck(deck)
    const userDeck = await user.getDeck()
    expect(userDeck.id).toBe(deck.id)
  })

  test('Deck can have multiple cards', async () => {
    await deck.addCard(card1)
    await deck.addCard(card2)

    const deckCards = await deck.getCards()
    expect(deckCards instanceof Card).toBeTruthy; 
  })

  test('Cards can have multiple attacks', async () => {
    await card1.addAttack(attack1)
    await card1.addAttack(attack2)

    const cardAttacks = await card1.getAttacks()
    console.log(cardAttacks)
    
    expect(cardAttacks.length).toBe(2);
  })


})
