var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema
({
    f_id:
    {
        type: String
    },
    t_id:
    {
        type: String
    },
    authorName: 
    {
        type: String
    },
    message:
    {
        type: String
    },
    beenRemove:
    {
        type: Boolean
    }
});

module.exports = mongoose.model('Post',schema);