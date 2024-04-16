// var express = require('express');
// var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/userData");

const userSchame = mongoose.Schema({
  username: String,
  password: String,
  secret: String,
  // catagory: {
  //   type: Array,
  //   default: []
  // },
  // datacreated: {
  //   type: Date,
  //   default: Date.now()
  // }
})

userSchame.plugin(plm);

module.exports = mongoose.model("user", userSchame);