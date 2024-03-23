const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    passowrd : String,
    role : {
        type : String,
        default : "Visitor"
    }
})

const UserModel = mongoose.model( "user", UserSchema)
module.exports = UserModel