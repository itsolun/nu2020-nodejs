//npm i express-fileupload
//npm i express
const express = require('express');
var app = express();

app.use(express.static('uploads'));

const fileupload = require('express-fileupload');

app.use(fileupload());

app.post("/upload", function(req, res, next) {
    const file = req.files.photo;
    file.mv('./d8/fileuploader/uploads/' + file.name, function(err, result) {
     if(err) 
      throw err;
     res.send({
      success: true,
      message: "File uploaded!"
     });
    })
   })
   
app.listen(3000);
   