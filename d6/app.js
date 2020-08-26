const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

//https://mongoosejs.com/docs/guide.html#_id
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

const Product = mongoose.model("Product",productSchema);

//CRUD
//create, read, update, delete
//queries documentation
//https://mongoosejs.com/docs/queries.html


//create  
const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: "dummy product 1",
    price: 10.5
  });

  product
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

//read
//get product by id
Product.findOne({_id:"5f46ac097e2c98085c25cf40"})
    .exec()
    .then(prod => {
           console.log("product: "+prod.name+", price: "+prod.price);
    })
    .catch(err => {
      console.log(err);
    });

    //update
    //edit product by id
    let id="5f46ac097e2c98085c25cf40";
    Product.update({ _id: id },{price:100})
    .exec()
    .then(result => {
           console.log(result);
    })
    .catch(err => {
      console.log(err);
    });


    //delete
    // remove product by id
    Product.remove({_id:"5f46c8346b5641170431352e"})
    .exec()
    .then(result => {
           console.log(result);
    })
    .catch(err => {
      console.log(err);
    });



//list all products(find all products)
Product.find()
    .exec()
    .then(prod => {
        for(i=0;i<prod.length;i++)
           console.log(prod[i].name+", id: "+prod[i]._id+" price:"+prod[i].price);

    })
    .catch(err => {
      console.log(err);
    });