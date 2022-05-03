const nodemailer = require('nodemailer')

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'alice.barton80@ethereal.email',
        pass: 'U1UTyE1Sjf5KrzSFPE'
    }
}

module.exports = nodemailer.createTransport(mailConfig)
