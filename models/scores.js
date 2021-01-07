var mongoose = require('mongoose');
var scoreSchema = new mongoose.Schema({
    score:String
})
module.exports = mongoose.model('Score',scoreSchema);