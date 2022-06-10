const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    
    // _id: {
    //     type: ObjectId,
    //     ref: "NewPublishers",
    //     ref: "NewAuthors"
    // },
    name: String,
    author: {
        type:ObjectId,
        ref:"NewAuthors"
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "NewPublishers"
    },
    isHardCover:{
        type: Boolean,
        default: false
    }

}, { timestamps: true });


module.exports = mongoose.model('NewBooks', bookSchema)//newbooks
