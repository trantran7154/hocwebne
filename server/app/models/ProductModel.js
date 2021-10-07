const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Porduct = new Schema({
        code: {
            type: String,
            maxlength: 10
        },
        name: {
            type: String,
            maxlength: 200,
            required: true
        },
        image: {
            type: String
        },
        price: {
            type: Number
        },
        view: {
            type: Number,
        },
        describe: {
            type: String,
            maxlength: 500
        },
        content: {
            type: String
        },
        percentdiscount:{
            type: Number
        },
        dateCreate: {
            type: Date,
            default: Date.now
        },
        dateModified:{
            type: Date,
            default: Date.now
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
        }
});

module.exports = mongoose.model('Product', Porduct);