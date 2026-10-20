require("dotenv").config();
const express = require("express"); // it is also a imort way to import express module
const app = express(); // app is important for listening
const port = 4000;

app.get("/", (req, res) => {
  res.send("Himanshu Kansotia");
});

app.get("/twitter", (req, res) => {
  res.send("https://twitter.com/himanshukansotia");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Successful. Welcome to Himanshu's World</h1>");
});

app.get("/logout", (req, res) => {
  res.send("<h1>Logout Successful. See you soon</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
