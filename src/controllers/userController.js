const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

const createNewBook = async function(req, res) {
    let book = req.body
    let savedData = await UserModel.create(book)
    res.send({msg: savedData})
}

const listOfAllBooks = async function(req, res) {
    let listBooks = await UserModel.find()
    res.send({msg: listBooks})
}

module.exports.createNewBook = createNewBook
module.exports.listOfAllBooks = listOfAllBooks