const mongoose = require('mongoose')

const WaxSchema = mongoose.Schema(
  {
    name: String,   
    serial:{
      type:String
    },
    volume:{
        type:String
    },
    prices:{
      type:String
    },
    amount:{
      type:String
    }
    
  },
  { timestamps: true }
)

module.exports = mongoose.model("wax", WaxSchema)