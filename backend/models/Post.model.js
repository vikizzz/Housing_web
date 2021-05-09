const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId: {type: String, required: true},
    content: {type: String, required: true}
})

const postSchema = new Schema({
    houseId: {type: String, required: true},
    userId: {type: String, required: true},
    content: {type: String, required: true},
})


module.exports = User = mongoose.model('Post', postSchema, 'posts');
