var mongoose = require('mongoose');

var UsersInfoSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    created_at: {type: Date, default: Date.now()}
},
    { collection: 'usersinfo',
    strict: false });

module.exports = mongoose.model('UsersInfo', UsersInfoSchema);