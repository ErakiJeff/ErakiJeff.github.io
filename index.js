const express = require('express');
const fs = require("fs");

app = express();
const port = 8000;

app.use(express.static('docs'));
app.get("/", (req, res) => {
    res.sendFile("index.html")
});

app.listen(port, '0.0.0.0', () => {
    console.log("listening on port " + port)
});
