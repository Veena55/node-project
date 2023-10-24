module.exports.profile = (req,res) => {
    return res.render('users',{
        title : "Profile",
        description: "My Name is Veena ! I love to do coding 👩🏽‍💻👩‍💻"
    });
}