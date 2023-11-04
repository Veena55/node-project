const Comment = require('../models/comment');
const Post = require('../models/post');
module.exports.home =  async(req,res) => {
    console.log("Hi");
    const allPosts = await Post.find({})
    .populate('user')
    .populate({
        path: "comments",
        populate:{
            path:'user'
        }})
    .exec();
    // const allComments = await Comment.find({}).populate('user').exec();
    return res.render('home',{
        title: "Home",
        allPosts : allPosts,
        // allComments : allComments
    });
}

