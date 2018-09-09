var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));
var request = require('request');
var util = require('util');


app.get('/', (req,res) =>{

    res.sendFile(path.join(__dirname + 'public/index.html'))

});

app.use("/paquetes",(req,res) => {

    let urlJson = "https://api.myjson.com/bins/hosps";

    var headers = {
        'User-Agent':       'Super Agent/0.0.1',
        'Content-Type':     'application/x-www-form-urlencoded',
    
    
    }

    var options = {
        url : urlJson,
        method : 'GET',
        jar : true,
        headers : headers
    }

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