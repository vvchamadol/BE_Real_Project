const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: String,
    password: {
        type: String
    }
},  {timestamps: true})

module.exports = mongoose.model("userlogin", UserSchema)