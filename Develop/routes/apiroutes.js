const fs = require('fs');
const db = require('../db/db.json');
const app = require('express').Router();


app.get("/api/notes", (req, res) => {
    let db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(db);
});


app.post("/api/notes", (req, res) => {
    let noteObject = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*300)

    }
    db.push(noteObject)
    fs.writeFileSync("./db/db.json", JSON.stringify(db), (err) => {
        if (err) {
            throw err
        }
    })
    res.json(db);
})




module.exports = app;
