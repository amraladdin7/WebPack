const storedData = {};

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
const cors = require("cors");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// app.get("/key", function (req, res) {
//   res.send({ key: process.env.API_KEY }.json());
// });

app.post("/analysis", async function (req, res) {
  const text = req.body.text;
  const key = process.env.API_KEY;
  console.log(`API KEY: ${key}`);
  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&txt=${text}`
  );
  try {
    const data = await response.json();
    console.log(data);
    storedData["agreement"] = data.agreement;
    storedData["confidence"] = data.confidence;
    storedData["irony"] = data.irony;
    storedData["score_tag"] = data.score_tag;
    storedData["subjectivity"] = data.subjectivity;
    storedData["sentence_list"] = data.sentence_list[0].text;
    res.send(storedData);
  } catch (e) {
    console.error("error: " + e);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("App listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
