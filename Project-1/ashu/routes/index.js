var express = require('express');
var router = express.Router();
const userModel = require("./users")


router.get("/", function(req,res) {
  res.cookie("age", 26)
  res.render("index");
})

router.get("/read", function(req,res) {
   console.log(req.cookies);
   res.send("checked")
})

router.get("/delete", function(req,res) {
  res.clearCookie("age");
  res.send("cleared")
})

// router.get("/", function(req, res) {
//   req.session.ban = true;
//   res.render("index");
// })

// router.get("/ban", function(req, res) {
//   if(req.session.ban === true) {
//     res.send("you are banned");
//   } else {
//     res.send("you are not banned");
//   }
// })

// router.get("/removeban", function(req, res) {
//   req.session.destroy(function(err){
//     console.log(err);
//     res.send("ban removed");
//   });
// })

// router.get("/create", async function(req, res) {
//   const createduser = await userModel.create({
//     username: "ashu123",
//     name: "ashu",
//     age: 26
//   })
//   res.send(createduser);
// })

// router.get("/create", async function(req, res) {
//   const createduser = await userModel.create({
//     username: "ashu321",
//     name: "ashu g",
//     age: 28
//   })
//   res.send(createduser);
// })

// router.get("/create", async function(req, res) {
//   const createduser = await userModel.create({
//     username: "ashu456",
//     name: "ashu gupta",
//     age: 27
//   })
//   res.send(createduser);
// })

// router.get("/read",async function(req, res) {
//    const userdata = await userModel.findOne({username: "ashu123"})
//    console.log(userdata);
//    res.send(userdata);
// })

// router.get("/read", async function(req, res) {
//   const userdata = await userModel.find()
//   res.send(userdata);
// })

// router.get("/delete", async function(req,res) {
//   const deleteuser = await userModel.findOneAndDelete({username: "ashu456"})
//   res.send(deleteuser);
// })

module.exports = router;
