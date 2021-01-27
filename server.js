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

//// Go to notes by startind at the directory and ending at the notes.html 
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// get method establishing that the api/notes is linked to the db.json file for future reading and writing. if something is wrong send an error, then parse the reponse from the data pulled from the db file
app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});









  


