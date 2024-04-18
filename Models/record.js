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
  }},

  { timestamps: true }
)

module.exports = mongoose.model("record", RecordSchema)