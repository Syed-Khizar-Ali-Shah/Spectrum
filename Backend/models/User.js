const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    role : {
        type : String,
    },
    passwordResetOTP: {
        otp: String,
        expiresAt: Date,
    },
})

module.exports = mongoose.model('User', userSchema);