const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/profile',userController.profile);
router.get('/signin',userController.sign_in);
router.get('/signup',userController.sign_up);
router.post('/create', userController.create);


module.exports = router;