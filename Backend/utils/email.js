const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
});

function generateOTP() {
    const digits = '0123456789';
    let OTP = '';
  
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
  
    return OTP;
  }

function sendEmail(to, subject, content) {
  const mailOptions = {
    from: process.env.EMAIL, // replace with your email
    to,
    subject,
    text: content,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = { generateOTP, sendEmail };