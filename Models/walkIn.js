const mongoose = require('mongoose')

const WalkInSchema = mongoose.Schema(
  {
    username: String,   
    name:{
      type:String
    },
    surname:{
      type:String
    },
    tel:{
      type:String
    },
    packageId: {
      type: String,
    },
    carLicence: {
        type: String,
      },
    waxId: {
        type: String,
      },
    status: {
        type: String,
      },
    process: {
        type: String,
      },
    date: {
        type: String
    },
    time: {
        type: String
    }
    
  },
  { timestamps: true }
)

module.exports = mongoose.model("walkin", WalkInSchema)