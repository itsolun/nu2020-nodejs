var express = require('express')
var router = express.Router()
const app = express();

var birds = require('./routes/birds')
app.use('/birds', birds);

var cats = require('./routes/cats')
app.use('/cats', cats);

var dogs = require('./routes/dogs')
app.use('/dogs', dogs);

app.listen(3000);
