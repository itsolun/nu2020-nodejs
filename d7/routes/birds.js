var express = require('express')
var router = express.Router()
const Joi = require('joi');

// // middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

const schema = Joi.object({
  name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
age:Joi.number()
});
router.get('/welcome', function (req, res) {
  const result = schema.validate(req.body);
  if(result.error){
    return res.status(400).send("parameter name is missing or invalid");
  }
    // if(!req.body.name) res.status(400).send("parameter name is missing") ;
    // else 
    res.send('welcome '+req.body.name);
})

module.exports = router