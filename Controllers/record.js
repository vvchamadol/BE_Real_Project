const Record = require('../Models/record')
const bcrypt = require('bcryptjs')


exports.record = async(req, res) => {
    try {
        //console.log(req.body)
        //const package = await (req.body).save()
        //res.send(package)

        //Check duplicate
        const { bookId, walkinId, status, total } = req.body
        var record = await Record.findOne({ bookId })

        if(record) {
            return res.send('Record is Already Exists!!').status400
        }

        //Encrypt
        record = new Record({
            bookId,
            walkinId,
            status,
            total
        })
      

        //Save
        await record.save()
        res.send('Register Record Success!!')
console.log(record)

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}

//getAll
exports.recordGetAll = async(req, res) => {
    try{ 
console.log ("record!!");
    const { id, bookId, walkinId, status, total } = req.query
//console.log ("Object_id", name);
    var record = await Record.find()
console.log ("record", record);
    var result = record
        res.send(result);
console.log ('record info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}