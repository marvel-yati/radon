const orderModel = require("../models/orderModel")
const userModel= require("../models/userModel")
const productModel = require("../models/productModel")

const createProduct = async function(req,res){
    let product = req.body
    let productCreated = await productModel.create(product)
    res.send({data: productCreated})
}

const createUser = async function(req,res){
    let user = req.body
    let userCreated = await userModel.create(user)
    res.send({data: userCreated})
}

const createOrder = async function(req, res) {
    let order = req.body
    let orderCreated = await orderModel.create(order)
    res.send({data: orderCreated})
}
module.exports.createProduct= createProduct
module.exports.createUser = createUser
module.exports.createOrder = createOrder