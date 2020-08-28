const express= require("express")
const app = express()

app.use(express.json())


var birds = require('./routes/birds')
app.use('/birds', birds)

app.listen(3000)    