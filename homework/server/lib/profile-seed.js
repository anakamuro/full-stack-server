const express = require('express')

const router = express.Router()

const Profile = require('../models/profiles')

const startingProfiles = [
	{
		firstName: 'Sam',
		lastName: 'Gamgee',
		school: 'BU',
		health: 9,
	},
	{
		firstName: 'Gandalf',
		lastName: 'The White',
		class: 'Harvard ExtensionSchool',
		health: 6,
	},
	{
		firstName: 'Aragorn',
		lastName: 'Strider',
		school: 'General Assembly',
		health: 7,
	},
]

// /seed/characters
router.get('/profiles', (req, res, next) => {
    Profile.deleteMany({})
        .then(() => {
            Profile.create(startingProfiles)
                .then(profiles => {
                    res.status(200).json({ profiles: profiles })
                })
        })
        .catch(next)
})

module.exports = router