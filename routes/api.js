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
   })
   // Error Handling 
   .catch( (err) => {
       console.log(err.message)
       res.status(422).send({
           err : err.message})
   })


})

router.put('/:id' , (req,res) => {

    console.log(req.params.id)

Driver.findByIdAndUpdate({ _id: req.params.id}, req.body)
.then( (driver) => {
    console.log("Driver Found" , driver)
    if(driver){
            driver.name = req.body.name,
            driver.car = req.body.car
        
            res.status(200).send({
                Message : "Driver Updated",
                Driver : driver
            })
        }
           
    else{
            res.send({
                Message : "Driver Does Not Exist in Database"
            })
        }
})
.catch( err => {
    res.send({
        Error : err.message
    })
})

    
})

router.delete('/:id' , (req,res,next) => {

    Driver.findOneAndDelete({ _id : req.params.id})
    .then( (driver) => {
        if(driver) {
            res.send({
                Driver_Deleted: driver
            })
        }
        else {
            res.send({
                Message : "Driver Does Not Exist"
            })
        }
        
    }).catch( err => {
        res.send("Error Handler",  err.message)
    })    
    // res.send({
    //     name: "Rohito Deletes"
    // })
})


module.exports =  router; 