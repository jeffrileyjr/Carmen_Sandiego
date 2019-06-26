"use strict";
const express = require("express");
const clues = express.Router();
const pool = require('./pg-connection-pool');

// function getClues(res) {
//   pool.query("SELECT * FROM clues WHERE city=$1::text", ['Detroit']).then(result => res.json(result.rows));
// }


clues.get("/clues/:cityname", (req, res) => {
  pool.query("SELECT * FROM clues WHERE city=$1::text ORDER BY RANDOM()", [req.params.cityname]).then(result => res.json(result.rows));
})


module.exports = clues;