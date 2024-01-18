// File: routes/protectedRoute.js

const express = require('express');
const { authorizeUser } = require('../middleware/authUser');

const router = express.Router();

// Example route with role-based authorization
router.get('/protectedApi', authorizeUser(['adm']), (req, res) => {
  //res.json({ message: 'You have access to this protected route.' });
});
module.exports = router;
