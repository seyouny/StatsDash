var express = require("express");
const router = express.Router();
var db = require("../models");

// ======================GET======================
router.get("/api/user/:id/tournament",(req,res)=>{
    db.Users.findOne({
      where:{id:req.params.id},
      include: [db.Tournaments]
    }).then((results)=>{
      console.log(results);
      res.json(results);
    })
})
  router.get("/api/user/:id",(req,res)=>{
    db.Users.findAll({
      where:{
        id: req.params.id
      }
    }).then((user)=>{
      console.log(user)
      res.json(user)
    })
  })
  router.get("/api/tournament/:id", (req,res)=>{
    db.Tournaments.findOne({
      where:{id:req.params.id},
      include: [db.Users]
    }).then((results)=>{
      console.log(results);
      res.json(results);
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
  router.post("/api/tournament/:id", (req, res) => {
    var tournament = req.body;
    var id = req.params.id
    console.log(tournament);
    db.Tournaments.create(tournament).then((tournament)=>{
      console.log("success");
      console.log(tournament);
      db.Users.findOne({
        where:{id:req.params.id}
      }).then((user)=>{
        user.addTournament(tournament);
        console.log(user);
        res.json(tournament);
      })
      
    })
})



module.exports = router