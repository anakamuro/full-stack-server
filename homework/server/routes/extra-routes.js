const express = require('express');

const Name = require('../models/name')
const {handle404} = require('../lib/custom-errors')
//const {requireToken} = require('../config/auth')
const router = express.Router()

//Create
//POST /notes
router.post('/extras', (req, res, next) => {
  const nameId = req.body.extra.nameId
  console.log(req.body)
  console.log(nameId, 'nameId')
  console.log(req.user)
  const extra = req.body.extra
//adding an owner field 
  extra.owner = req.user._id
  //find the Campaign that I want to add the note too
  //once found 'push' the note into the mongoose Array
  // send status of 201 created if success
  //next if failure
  Name.findById(nameId)
      .then(handle404)
      .then(name => {
        name.extras.push(extra)

        // have to save the doc when modified
        return name.save()
      })
      .then(name => {
        res.status(201).json({ name: name})
      })
      .catch(next)
})

//Update
//patch notes/:id

router.patch('/extras/:extraId', (req, res, next)=> {
    const nameId = req.body.extra.nameId
    const extraBody = req.body.extra

    Name.findById(nameId)
     .then(handle404)
     .then(name => {
        const extra = name.extras.id(req.params.extraId)

        //setting the new note content to the content passed in
        extra.set(extraBody)
        // I have modified the doc I need to save it
        return name.save()
     })
 .then(() => res.sendStatus(204))
 .catch(next)

})

//Delete

router.delete('/extras/:extraId', (req, res, next)=> {
    const nameId = req.body.extra.nameId

    Name.findById(nameId)
    .then(handle404)
    .then(name => {
        //finding the correct note to remove
        
        name.extras.id(req.params.extraId).remove()
        //since I 've modified I have to save
        return name.save()
    })
    .then(() => res.sendStatus(404))
    .catch(next)
})
module.exports = router;