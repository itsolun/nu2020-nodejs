const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

//https://mongoosejs.com/docs/guide.html#_id
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);

//CRUD
//create, read, update, delete
//queries documentation
//https://mongoosejs.com/docs/queries.html

app.post('/products', function (req, res) {
  //create  
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });

  product
    .save()
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
});
//read
//get product by id
app.get('/products/:id', function (req, res) {
  Product.findOne({ _id: req.params.id })
    .exec()
    .then(prod => {
      console.log("product: " + prod.name + ", price: " + prod.price);
      res.status(200).send(prod);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });

});


app.patch('/products/:id', function (req, res) {
  //update
  //edit product by id
  let id = req.params.id;
  Product.update({ _id: id }, { price: 100 })
    .exec()
    .then(result => {
      console.log(result);
      res.status().send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
});
app.get('/products/:id', function (req, res) {
  //delete
  // remove product by id
  Product.remove({ _id:req.params.id })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.get('/products', function (req, res) {
  //list all products(find all products)
  Product.find()
    .exec()
    .then(prod => {
      for (i = 0; i < prod.length; i++)
        console.log(prod[i].name + ", id: " + prod[i]._id + " price:" + prod[i].price);
      res.status(200).json(prod);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.listen(3000);