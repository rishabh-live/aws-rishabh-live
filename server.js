const express = require("express");
const app = express()

app.get('/', (req, res) => res.send("Testing Nodemon<br> Nodemon Working All fine"))

app.listen(3000)