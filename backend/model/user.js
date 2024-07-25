const mongoose = require ('mongoose');
const schema = mongoose.Schema({            //variable can be any name
    name:String,                            //Schema is a property
    age:Number,                                //inorder to have backend validation we can add require
    email:String,
    phone:Number,
    bloodType:String,
    unitsRequired:Number,
    requestCategory:String,
    ailments:String                                
})

const userModel = mongoose.model("logins",schema);        //model adds data in db.
module.exports=userModel;
