const passport = require('passport')
const { Strategy } = require('passport-jwt')
const SECRET = 'SECRET';
//const { SECRET } = require('../constants')
//const db = require('../db')
const {Client} = require("pg");
const client = new Client ({
  user: "postgres",
  host: "localhost",
  database: "pern",
  password: "postgres",
  port: 5433,
  SECRET: process.env.SECRET,
  SERVER_URL: process.env.SERVER_URL,
  CLIENT_URL: process.env.CLIENT_URL
})
client.connect();

const cookieExtractor = function (req) {
  let token = null
  if (req && req.cookies) token = req.cookies['token']
  return token
}

const opts = {
  secretOrKey: SECRET,
  jwtFromRequest: cookieExtractor,
}

passport.use(
  new Strategy(opts, async ({ user_id }, done) => {
    try {
      const { rows } = await client.query(
        'SELECT user_id, username, password, email, role_id FROM users WHERE user_id = $1',
        [user_id]
      )

      if (!rows.length) {
        throw new Error('401 not authorized')
      }

      let user = { user_id: rows[0].user_id, username: rows[0].username, 
        password: rows[0].password, email: rows[0].email, role_id: rows[0].role_id, }

      return await done(null, user)
    } catch (error) {
      console.log(error.message)
      done(null, false)
    }
  })
)
