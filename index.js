const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const apiRoutes = require('./routes/api');
const mongoose = require('mongoose')


mongoose
.connect('mongodb://localhost/uber', { useNewUrlParser: true } )
.then( () => {
    console.log("We Are Connected To The Local Database")
})

app.use(bodyParser.json())


app.use('/api' ,  apiRoutes)


// app.get('/' , (req,res) => {

//     res.send({
//         name:"Rohito"
//     })
// })

const port = 3000
app.listen(process.env.PORT || port , () => {
    console.log("Express Server Live on Port : " + port)
})