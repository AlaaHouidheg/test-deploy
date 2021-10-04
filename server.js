var express = require("express");
require("dotenv").config();

const path = require("path");
var app = express();

var cors = require("cors");

//connect DB

const DBconnect = require("./config/DBconnect");

DBconnect();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/contacts", require("./routes/contact"));

//serve static assests if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
