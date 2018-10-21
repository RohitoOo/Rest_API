const express = require('express');

const router = express.Router();

const Driver  = require('../models/Drivers')


router.get('/' , (req,res) => {

    res.send({
        name: "Rohito"
    })
})

router.post('/' , (req,res) => {

    const newDriver = new Driver({
        name: "Driver 1",
        car: "Honda",
        available: true
    })
   newDriver.save()
   .then( () => {
       res.send("Driver Saved To Database")
   })


})

router.put('/:id' , (req,res) => {

    console.log(req.params.id)

    res.send({
        name: "Rohito Updates"
    })
})

router.delete('/:id' , (req,res) => {

    console.log(req.params.id)

    res.send({
        name: "Rohito Deletes"
    })
})


module.exports =  router; 