const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://mongo:ofxqtb2WRbhEvU27@cluster0.hqgzvu1.mongodb.net/debayatidb", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 2005, function () {
    console.log('Express app running on port ' + (process.env.PORT || 2005))
});
