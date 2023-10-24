const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
console.log("Router loaded");

router.use('/',homeController.home);

module.exports = router;