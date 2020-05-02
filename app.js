//Use Express 
const express = require('express');
const app = express();

//EJS Template and Request to connect with API 
const ejs = require('ejs');
const request = require('request');


//Require Mongoose package, will work with mongoose to access MongoDB
let mongoose = require('mongoose');

//Connect to specific DB in Mongo that we will use for this project 
mongoose.connect("mongodb://localhost:27017/beerProject", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Schema for MongoDB data
let beerSchema = mongoose.Schema ({
    name: String,
    description: String,
    percent: Number
})

//Model for MonogoDB data
let BeerModel = mongoose.model("Beer", beerSchema);

app.set("view engine", "ejs");
app.use(express.static('public'));


app.get('/', function(req, res){
    let url = 'https://api.punkapi.com/v2/beers';
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            let parsedData = JSON.parse(body);
            let name = parsedData[1].name;
            let description = parsedData[1].description;   
            let image = parsedData[1].image_url;   
            res.render('index.ejs', {beerName: name, beerDescription: description, beerImage: image});
        } 
    })
});

app.post('/favorites', function(req, res){
    let body = req.body;
    console.log(JSON.stringify(body));
    res.end();
    // res.render('fa')
})


app.get('/results', function(req, res){
    let query = req.query.search
    console.log(query);
    let url = 'https://api.punkapi.com/v2/beers/?search=' + query;
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            let parsedData = JSON.parse(body);
            // console.log(parsedData);
            res.render('results.ejs', {query: query});
        }  
    })
});

app.get('/favorites', function (req, res){
    // let favoriteSchema = new mongoose.Schema({
    //     beerName: true;
    //    });
    res.render('favorites.ejs');
});
    
app.listen(3000, function(req, res){
    console.log('Beer Matching App listening on Port 3000, woohoo!');
});
