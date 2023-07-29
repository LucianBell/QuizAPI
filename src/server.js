const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Server listening on http://localhost:3000`);
  }
});

const connectToDb = () => {
  mongoose
    .connect(process.env.DB_URI, {
      //para evitar erros
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    //Depois disso, já que o mongoose.conect é uma função assíncrona, vai dizer que tá conectado ou...
    .then(() => console.log("MongoDB Atlas connected"))
    //se tiver um erro, vai mostrar qual o erro
    .catch((err) => console.log(err));
};

connectToDb();
