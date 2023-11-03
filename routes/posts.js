const express = require('express');
const router = express.Router();
const postsController =  require('../controllers/post');
const passport = require('passport');


router.post('/create-post', passport.checkAuthentication, postsController.create);

module.exports = router;