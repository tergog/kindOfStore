var mongoose = require('mongoose');

var MorphPostSchema = new mongoose.Schema({
        user: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        tags: {
            type: String,
            required: true
        },
        likes: {
            type: Number
        },
        created_at: {type: Date, default: Date.now()}
    },
    { collection: 'morphPost',
        strict: false });

module.exports = mongoose.model('MorphPost', MorphPostSchema);