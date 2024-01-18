const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const{authorizeUser} = require('../middleware/authUser')
const client = require('../../config/db.js')
const SECRET = process.env.SECRET
exports.getUsers = async (req, res) => {
  try {
    const { rows } = await client.query('select * from users')

    return res.status(200).json({
      success: true,
      users: rows,
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.register = async (req, res) => {
  const { user_id, username, password, email, role_id } = req.body;

try {
  const hashedPassword = await hash(password, 10);

  // Retrieve role_id from the roles table
  const roleIdResult = await client.query('SELECT role_id FROM roles WHERE role_name = $1', ['admin']);
  const roleId = roleIdResult.rows[0].role_id;

  // Insert into users relation
  const result = await client.query('INSERT INTO users(user_id, username, password, email, role_id) VALUES ($1, $2, $3, $4, $5) RETURNING user_id', 
    [user_id, username, hashedPassword, email, roleId]);

  // Retrieve the user_id from the result
  const userId = result.rows[0].user_id;

  // Insert user_id and role_id into the user_roles table
  await client.query('INSERT INTO user_roles (user_id, role_id) VALUES ($1, $2)', [userId, roleId]);
    

    return res.status(201).json({
      success: true,
      message: 'The registraion was sucessful',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.isAdmin = async (req, res, next) => {
  if(req.user.role_id ==='usr'){
    return next(new ErrorResponse("You must be an admin", 401));
  }
  next();
}

exports.login = async (req, res) => {
  let user = req.user
  //return console.log(user)

  let payload = {
    user_id: user.user_id,
    username: user.username,
    password: user.password,
    email: user.email,
    role_id: user.role_id,
  }

  try {
    const token = await sign(payload, SECRET)

    return res.status(200).cookie('token', token, { httpOnly: true }).json({
      success: true,
      message: 'Logged in sucessfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: 'protected info',
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Logged out succefully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}