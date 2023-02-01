const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.json('I am the index route')
});

app.get("/api/countries", (req, res) => {
  res.json('I am the countries route')
});

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});