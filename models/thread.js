var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 

var schema = new Schema
({
    f_id: 
    {
        type: String          
    },
    name : 
    {
        type: String,
        required: true,
    },
    authorName:
    {
        type: String
    },
    createdDate:
    {
        type: String
    },
    recenentPostDate:
    {
        type: String
    },
    message:
    {
        type: String
    },
    beenRemove:
    {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('Thread',schema);