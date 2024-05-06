const mongoose = require('mongoose')

const RecordSchema = mongoose.Schema(
  {
    bookId: String,   
    walkinId:{
      type:String
    },
    status:{
      type:String
    },
    total: {
        type:Number
    },
    name:{
          type:String
    },
    surname:{
          type:String
    },
    packageId:{
          type:String
    },
    price:{
          type:String
    },
    waxId:{
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
  },

  { timestamps: true }
)

module.exports = mongoose.model("record", RecordSchema)