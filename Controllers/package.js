const Package = require('../Models/package')
const bcrypt = require('bcryptjs')


exports.package = async(req, res) => {
    try {
        //console.log(req.body)
        //const package = await (req.body).save()
        //res.send(package)

        //Check duplicate
        const { name, info, prices, size } = req.body
        var packagename = await Package.findOne({ name })

        if(packagename) {
            return res.send('Package name Already Exists!!').status400
        }

        //Encrypt
        packagename = new Package({
            name,
            info,
            prices,
            size
        })

        //Save
        await packagename.save()
        res.send('Register Package Success!!')
console.log(packagename)

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}

//update
exports.packageUpdate = async(req, res) => {
    try {
        //console.log(req.body)
        //const package = await (req.body).save()
        //res.send(package)

        //Check duplicate
        
        const { _id, name, info, prices, size } = req.body
        var packagename = await Package.updateOne(
            { _id },
            {  $set: {
                name, info, prices, size
            }}
            )

  
        res.send('Updated Package Success!!')
console.log(packagename)

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}


//Get
exports.packageinfo = async(req, res) => {
    try{ 
console.log ("package!!");
    const { id, name, info, prices, size } = req.query
//console.log ("Object_id", name);
    var package = await Package.findOne({ _id:id })
console.log ("package", package);
    var result = {
            name : package.name,
            info : package.info,
            prices : package.prices,
            size : package.size
        }
        res.send(result);
console.log ('package info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}



//getAll
exports.packages = async(req, res) => {
    try{ 
console.log ("package!!");
    const { id, name, info, prices, size } = req.query
//console.log ("Object_id", name);
    var package = await Package.find()
console.log ("package", package);
    var result = package
        res.send(result);
console.log ('package info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}


//Delete
exports.packageDelete = async(req, res) => {
    try{ 
console.log ("package!!");
    const { _id } = req.query
//console.log ("Object_id", name);
    var package = await Package.deleteOne({ _id })
console.log ("package", package);
    
        res.send('package has deleted!!');
console.log ('package has deleted!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}