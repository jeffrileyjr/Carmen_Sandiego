"use strict";
const express = require("express");
const scores = express.Router();
const pool = require('./pg-connection-pool');

function topTen(res) {
  pool.query("select * from scores order by score asc limit 10").then(result => res.json(result.rows));
}


scores.get("/thescores", (req, res) => {
  topTen(res);
});

scores.post("/thescores", (req, res) => {
  pool.query("INSERT INTO scores (username, score) VALUES ($1::text, $2::smallint)", [req.body.username, req.body.score]).then(() => {
   });
 });


module.exports = scores;