const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
//for statcic files
app.use(express.static('./assets'))

app.use(expressLayouts);

//extratct styles & scripts from subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// use express router
app.use('/', require('./routes'));  


//setp ejs engine for views
app.set('view engine','ejs');
//path for views
app.set('views','./views');



app.listen(port, (err)=>{
    if(err) {
        console.log("Something went wrong");
        return;
    }
    console.log(`Server is running on ${port}`);
})

// console.log("Hi");