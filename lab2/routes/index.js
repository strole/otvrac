var express = require("express");
var router = express.Router();
var connection = require("../config/db.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home Page" });
});

router.get("/datatable", function (req, res, next) {
  res.render("datatable", { title: "Datatable" });
});

async function getAllUsers(req, res) {
  const uri =
    "mongodb+srv://admin:admin@cluster0.unf4hz6.mongodb.net/otvrac?retryWrites=true&w=majority?authSource=admin?directConnection=true";
  mongoose.connect(uri);
  await Boat.find({}, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      return data;
    }
  }).clone();
}

router.get("/boats", async function (req, res) {
  var Boat = require("../model/Boat");
  var mongoose = require("mongoose");
  const uri =
    "mongodb+srv://admin:admin@cluster0.unf4hz6.mongodb.net/otvrac?retryWrites=true&w=majority?authSource=admin?directConnection=true";
  mongoose.connect(uri);
  await Boat.find({}, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      //console.log(data);
      res.send(data);
    }
  }).clone();
});

router.get("/feedTBL", function (req, res, next) {});

module.exports = router;
