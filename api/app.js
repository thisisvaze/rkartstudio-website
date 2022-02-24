var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const path = require('path');
var https = require('https')

require('dotenv').config();

const app = express()

const frontend = express()

app.use(cors())
app.use(express.json())
//app.user(https)
app.use('/', router)
app.listen(3002)

frontend.use(express.static(path.join(__dirname, '../build')));


frontend.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

frontend.listen(3000)

var transport = {
    service: 'gmail',
    auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS
  }
}



var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {


  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var phone = req.body.phone
  var content = `Name: ${name} \nEmail: ${email} \nPhone No.: ${phone} \nMessage: ${message} `

  var mail = {
    from: name,
    to: 'renuindapurkar.16@gmail.com',  
    subject: 'RK Art Studio - Contacted by ' + ' ' + name,
    text: content
  }

 

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err)
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

