const Post = require('../models/post');
module.exports.home =  async(req,res) => {
    console.log("Hi");
    const allPosts = await Post.find({}).populate('user').exec();
    console.log(allPosts);
    return res.render('home',{
        title: "Home",
        allPosts : allPosts
    });
}

