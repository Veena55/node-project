const express = require('express');
const router = express.Router();
const commentsController =  require('../controllers/comment');
const passport = require('passport');


router.post('/add-comment', passport.checkAuthentication, commentsController.create);
router.get('/destroy/:id',passport.checkAuthentication,commentsController.destory);

module.exports = router;