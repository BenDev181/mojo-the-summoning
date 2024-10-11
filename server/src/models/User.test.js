const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Deck, Card, Attack } = require('.')
const { db } = require('../db/config.js')

// define in global scope
let user;
let deck;
let card;
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({username: 'gandalf' })

  //user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('User has an id and email properties', async () => {
    expect(user).toHaveProperty('id')
    expect(user.username).toBe('gandalf')
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})
