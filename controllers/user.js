const passport = require('passport');
const User = require('../models/users');
module.exports.profile = (req,res) => {
    // if(!req.cookies.user_id) {
        // return res.redirect('/users/profile');
    // }
    return res.render('users',{
        title : "Profile",
        description: "My Name is Veena ! I love to do coding 👩🏽‍💻👩‍💻"
    });
}

module.exports.sign_in = async (req,res) => {
    if(req.isAuthenticated()) {
        return res.redirect('back');
    }
    return res.render('sign_in', {
        title: "Codeial | Sign In"
    }); 
}

module.exports.destroysession = async(req,res) => {
    req.session.destroy();
    return res.redirect('/');
}

module.exports.sign_up = function (req,res) {
    return res.render('sign_up',{
        title: "Sign Up"
    });
}

//get the signup data
module.exports.create = async (req,res) => {
    try {
        
        if(req.body.password != req.body.confirm_password) {
         return res.redirect('back');
        }
        let user = await User.findOne({email: req.body.email});     
         if(!user) {
             const result = await User.create(req.body);
        return res.redirect('/users/signin');
    } else {
        return res.redirect('back');
    }
    } catch (error) {
        console.log("Something went wrong while signup", error);
    }
    

}

//sign in and create a session for the user
// module.exports.createSession = async(req,res) => {
//     let user = await User.findOne({email: req.body.email});
//     if(user) {
//        if(user.password == req.body.password) {
//            res.cookie('user_id', user.id)
//            return res.redirect('/users/profile');
//     } 
// }
//         return res.redirect('back');

// }



// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}