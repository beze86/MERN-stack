const express = require("express");
const app = express();
const cors = require("cors");
const mongoConnect = require("./db").mongoConnect;
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const router = require("./router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use("/", router);

app.use((req, res, next) => {
  res.json("error");
});


// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

mongoConnect(() => {
  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 3003;
  }
  app.listen(port);
});
