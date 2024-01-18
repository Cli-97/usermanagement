const {Router} = require("express");
//const {get} = require('../controllers/user-roles')
const { getUsers,
    register,
    login,
    protected,
    logout,
    registration,
    isAdmin, } = require("../controllers/auth");


const {
        validationMiddleware,
      } = require('../middleware/validations-middleware')

const { registerValidation, loginValidation } = require('../validators/auth')

const { userAuth } = require('../middleware/auth-middleware')

const { authorizeUser } = require('../middleware/authUser');

const router = Router();

router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/all-users', userAuth, authorizeUser(['adm']), getUsers)
router.get('/protected', userAuth, protected)
router.get('/logout', userAuth, logout)

module.exports = router