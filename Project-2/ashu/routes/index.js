var express = require("express");
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
 router.get('/', function(req, res) {
   res.render('index');
});

// router.get('/check', function(req, res) {
//   req.flash("age", 12);
//   res.send("data ban gya");
// });

// router.get('/check', function(req, res) {
//   req.flash("name", "ashu");
//   res.send("data ban gya");
// });

// router.get('/bangya', function(req, res) {
//   console.log(req.flash("name"));
//   res.send("check kar lo terminal par");
// });

// router.get('/bangya', function(req, res) {
//   console.log(req.flash("age"));
//   res.send("check kar lo terminal par");
// });

// router.get("/abc",async function(req, res) {
//   let userdata = await userModel.create({
//   userName: "megha",
//   nickName: "meghu",
//   descrption: "studnet",
//   catagory: ["sagar", "pagal", "kutta", "kamina"],
//   // datacreated: {
//   //   type: Date,
//   //   default: Date.now()
//   // }
//    });
//   res.send(userdata)
// })

// router.get("/find", async function(req, res) {
//   //let regex = new RegExp("^rahul$", "i")
//   //let user = await userModel.find({catagory: {$all: ["sagar"]}});
//   //let data1 = new Date("2024-04-10");
//   //let data2 = new Date("2024-04-11");

//   //let user = await userModel.find({datacreated: {$gte: data1, $lte: data2 }})

//   let user = await userModel.find({catagory:{$exists: true}})
//   res.send(user);
// })

const localStategy = require("passport-local");
const passport = require("passport");
passport.use(new localStategy(userModel.authenticate()));

// router.post("/register", function (req, res) {
//   var userData = new userModel({
//     username: req.body.username,
//     secret: req.body.secret,
//   });

router.post("/register", function (req, res) {
  var userData = new userModel({
    username: req.body.username,
    secret: req.body.secret,
  });

  router.get("/profile", isLoggedIn, function(req, res) {
    //res.render("profile");
    res.send("welcome to profile");
    res.render("profile");
  })

  userModel
    .register(userData, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  function (req, res) {}
);

router.get("/logout", function(req, res, next) {
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/");
  })
})

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  } 
  res.redirect("/")
}

module.exports = router;
