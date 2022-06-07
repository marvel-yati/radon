const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )

router.post("/createAuthor", BookController.createAuthor)

router.get("/getBooksByChetanBhagat", BookController.getBooksByChetanBhagat)

router.get("/authorOfBook", BookController.authorOfBook)

router.get("/bookBetween50_100", BookController.bookBetween50_100)
module.exports = router;