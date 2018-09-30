var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));
var request = require('request');
var util = require('util');


app.get('/', (req,res) =>{

    res.sendFile(path.join(__dirname + 'public/index.html'))

});

app.use("/buscar",(req,res) => {

    let urlJson = "http://developer.goibibo.com/api/search/?app_id=c244b17c&app_key=fdfc557e12c667b58aeb88a366633b2a%09&format=json&source=%s&destination=%s&dateofdeparture=%s&dateofarrival=%s&seatingclass=E&adults=%s&children=0&infants=0&counter=100";
    let urlFinal = util.format(urlJson,req.query.from,req.query.to,req.query.dateFrom,req.query.dateTo,req.query.adults);
    let urlHardcore = "https://api.myjson.com/bins/hfwnk"

    var headers = {
        'User-Agent':       'Super Agent/0.0.1',
        'Content-Type':     'application/x-www-form-urlencoded',
    
    
    }

    var options = {
        url : urlHardcore,
        method : 'GET',
        jar : true,
        headers : headers
    }

    console.log(urlFinal)
    request(options,(error,response,body) =>{

        if (!error && response.statusCode == 200 ){
            console.log(body);
            res.json(JSON.parse(body));
        }
        else{
            console.log(body)

            res.json(JSON.parse(body));

        }

    } )

})






app.listen(3000, () =>{

    console.log("Listening on port 3000");

})