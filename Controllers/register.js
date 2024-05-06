const Username = require('../Models/register.js')
const bcrypt = require('bcryptjs')


exports.register = async(req, res) => {
    try {
        //console.log(req.body)
        //const register = await db(req.body).save()
        //res.send(register)

        //Check duplicate
        const { name, surname, tel, username, password, role, waxValue } = req.body
        var user = await Username.findOne({ username })
console.log(user)

        if(user) {
            return res.send('User Already Exists!!').status400
        }

        //Encrypt
        const salt = await bcrypt.genSalt(10)
        user = new Username({
            name,
            surname,
            tel,
            username,
            password,
            role : 'user',
            waxValue
            
        })
        user.password = await bcrypt.hash(password, salt)

        //Save
        await user.save()
        res.send('Register Success!!')


    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
    }
}

//Get
exports.profile = async(req, res) => {
    try{ 
console.log ("profile!!");
    const { id, name, surname, tel, username, password, waxValue } = req.query
//console.log ("Object_id", name);
    var user = await Username.findOne({ _id:id })
console.log ("user", user);
    var result = {
            name : user.name,
            surname : user.surname,
            tel : user.tel,
            user : user.username,
            waxValue : user.waxValue
        }
        res.send(result);
console.log ('user info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}


//getAll
exports.userGetall = async(req, res) => {
    try{ 
console.log ("user info!!");
    const { id, name, info, prices, size } = req.query
//console.log ("Object_id", name);
    var userinfo = await Username.find()
console.log ("user info", userinfo);
    var result = userinfo
        res.send(result);
console.log ('User info!!')

    } catch (err) {
        //error
console.log(err)
        res.status(500).send('error')
}}
