const express = require('express');
const externalModule = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

//const express = require('express');
//const myHelper = require('../util/helper')
//const underscore = require('underscore')

//const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/movies', function(req, res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
});

// router.get('/movies/:indexNumber', function(req, res){
//     let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
//     res.send(movies[req.params.indexNumber])
// });

router.get('/movies/:indexNumber', function(req,res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    JSON.stringify(req.params)
    let item = movies[req.params.indexNumber]
    if(req.params.indexNumber < movies.length)
    {
        res.send(item)
    }
    else
    {
        res.send("No movie exists with this id")
    }
});

router.get('/films', function(req, res)
{
    let arr=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       res.send(arr)
        
});

router.get('/films/:filmId', function(req, res)
{
    let arr=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       JSON.stringify(req.params)
       let item = arr[req.params.filmId]
       if(req.params.filmId < arr.length)
        {
            res.send(item)
        }
        else
        {
            res.send("No movie exists with this id")
        }
});
router.get('/movies/')
module.exports = router;
// adding this comment for no reason
router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason