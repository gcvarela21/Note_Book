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



//// start here in the public folder
app.use(express.static('public'));

//// DEFAULT TO HOME by startign at the directory and ending at the index.html  (navigational purposes)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//// Go to notes by startind at the directory and ending at the notes.html (navigational purposes)
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

// post method establishing that the api/notes is linked to the db.json file for future reading and writing. if something is wrong send and error. parse the reponse from the data pulled from the db file
app.post("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    const dataBase = JSON.parse(data); 
    dataBase.push(req.body);

    for (let i = 0; i < dataBase.length; i++) {
      const newNote = {
        title: dataBase[i].title,
        text: dataBase[i].text,
        id: i+1
      };
      newNoteList.push(newNote);
    }
    fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newNoteList, null, 2), (err) => {
      if (err) throw err;
      res.json(req.body);
    });
  });
  console.log('posted');
});

app.delete("/api/notes/:id", (req, res) => {
  console.log('we want to delete this note, and we are working on it');
});











  


