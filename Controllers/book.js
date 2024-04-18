const Booking = require('../Models/book')
const bcrypt = require('bcryptjs')


exports.book = async(req, res) => {
    try {
        //console.log(req.body)
        //const register = await db(req.body).save()
        //res.send(register)

        //Check duplicate
        const { userId, packageId, waxId, status, date, time } = req.body
        var book = await Booking.findOne({ time })


        if(book) {
            return res.send('Booking Time Already Exists!!').status400
        }

        //Encrypt
        book = new Booking({
            userId,
            packageId,
            waxId,
            status,
            date,
            time
        })

        //Save
        await book.save()
        res.send('Register Booking Success!!')
console.log(this.book)

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}

//update
exports.bookingUpdate = async(req, res) => {
    try {
        //console.log(req.body)
        //const package = await (req.body).save()
        //res.send(package)

        //Check duplicate
        
        const { _id, userId, packageId, waxId, status, date, time } = req.body
        console.log('_id', _id)
        var booking = await Booking.updateOne(
            { _id },
            {  $set: {
                userId, packageId, waxId, status, date, time
            }}
            )

  
        res.send('Updated Booking Success!!')
console.log(booking)

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}

//Get
exports.bookinginfo = async(req, res) => {
    try{ 
console.log ("book!!");
    const { id, userId, packageId, waxId, status, date, time } = req.query
//console.log ("Object_id", name);
    var book = await Booking.findOne({ _id:id })
console.log ("book", book);
    var result = {
            userId : book.userId,
            packageId : book.packageId,
            waxId : book.waxId,
            status : book.status,
            date : book.date,
            time : book.time
        }
        res.send(result);
console.log ('Booking info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}

//getAll
exports.bookingGetAll = async(req, res) => {
    try{ 
console.log ("book!!");
    const { id, name, serial, volume, prices, amount } = req.query
//console.log ("Object_id", name);
    var book = await Booking.find()
console.log ("book", book);
    var result = {book}
        res.send(result);
console.log ('Booking info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}


//Delete
exports.bookingDelete = async(req, res) => {
    try{ 
console.log ("booking!!");
    const { _id } = req.query
//console.log ("Object_id", name);
    var booking = await Booking.deleteOne({ _id })
console.log ("booking", booking);
    
        res.send('booking has deleted!!');
console.log ('booking has deleted!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}