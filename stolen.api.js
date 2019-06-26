"use strict";
const express = require("express");
const stolen = express.Router();
const pool = require('./pg-connection-pool');

// function getClues(res) {
//   pool.query("SELECT * FROM clues WHERE city=$1::text", ['Detroit']).then(result => res.json(result.rows));
// }


stolen.get("/stolenGoods/:city", (req, res) => {
  pool.query("SELECT * FROM stolenGoods WHERE city=$1::text ORDER BY RANDOM() limit 1", [req.params.city]).then(result => res.json(result.rows));
})

module.exports = stolen;