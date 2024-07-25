const mongoose = require('mongoose');

const approvedSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: String,
    bloodType: String,
    requestCategory:String,
    ailments:String,
    unitsRequired:Number,
    status:String
    
    
    
});

const Approved = mongoose.model('approved', approvedSchema);

module.exports = Approved;
