var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var cheepSchema= new Schema({
    author: { type: String, required: true },
    posted: { type: Date, required: true, default: Date.now },
    body: { type: String, required: true }
}, { collection: 'cheeps' });

module.exports = mongoose.model('Cheep', cheepSchema);