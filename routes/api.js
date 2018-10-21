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
        name: req.body.name,
        car: req.body.car
        })
   newDriver.save()
   .then( () => {
       res.send("Driver Saved To Database")
   }).catch( (err) => {
       console.log(err.message)
       res.status(422).send({
           err : err.message})
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