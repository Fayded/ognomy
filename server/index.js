const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/countries", (req, res) => {
  res.json('I am the countries route')
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});