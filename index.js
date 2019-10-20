/**
 * This is a mock server that will be used only for demonstration purposes
 * The actual angularjs application will send requests to the django api
 */

 /**
  * Define modules
  */
const express = require('express');
const obj = require("../Analytics-FormSever/responses.json");
const cors = require('cors');

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

/**
 * Returns a array of mock survey responses
 */
app.get('/responses', (req, res) => {
    res.json(obj);
});


/**
 * Listen
 */
app.listen(3000);
