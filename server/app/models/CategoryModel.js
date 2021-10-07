const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Category = new Schema({
    code: {
        type: String,
        required: true,
        maxlength: 50
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    type: {
        type: Number,
        required: true
    },
    view: {
        type: String,
        default: 1
    },
    describe: {
        type: String,
        default: '',
        maxlength: 500
    },
    content: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: '',
        maxlength: 100
    },
    userCreate: {
        type: String,
        default: 'tran'
    },
    userModified: {
        type: String,
        default: 'tran'
    },
    active: {
        type: Boolean,
        default: true
    },
    bin: {
        type: Boolean,
        default: false
    },
    follow: {
        type: Boolean,
        default: false
    },
    note: {
        type: Boolean,
        default: false
    },
    dateCreate: {
        type: Date,
        default: Date.now
    },
    dateModified: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Category', Category);