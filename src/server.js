const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Server listening on http://localhost:3000`);
  }
});
