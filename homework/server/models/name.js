// require mongoose
const mongoose = require('mongoose')
const extraSchema = require('./extra')
// Getting the Schema from Mongoose
const Schema = mongoose.Schema

// Creating a new campaign Schema
const nameSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		//when you see arrays in JS think of many
		extra: [extraSchema]
	},
	{
		timestamps: true,
	}
)

// Creating a Mongoose Model called Campaign
// Collection will be called campaigns
const Name = mongoose.model('Name', nameSchema)

// Exporting Campaign model to use elsewhere
module.exports = Name
