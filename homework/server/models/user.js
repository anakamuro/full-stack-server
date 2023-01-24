const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		// field  - email unique:true
		email: {
			type: String,
			required: true,
			//if there is a doc with the email, donot create it. It's already in use
			unique: true,
		},
		// hashed paaword results 
		password: {
			type: String,
			required: true,
		},
		// notice how it's not required
		// start off without a token then save on later
		token: String,
	},
	{
		timestamps: true,
		toJSON: {
			transform: (_doc, user) => {
				delete user.password
				return user
			},
		},
	}
)

module.exports = mongoose.model('User', userSchema)
