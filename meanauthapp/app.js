const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

//connect to Database
mongoose.connect(config.database);//,{useMongoClient:true});

//On connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database: '+config.database);
});

// On Error
mongoose.connection.on('error',(err)=>{
    console.log('Database Error: '+err);
});

const app = express();
const users = require('./routes/users');

//Port number
const port = 3000;

//COrS Middleware
app.use(cors());

//Static Folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser Middleware
app.use(bodyparser.json());
app.use('/users',users);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Index route
app.get('/',(req,res)=>{
    res.send('Invalid endpoint');    
});

app.listen(port,()=>{
    console.log('Server started at port: ' + port);
});
