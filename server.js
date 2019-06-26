"use strict";
const express = require("express"); 
const app = express(); 
const cors = require("cors");
const clues = require('./clues.api');
const stolen = require('./stolen.api');
const scores = require("./scores.api"); 
app.use(cors());
app.use(express.static(__dirname + "/dist")); 
app.use(express.json()); 
app.use("/", clues); 
app.use("/", stolen);
app.use("/", scores);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on PORT: ${port}.`));