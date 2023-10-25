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
module.exports.create = (req,res) => {
    //To do later
}

//sign in and create a session for the user
module.exports.createSession = (req,res) => {
    //To do later
}
