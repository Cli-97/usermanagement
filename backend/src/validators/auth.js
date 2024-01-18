const { check } = require('express-validator')
const client = require ('../../config/db')

const { compare } = require('bcryptjs')

//username
const username = check('username')
  .isLength({ min: 6, max:20 })
  .withMessage('Username has to be between 6 and 20 characters.')

//password
const password = check('password')
  .isLength({ min: 6, max: 15 })
  .withMessage('Password has to be between 6 and 15 characters.')

//email
const email = check('email')
  .isEmail()
  .withMessage('Please provide a valid email.')



//check if email exists
const emailExists = check('email').custom(async (value) => {
  const { rows } = await client.query('SELECT * from users WHERE email = $1', [
    value,
  ])

  if (rows.length) {
    throw new Error('Email already exists.')
  }
})

//login validation
const loginFieldsCheck = check('email').custom(async (value, { req }) => {
  const user = await client.query('SELECT * from users WHERE email = $1', [value])

  if (!user.rows.length) {
    throw new Error('Email does not exists.')
  }

  const validPassword = await compare(req.body.password, user.rows[0].password)

  if (!validPassword) {
    throw new Error('Wrong password')
  }

  /*const validRole = await compare(req.body.role_id, user.rows[0].role_id)

  if (!validRole) {
    throw new Error('Not Authorozed')
  }*/

  req.user = user.rows[0]
})

module.exports = {
  registerValidation: [username, password, email, emailExists],
  loginValidation: [loginFieldsCheck],
}