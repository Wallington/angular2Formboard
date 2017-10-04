var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema
({
    fourmName : 
    {
        type: String,
        required: true,
    },
    threadName : 
    {
        type: String
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
    postCount:
    {
        type: Number
    }
});

module.exports = mongoose.model('Thread',schema);