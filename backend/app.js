require("dotenv").config()
require("./config/database").connect()
const express = require('express')
const User = require("./src/models/user")
const bycript = require("bcryptjs")
const jwt = require("jsonwebtoken")

const app = express()

app.use(express.json())

const isAllInputFilled = (reqBody) => {
    return (reqBody.first_name && reqBody.last_name && reqBody.email && reqBody.password)    
}

app.post('/register', async (req, res) => {
    
    try {
        console.log('req: ', req.body)
        
        if (!isAllInputFilled(req.body)) return res.status(400).send("All input is required")
        
        const { first_name, last_name, email, password } = req.body;

        const oldUser = await User.findOne({email})

        if (oldUser) {
            return res.status(409).send("User already registred!");
        }

        const encryptedPassword = await bycript.hash(password, 10)

        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        )

        user.token = token;

        res.status(201).json(user)
    } catch (err) {
        console.log(err)

        res.status(500)
            .send({message: "Something went wrong when trying to register",
                     error: err})
        
    }
    
})

app.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        const user = await User.findOne({email});

        if (user && (await bycript.compare(password, user.password))) {
            const token = jwt.sign(
                {user_id: user._id, email},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )

            user.token = token

            res.status(200).json(user);
        }

        res.status(400).send("Invalid Credentials")
    } catch (err) {
        console.log(err)
        res.status(500).send({message: "Something went wrong when trying to log in.", err: err})
    }

})


module.exports= app