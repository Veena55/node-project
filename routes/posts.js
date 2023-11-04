const express = require('express');
const router = express.Router();
const postsController =  require('../controllers/post');
const passport = require('passport');


router.post('/create-post', passport.checkAuthentication, postsController.create);
router.get('/destroy/:id',passport.checkAuthentication, postsController.destroy);

module.exports = router;