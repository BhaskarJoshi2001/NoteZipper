const express = require("express");
const notes = require("./data/notes");
const datas = require("./data/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("api is running..");
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.get("/api/data", (req, res) => {
    res.json(datas);
});
app.get("/api/data/:id", (req, res) => {
    const data = datas.find((r) => r. _id === req.params.id);  
    res.send(data);
});

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running on port ${PORT}`));
