const mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
    email: {type: String},
    username: {type: String}
    // email: ({type: String, required: true})
});

module.exports = mongoose.model('Email', emailSchema);
