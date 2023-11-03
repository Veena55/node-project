const Post = require('../models/post');
const passport = require('passport');
module.exports.create = async (req,res) => {
   const post = await Post.create({
        content : req.body.content,
        user : req.user._id
    });
    console.log(req);
    return res.redirect('back');
}

