const Wax = require('../Models/wax')
const bcrypt = require('bcryptjs')


exports.wax = async(req, res) => {
    try {
        //console.log(req.body)
        //const register = await db(req.body).save()
        //res.send(register)

        //Check duplicate
        const { name, serial, volume, prices, amount } = req.body
        var wax = await Wax.findOne({ name })


        if(wax) {
            return res.send('Wax name Already Exists!!').status400
        }

        //Encrypt
        wax = new Wax({
            name,
            serial,
            volume,
            prices,
            amount
        })

        //Save
        await wax.save()
        res.send('Register Wax Success!!')
console.log(wax)

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}

//update
exports.waxUpdate = async(req, res) => {
    try {
        //console.log(req.body)
        //const package = await (req.body).save()
        //res.send(package)

        //Check duplicate
        
        const { _id, name, serial, volume, prices, amount } = req.body
        var wax = await Wax.updateOne(
            { _id },
            {  $set: {
                name, serial, volume, prices, amount
            }}
            )

  
        res.send('Updated Wax Success!!')
console.log(wax)

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}


//Get
exports.waxinfo = async(req, res) => {
    try{ 
console.log ("wax!!");
    const { id, name, serial, volume, prices, amount } = req.query
//console.log ("Object_id", name);
    var wax = await Wax.findOne({ _id:id })
console.log ("wax", wax);
    var result = {
            name : wax.name,
            serial : wax.serial,
            volume : wax.volume,
            prices : wax.prices,
            amount : wax.amount
        }
        res.send(result);
console.log ('wax info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}


//getAll
exports.waxes = async(req, res) => {
    try{ 
console.log ("wax!!");
    const { id, name, serial, prices, amount } = req.query
//console.log ("Object_id", name);
    var wax = await Wax.find()
console.log ("wax", wax);
    var result = wax
        res.send(result);
console.log ('wax info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}


//Delete
exports.waxDelete = async(req, res) => {
    try{ 
console.log ("wax!!");
    const { _id } = req.query
//console.log ("Object_id", name);
    var wax = await Wax.deleteOne({ _id })
console.log ("wax", wax);
    
        res.send('wax has deleted!!');
console.log ('wax has deleted!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}