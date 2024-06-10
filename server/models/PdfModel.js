const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    filename : {
        type: String,
        required: true
    },
    path : {
        type: String,
        required: true
    },
    uploadDate : {
        type: Date,
        default: Date.now
    },
})

const Pdf = mongoose.model('Pdf', pdfSchema)
module.exports = Pdf;