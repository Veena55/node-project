const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const passport = require('passport');

router.get('/profile', passport.checkAuthentication ,userController.profile);
router.get('/signin',userController.sign_in);
router.get('/signup',userController.sign_up);
router.get('/signout',userController.destroysession);
router.post('/create', userController.create);
router.post('/create-session', passport.authenticate('local', {failureRedirect : '/users/signin'}) ,userController.createSession);



module.exports = router;