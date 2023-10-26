const User = require('../models/users');
module.exports.profile = (req,res) => {
    return res.render('users',{
        title : "Profile",
        description: "My Name is Veena ! I love to do coding 👩🏽‍💻👩‍💻"
    });
}

module.exports.sign_in = function (req,res) {
    return res.render('sign_in',{
        title: "Sign In"
    });
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
             console.log(result);
        return res.redirect('/users/signin');
    } else {
        return res.redirect('back');
    }
    } catch (error) {
        console.log("SOmething went wrong while signup", error);
    }
    
//    }
}

//sign in and create a session for the user
module.exports.createSession = (req,res) => {
    //To do later
}
