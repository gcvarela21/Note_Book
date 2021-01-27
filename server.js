// These are Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initializing the express app
const app = express();
const PORT = process.env.PORT || 3000;

// Lets setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Setup listener and error catch
app.listen(PORT, function(error) {
    if (error) {
        console.log('Something has gone wrong', error)
    } else {
        console.log("app/express is listening on PORT: " + PORT);
    }
});  



  


