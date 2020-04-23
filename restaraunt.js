var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//table reservations
var dinners = [
  {
    name: "",
    phone: "",
    email: "",
    Unique: "",
  },
];

var waitlist = [
  {
    name: "",
    phone: "",
    email: "",
    Unique: "",
  },
];

app.get("/", function (req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all tables
app.get("/api/dinners", function (req, res) {
  return res.json(dinners);
});

// Displays all waitlist
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

//creating reservation

app.post("/api/dinners", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newdinners = req.body;

  console.log(newdinners);
  if (dinners.length < 5) {
    dinners.push(newdinners);
  } else {
    waitlist.push(newdinners);
  }
  res.json(newdinners);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// app.post("/api/waitlist", function (req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newlist = req.body;

//   console.log(newlist);

//   // We then add the json the user sent to the character array

//   // We then display the JSON to the users
//   res.json(newlist);
// });
