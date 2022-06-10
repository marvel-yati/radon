const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    if(!req.body.author) return res.send("Author Id is required")
    if(!req.body.publisher) return res.send("Publisher is required")
    let authorId = await authorModel.findById(req.body.author)
    if(!authorId) return res.send("Author is not present")
    let publish = await publisherModel.findById(req.body.publisher)
    if(!publish) return res.send("Publisher is not present")

    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
    
}

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('_id')
//     res.send({data: specificBook})

// }

const getBooksWithAuthorDetailsAndPublisherDetails = async function (req, res) {
    let specificBookPublisher = await bookModel.find().populate(['author','publisher'])
    //console.log(specificBookPublisher)
    res.send({data: specificBookPublisher})

}



module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithAuthorDetailsAndPublisherDetails = getBooksWithAuthorDetailsAndPublisherDetails