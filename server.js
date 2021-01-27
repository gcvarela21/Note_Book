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

// Setup listener and error catch
app.listen(PORT, function(error) {
    if (error) {
        console.log('Something has gone wrong', error)
    } else {
        console.log("app/express is listening on PORT: " + PORT);
    }
}); 
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// My Global Empty Array 
const newNoteList = [];
const dataBase = JSON.parse(data);
const id = parseInt(req.params.id);


//// start here in the public folder
app.use(express.static('public'));

//// DEFAULT TO HOME by startign at the directory and ending at the index.html 
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//// Go to notes by startind at the directory and ending at the index.html 
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});










  


