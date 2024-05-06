const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema(
  {
    name: String,   
    surname:{
      type:String
    },
    tel:{
      type:String
    },
    username:{
      type:String
    },
    password: {
      type: String,
    },
    role:{
      type: String
    },
    waxId:{
      type: String
    },
    waxValue:{
      type: Number
    }
    
  },
  { timestamps: true }
)

module.exports = mongoose.model("information", RegisterSchema)