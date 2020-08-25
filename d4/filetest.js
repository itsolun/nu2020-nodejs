var fs = require('fs');

//EX-1: writeing in file example
// var data = "data to write in file";

// fs.writeFile('sample.txt',data,function(err){
//     if(err)
//          throw err;
//     console.log("File created successfully");
// })

//EX-2: reading from file example
// fs.readFile('sample.txt',function(err,data){
//     if(err) throw err;
//     //data is Buffer
//     console.log(data.toString('utf8'));
// })

//EX-2: reading HTML file example
fs.readFile('./d4/sample.html',function(err,data){
    if(err) throw err;
    //data is Buffer
    console.log(data.toString('utf8'));
})