const mongoose = require('mongoose')

const BookSchema = mongoose.Schema(
  {
    userId: String,   
    packageId:{
      type:String
    },
    waxId:{
        type:String
    },
    status:{
      type:String
    },
    date:{
      type:String
    },
    time:{
      type:String
    }
    
  },
  { timestamps: true }
)

module.exports = mongoose.model("booking", BookSchema)