const WalkIn = require('../Models/walkIn')
const bcrypt = require('bcryptjs')


exports.walkin = async(req, res) => {
    try {
        //console.log(req.body)
        //const register = await db(req.body).save()
        //res.send(register)

        //Check duplicate
        const { username, name, surname, tel, packageId, carLicence, waxId, date, time, status, process} = req.body
        var walkin = await WalkIn.findOne({ time })


        if(walkin) {
            return res.send('This Time Already Exists!!').status400
        }

        //Encrypt
        walkin = new WalkIn({
            username,
            name,
            surname,
            tel,
            carLicence,
            packageId,
            waxId,
            date,
            time,
            status,
            process
            
        })

        //Save
        await walkin.save()
        res.send('Register Walk-in Success!!')
console.log(this.walkin)

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}

//update
exports.walkinUpdate = async(req, res) => {
    try {
        //console.log(req.body)
        //const package = await (req.body).save()
        //res.send(package)

        //Check duplicate
        
        const { _id, username, name, surname, tel, packageId, carLicence, waxId, date, time, status, process } = req.body
        console.log('_id', _id)
        var walkin = await WalkIn.updateOne(
            { _id },
            {  $set: {
                username, name, surname, tel, packageId, carLicence, waxId, date, time, status, process
            }}
            )

  
        res.send('Updated Walk-in Success!!')
console.log(walkin)

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}

//Get
exports.walkIninfo = async(req, res) => {
    try{ 
console.log ("walk-iin!!");
    const { id, username, name, surname, tel, packageId, carLicence, waxId, date, time, status, process } = req.query
//console.log ("Object_id", name);
    var walkin = await WalkIn.findOne({ _id:id })
console.log ("walk-in", walkin);
    var result = {
            username : walkin.username,
            name : walkin.name,
            surname : walkin.surname,
            tel : walkin.tel,
            packageId : walkin.packageId,
            carLicence : walkin.carLicence,
            waxId : walkin.waxId,
            date : walkin.date,
            time : walkin.time,
            status : walkin.status,
            process : walkin.process
        }
        res.send(result);
console.log ('Walk-in info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}

//getAll
exports.walkinGetAll = async(req, res) => {
    try{ 
console.log ("walk-in!!");
    const { id, name, serial, volume, prices, amount } = req.query
//console.log ("Object_id", name);
    var walkin = await WalkIn.find()
console.log ("walk-in", walkin);
    var result = {walkin}
        res.send(result);
console.log ('walk-in info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}