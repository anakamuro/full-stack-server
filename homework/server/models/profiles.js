const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema(
    {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, 
    school: {
        type: String,
        required: true
    }, 
    health: {
        type: Number, 
        required: true,
        min: 1, 
        max: 10
    }
}, 
{
    timestamps: true
}
)

//mongosh collection character
const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile