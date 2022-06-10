const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    // _id: String,
    author_name: String,
    age:Number,
    address:String,
    rating: Number

}, { timestamps: true });

module.exports = mongoose.model('NewAuthors', authorSchema)//newAuthor
