const mongoose = require('mongoose')
const Schema = mongoose.Schema

const extraSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  content: {
    type: String, 
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User"
  }
},
{
  timestamp: true,
})

module.exports = extraSchema