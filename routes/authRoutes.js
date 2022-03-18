const express = require('express')
const router = express.Router()

const rateLimiter = require('express-rate-limit')

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 10,
  message: 'Too many requests from this IP. Please try again after 15 minues.',
})

const {
  register,
  login,
  updateUser,
} = require('../controllers/authController.js')
const authenticateUser = require('../middleware/auth.js')

router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser)

module.exports = router
