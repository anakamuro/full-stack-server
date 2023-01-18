const express = require('express');


const Profile = require('../models/profiles')

const router = express.Router()

//index
//get /charcters
router.get('/profiles', (req, res, next) => {
  Profile.find()
    .then(profiles => {
      return profiles.map(profile => profile)
    })
    .then(profiles => {
      res.status(200).json({ profiles: profiles})
    })
    .catch(next)
})

//SHOW
//GET /charcter/:id

router.get('/profiles/:id', (req, res, next) => {
  Profile.findId(req.params.id)
  .then(profile => {
    res.status(200).json({profile: profile})
  })
  .catch(next)
})

//CREATE
//POST /charcters
router.post('./profiles', (req, res, next) => {
    //req.body
    //charcter: {}
  Profile.create(req.body.profile)
  .then(profile => {
   //top level of this object is character
    res.status(201).json({ profile: profile})
  })
  .catch(next)
})

module.exports = router