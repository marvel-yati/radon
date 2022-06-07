const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

const createAuthor = async function(req, res){
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksByChetanBhagat = async function(req, res) {
    let data = await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}

const authorOfBook = async function(req, res) {
    let data = await BookModel.findOneAndUpdate({name:"Two states"}, {$set:{price:100}},{new:true})
    let authorData = await AuthorModel.find({author_id:data.author_id}).select("author_name")
    let prices = data.price
    res.send({msg:authorData, prices})
}

const bookBetween50_100 = async function(req, res) {
    let bookBetween = await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select( {author_id: 1 })
    let author = await AuthorModel.find()
    let authors=[]
    bookBetween.map(item=>{
        author.map(item1=>{
            if(item.author_id==item1.author_id){
                authors.push(item1.author_name)
                //authors.push(item1.name)
            }
        })
    }

    )
    res.send({msg:authors})
}
// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createAuthor = createAuthor
module.exports.createBook= createBook
module.exports.getBooksByChetanBhagat = getBooksByChetanBhagat
module.exports.authorOfBook = authorOfBook
module.exports.bookBetween50_100 = bookBetween50_100
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
