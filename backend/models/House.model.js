const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const houseSchema = new Schema({
    name: {type: String, required: true},
    unitType: {type: String, default: 'Unknown'},
    location: {type: String, default: 'Unknown'},
    website: {type: String, default: 'Unknown'},
    price: {type: Number, default: -1},
    size: {type: Number, default: -1},
    phoneNumber: {type: Number, default: -1},
    images: {type: Array, default: []},
    tags: {type: Object, default: {}},
    facilities: {type: Object, default: {}},
    comments: {type: Array, default: []}
});

module.exports = User = mongoose.model('House', houseSchema, 'houses');
