const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeController = require('../controllers/home');

console.log("Router loaded");

router.get('/',homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));

module.exports = router;