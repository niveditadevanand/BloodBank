const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: Number,
    bloodGroup : String,
    password: String
  
})

const RegisterModel = mongoose.model("register",RegisterSchema)
module.exports =RegisterModel