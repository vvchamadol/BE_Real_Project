const Booking = require('../Models/book')
const bcrypt = require('bcryptjs')
const Username = require('../Models/register.js')


exports.book = async(req, res) => {
    try {
        //console.log(req.body)
        //const register = await db(req.body).save()
        //res.send(register)

        //Check duplicate
        const { userId, packageId, waxAction, status, date, time, month, year, userName, userSurname } = req.body
        var book = await Booking.findOne({ time, date })


        if(book) {
            return res.send('Booking Time Already Exists!!').status400
        }

        let name = userName
        let surname = userSurname

        console.log('>>>>>20', name, surname)
        //Encrypt
        var user = await Username.findOne({ _id:userId }) //update wax value > user
        if( waxAction === "เปิดขวดใหม่" ) {
            console.log('>>>>28', userId, user)
        await Username.updateOne(
            { _id : userId },
            {  $set: {
                waxId :'65d386eb52fba2cb3e29f5d1',
                waxValue : 100
            }}
            )
        }
        
        book = new Booking({
            userId,
            packageId,
            waxAction,
            status,
            date,
            time,
            month,
            year,
            name,
            surname 
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
        
        const { _id, userId, packageId, waxId, status, date, time, month, year } = req.body
        console.log('_id', _id)
        var booking = await Booking.updateOne(
            { _id },
            {  $set: {
                userId, packageId, waxId, status, date, time, month, year
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
    const { id, userId, packageId, waxId, status, date, time, month, year } = req.query
//console.log ("Object_id", name);
    var book = await Booking.findOne({ _id:id })
console.log ("book", book);
    var result = {
            userId : book.userId,
            packageId : book.packageId,
            waxId : book.waxId,
            status : book.status,
            date : book.date,
            time : book.time,
            month : book.month,
            year : book.year,
            name : book.name,
            surname : book.surname
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