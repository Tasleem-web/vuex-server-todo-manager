const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactusSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    telephone: {
        type: Number,
        default: 0
    },
    companyName: {
        type: String
    },
    description: {
        type: String,
        maxlength: 100
    }
}, { timestamps: true })


contactusSchema.index({
    name: 'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})

const Contact = mongoose.model('Contact', contactusSchema);

module.exports = { Contact }