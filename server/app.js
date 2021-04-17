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
app.use("/api", router);

app.use((req, res, next) => {
  res.json("error");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client", "build")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

mongoConnect(() => {
  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 3003;
  }
  app.listen(port);
});
