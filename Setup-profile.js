const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;


app.use(cors());


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


app.use(express.static(path.join(__dirname, 'Setup')));


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'Setup', 'Profile-setup.html'));
});

let otpCode;

P
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'prakashaarush234@gmail.com',
        pass: 'umna awwv fkcr ymug',
    },
});


app.post('/send-otp', (req, res) => {
    const { email } = req.body;


    otpCode = generateOTP();


    const mailOptions = {
        from: 'prakashaarush234@gmail.com', // Sender address
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otpCode}. Please enter it to verify your Email.`,
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to send OTP' });
        } else {
            console.log('OTP sent: ' + info.response);
            res.status(200).json({ message: 'OTP sent successfully' });
        }
    });
});


app.post('/verify-otp', (req, res) => {
    const { otp } = req.body;

    if (otp === otpCode) {
        res.status(200).json({ message: 'OTP verified successfully' });
    } else {
        res.status(400).json({ message: 'Invalid OTP' });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});