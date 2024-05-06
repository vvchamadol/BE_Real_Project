const mongoose = require('mongoose')

const BookSchema = mongoose.Schema(
  {
    userId: {
      type:String   
    },
    packageId:{
      type:String
    },
    waxAction:{
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
    },
    month:{
      type:String
    },
    year:{
      type:String
    },
    name:{
      type:String
    },
    surname:{
      type:String
    }
    
    
  },
  { timestamps: true }
)

module.exports = mongoose.model("booking", BookSchema)