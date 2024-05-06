const User = require('../Models/register')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = async(req, res) => {
    try {
        //res.send('login success')
        
        //Check User,Password
        const { username, password} = req.body
        var user = await User.findOneAndUpdate({ username }, {new: true})

console.log(user)

        if(user) {
            const isMatch = await  bcrypt.compare(password, user.password)

            // if(!isMatch){
            //     return res.status(400).send('Password Invalid!!')
            // }

            //Payload
            var payload = {
                user:{
                    name:user.name,
                    surname:user.surname
                }
            }

            //Generate
            jwt.sign(payload, 'jwtsecret', {expiresIn: 10},(err, token) =>{
                if(err) throw err;
                res.json({token, payload})
            })
        }else{
            return res.status(400).send('User not found!!')
        }
        console.log('>>>>38', user)
        res.send(user)
        
    } catch (err) {
        //error
        console.log(err)
        res.status(500).send('error')
    }
}