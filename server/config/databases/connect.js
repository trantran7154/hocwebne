const mongoose = require('mongoose');

async function connect()
{
    try {
        await mongoose.connect('mongodb://localhost/congnghevn_data');
        console.log("Connect!");;
    } catch (e) {
        console.log("Not Connect!");
    }
}

module.exports = { connect };