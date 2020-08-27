var express = require("express");
const router = express.Router();
var db = require("../models");

// ======================GET======================

// getting Tournaments for the home page
router.get("/api/user/:id/tournament",(req,res)=>{
    db.Users.findOne({
      where:{id:req.params.id},
      include: [db.Tournaments]
    }).then((results)=>{
      console.log(results);
      res.json(results);
    })
})

// Searching for user on login 
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

  // Getting tournament data for dashboard
  router.get("/api/tournament/:id", (req,res)=>{
    db.Tournaments.findOne({
      where:{id:req.params.id},
      include: [db.Users]
    }).then((results)=>{
      console.log(results);
      res.json(results);
    })
  })

  // Getting all users
  router.get("/api/all/users", (req,res)=>{
    db.Users.findAll({}).then((users)=>{
      console.log(users)
      res.json(users);
    })
  })

// Finding users for friends
  router.get("/api/find/friends/:query/:title",(req,res)=>{
    console.log("SEARCHING FOR USERS")
    var search = req.params;
    console.log(search)
    if(search.query === "gamerTag"){
      db.Users.findAll({
        where:{gamerTag: search.title}
      }).then((user)=>{
        console.log(user)
        res.json(user);
      })
    }
    if(search.query === "firstName"){
      db.Users.findAll({
        where:{firstName: search.title}
      }).then((user)=>{
        console.log(user)
        res.json(user);
      })
    }
    if(search.query === "email"){
      db.Users.findAll({
        where:{email: search.title}
      }).then((user)=>{
        console.log(user)
        res.json(user);
      })
    }
  })

//======================POSTS====================== 

// Create New User
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

  // Create new Tournament
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

// Starting tournament
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

// join tournament by tournamentcode
router.put("/api/join/tournament",(req,res)=>{
  var joinCode= req.body.joinCode;
  var user = req.body
  console.log("JOIN CODE")
  console.log(joinCode)
  console.log("USER")
  console.log(user)
  db.Tournaments.findOne({
    where:{joinCode: joinCode}
  }).then((tournament)=>{
    console.log(tournament);
    db.Users.findOne({
      where:{id:user.userId}
    }).then((user)=>{
      user.addTournament(tournament);
      console.log(user);
      res.json(user);
    })
  })
})


module.exports = router