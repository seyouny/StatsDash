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
  router.get("/api/user/:id/performances",(req,res)=>{
    db.Performances.findAll({
      order: [
          ["createdAt", "DESC"]
        ],
        where: {
          userId: req.params.id
        }
      }).then((performance) =>{
        console.log(performance);
        res.json(performance);
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




//======================PUTS====================== 


router.put("/api/tournament/:id",(req,res)=>{
  console.log(req.params.id);

  var users = req.body.users;
  console.log(users);
  res.json(users);

  db.Tournaments.findOne({
    where:{id:req.params.id}
  }).then((tournament)=>{
    tournament.update({
      status:"active",
      startDate: req.body.startTime
    })
  })
  for(var i=0; i<users.length; i++){
    db.Performances.create({
      UserId:users[i].id,
      TournamentId: req.params.id,
      startMatch: users[i].startMatch,
      gulagKills: 0,
      gulagDeaths: 0,
      kills: 0,
      deaths: 0,
      damage: 0,
      placement: 0,
      revives: 0,
      clutchKills: 0,
      damageToKills:0,
      overallScore: 0,
    }).then((performance)=>{
      console.log(performance);
    })
  }
})


module.exports = router