var express = require("express");
const router = express.Router();
var db = require("../models");

// ======================GET======================
router.get("/api/user/:id/tournament",(req,res)=>{
  db.Tournaments.findAll({
    order: [
        ["createdAt", "DESC"]
      ],
      where: {
        UserId: req.params.id
      }
    }).then((tournament) =>{
      console.log(tournament);
      res.json(tournament);
    })
  })



//======================POSTS====================== 
router.post("/api/user", (req, res) => {
    var newUser = req.body;
    console.log(newUser);
    db.Users.create(newUser).then((user) => {
        console.log("success");
        console.log(user);
        res.json(user);
        res.end();
    })
  })
  router.post("/api/tournament", (req, res) => {
    var tournament = req.body;
    console.log(tournament);
    db.Tournaments.create(tournament).then((tournament)=>{
      console.log("success");
      console.log(tournament);
      res.json(tournament);
    })
})



module.exports = router