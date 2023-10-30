module.exports.home = function (req,res) {
    console.log("Hi");
    return res.render('home',{
        title: "Home"
    });
}