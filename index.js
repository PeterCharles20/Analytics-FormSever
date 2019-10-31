/**
 * This is a mock server that will be used only for demonstration purposes
 * The actual angularjs application will send requests to the django api
 */

 /**
  * Define modules
  */
const express = require('express');
// const obj = require("../Analytics-FormSever/responses.json");
const cors = require('cors');
const http = require('http');
var request=require('request');

const options = {
	hostname: 'mysite.com',
	port: 80,
	path: '/get-analytics',
	method: 'GET',
	headers: {
    	'Content-Type': 'application/json'
  	}
}

// const req = http.request(options);
// req.end();



let app = express();

app.use(cors())


//Serve static files
app.use(express.static('public'));

/**
 * Handles the basic rendering of the home page
 */
app.get('/', (req, res) => {
    res.render('index');
});

var obj;
/**
 * Returns a array of mock survey responses
 */
 var url = 'http://mysite.com/get-analytics';
app.get('/responses', (req, res) => {
	
	http.get(url, function(res){
    var body = '';

	    res.on('data', function(chunk){
	        body += chunk;
	    });

	    res.on('end', function(){
	        var fbResponse = JSON.parse(body);
	        if(body === null) {
	        	console.log("n7ulls");
	        } else {
	        	// console.log(body);
	        	obj = body;
	        }
	    });
		}).on('error', function(e){
	      console.log("Got an error: ", e);
		});
 	console.log(obj);
 	if(obj !== null) {
 		res.send(obj);
 	} else {
 		res.send(null);
 	}
  	
});

/**
 * Listen
 */
var port = 3001;
app.listen(port, function()
{
	console.log('Example app listening on port ' + port + "!");
});

