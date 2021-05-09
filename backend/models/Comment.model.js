const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    postId: {type: String, required: true},
    userId: {type: String, required: true},
    content: {type: String, required: true}
})



module.exports = User = mongoose.model('Comment', commentSchema, 'comments');
