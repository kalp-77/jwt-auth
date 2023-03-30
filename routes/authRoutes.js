const express = require('express');
const authController = require('../controllers/authController');
// creating new instance of the router
const router = express.Router();


// GET: signup
router.get('/signup', authController.get_signup);
// POST: signup
router.post('/signup', authController.post_signup);
// GET: signup
router.get('/login', authController.get_login);
// POST: signup
router.post('/login', authController.post_login);


module.exports = router;