const mongoose = require('mongoose')

const PackageSchema = mongoose.Schema(
  {
    name: String,   
    info:{
      type:String
    },
    prices:{
      type:String
    },
    size:{
      type:String
    }
    
  },
  { timestamps: true }
)

module.exports = mongoose.model("package", PackageSchema)