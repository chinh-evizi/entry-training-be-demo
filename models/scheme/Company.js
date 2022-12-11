const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 255
    },
    logo: {
        type: String,
        default: null
    },
    website: {
        type: String,
        max: 255,
        default: null
    },
    phoneNumber: {
        type: String,
        min: 8,
        max: 20,
        default: null
    },
    address: {
        type: String,
        max: 255,
        default: null
    },
    createAt : {
        type:  Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Company', companySchema, 'companies');