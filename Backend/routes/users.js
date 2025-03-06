var express = require('express');
var router = express.Router();
var usermodel = require('../models/userModel')
const bodyparser = require('body-parser')
router.use(bodyparser.json())
var bcrypt = require('bcryptjs')
var nodemailer = require('nodemailer')
var jwt = require('jsonwebtoken')

router.post('/signup', async(req, res) => {
    try {
        const { username, email, password } = req.body
        const emailFound = await usermodel.findOne({ email })
            // res.send("helo")
        if (emailFound) {
            return res.status(201).json({ message: "Email already registered" })
        }
        const hashedpass = await bcrypt.hash(password, 10)
        let user = new usermodel({
            username,
            email,
            password: hashedpass
        })
        user.save()
        const transport = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 25,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })
        const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1h' })

        // console.log(token)
        // res.send(token)

        const verificationLink = `http://localhost:3002/users/verify/${token}`
        transport.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Verification email",
            html: `<div><center><h1>Verification E-Mail</h1><a href=${verificationLink}>Click this Link to Verify...👍🏼</a></center></div>`
        })
        res.status(200).json("{message:Signup sucessfull and Activation link is sent}")
    } catch (err) {
        res.status(500).json({ message: err })
    }
})


router.get('/verify/:token', async(req, res) => {
    try {
        const { token } = req.params
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const user = await usermodel.findOne({ email: decoded.email })
        if (!user) {
            return res.status(404).json({ message: "Invalid Token...!!!" })
        }
        user.isVerified = true
        user.save()
        res.status(200).json({ message: "verification sucessfully" })
    } catch (err) {
        res.status(500).json({ message: "Server error", err })
    }

    router.post('/login', async(req, res) => {
        console.log(req.body)
        try {
            const { email, password } = req.body
            let user = await usermodel.findOne({ email })
            if (!user) {
                return res.status(404).json({ message: "User not found" })
            }
            if (!user.isVerified) {
                return res.status(404).json({ message: "User not found" })
            }
            let isMatched = await bcrypt.compare(password, user.password)
            if (!isMatched) {
                return res.status(404).json({ message: "password is Incorrect" })
            }
            res.status(200).json({ message: "Login Sucessfully", username: user.username })
        } catch (err) {
            res.status(500).json({ err })
        }
    })
})

router.post('/login', async(req, res) => {
    const { email, password } = req.body
    let user = await usermodel.findOne({ email })
    if (!user) { return res.status(404).json({ message: "user not found" }) }
    if (!user.isVerified) { return res.status(404).json({ message: "user not verified" }) }
    let ismatch = await bcrypt.compare(password, user.password)
    if (!ismatch) {
        return res.status(404).json({ message: "password is incorrect" })
    }
    res.status(200).json({ message: "login successfully" })
})
module.exports = router;