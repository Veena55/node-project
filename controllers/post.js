const Comment = require('../models/comment');
const Post = require('../models/post');
const passport = require('passport');
module.exports.create = async (req,res) => {
   const post = await Post.create({
        content : req.body.content,
        user : req.user._id
    });
    // console.log(req);
    return res.redirect('back');
}

module.exports.destroy = async(req,res) =>{
    const post = await Post.findById(req.params.id);        
        // console.log(req.user.id, post.user);
    if(post.user == req.user.id) {
        console.log("Inside delete");
       post.deleteOne();
    const deleteAllcomments = await Comment.deleteMany({post : req.params.id}); 
    }
    return res.redirect('back');
}