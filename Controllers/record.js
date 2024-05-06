const Record = require('../Models/record')
const bcrypt = require('bcryptjs')
const Username = require('../Models/register.js')


exports.record = async(req, res) => {
    try {
        //console.log(req.body)
        //const package = await (req.body).save()
        //res.send(package)

        //Check duplicate
        const { userId, bookId, walkinId, status, total, name , surname , packageId, price, waxId, date, time, month } = req.body
        console.log('>>>>13', req.body)

        var user = await Username.findOne({ _id:userId }) //update wax value > user
        
            console.log('>>>>28', userId, user)
        await Username.updateOne(
            { _id : userId },
            {  $set: {
                waxId :'65d386eb52fba2cb3e29f5d1',
                waxValue : user.waxValue >0 ?user.waxValue - 20:user.waxValue 
            }}
            )
        
        // var record = await Record.findOne({ bookId })

        // if(record) {
        //     return res.send('Record is Already Exists!!').status400
        // }

        //Encrypt
        record = new Record({
            bookId,
            walkinId,
            status : 'Finish',
            total,
            name,
            surname,
            packageId,
            price,
            waxId,
            date,
            time,
            month
        })
      
        

        //Save
       let x = await record.save()
        console.log('>>>40', x)
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