const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 255
    },
    email: {
        type: String,
        required: true,
        maxLength: 255
    },
    company: {
        type: String,
        required: true,
        maxLength: 255
    },
    address: {
        type: String,
        required: true,
        maxLength: 255
    },
    phone: {
        type: Number,
        required: true,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
        maxLength: 255
    },
    isVerified: {
        type: Boolean,
        default: false
    }
});

module.exports = {
    UserSchema: mongoose.model('User', UserSchema)
};
