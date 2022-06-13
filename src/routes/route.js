const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")
const productController = require("../controllers/productController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher",publisherController.createPublisher)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.post("/createProduct", productController.createProduct)

router.post("/createUser", productController.createUser)

router.post("/createOrder", productController.createOrder)
//router.get("/getBooksData", bookController.getBooksData)

//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.get("/getBooksWithAuthorDetailsAndPublisherDetails", bookController.getBooksWithAuthorDetailsAndPublisherDetails)

module.exports = router;