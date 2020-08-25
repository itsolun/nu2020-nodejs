const express = require('express');
const app = express();

app.use(express.json())

let products = [
    {id:1,name:"Noodles",price:10.5},
    {id:2,name:"Milk",price:20.5},
    {id:3,name:"Egg",price:1.5},
    {id:4,name:"Rice",price:10.5},
    {id:5,name:"Pepsi",price:5.0},
];
let c = products.length;

app.get('/', function (req, res) {
    res.send('hello world');
  })
const productbaseurl = "/products";
//get all products
app.get(productbaseurl, function (req, res) {
    res.json(products);
  }) 
//add product and return product with id
app.post(productbaseurl, function (req, res) {
    //check security through jwt
    //get request body and turn to json object
    //validate request
    //insert into database
    //retuen new object

    const product = {
        id:c++,
        name: req.body.name,
        price: req.body.price
    }    
    products.push(product);
    res.send(products);
  }) 


//show product details by id
// app.get(productbaseurl+'/:id', function (req, res) {
//     let ids = parseInt(req.params.id);
//     const product = products.find(p => p.id === ids);
//     res.send(roduct);
//   }) 
  app.get(productbaseurl+'/:name', function (req, res) {
    // let ids = parseInt(req.params.id);
    const product = products.find(p => p.name === req.params.name);
    res.send(product);
  }) 


//delete product by id
  app.delete(productbaseurl+'/:id', function (req, res) {
    let ids = parseInt(req.params.id);
    const product = products.find(p => p.id === ids);
    const index = products.indexOf(product)
    products.splice(index,1)
    res.json(products);
  }) 

//update product by id
  app.put(productbaseurl+'/:id', function (req, res) {
    let ids = parseInt(req.params.id);
    const product = products.find(p => p.id === ids);
    res.send('update product '+product.name);
  }) 
app.listen(3000)