const Comment =  require('../models/comment');
const Post =  require('../models/post');

module.exports.create = async (req,res) => {
    const post = await Post.findById(req.body.post);
    if(post) {
        const comment = await Comment.create({
            content :  req.body.content,
            post : req.body.post,
            user : req.user._id
        });
        if(comment) {
            post.comments.push(comment);
            post.save();
        }
    }
    else {
        return;
    }
    return res.redirect('/');
}

module.exports.destory = async(req,res)=>{
   const comment = await Comment.findById(req.params.id);
   if(comment.user == req.user.id) {
    let postId = comment.post;
    comment.deleteOne();
    const post = await Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}});
    if(post) {
        return res.redirect('back');
    }
   }
}
