var express = require("express");
const router = express.Router();
var db = require("../models");

// ======================GET======================

// getting Tournaments for the home page
router.get("/api/user/:id/tournament",(req,res)=>{
    db.Users.findOne({
      where:{id:req.params.id},
      include: [db.Tournaments,{
        model: db.Users,
        as: 'Friends'
      }]
    }).then((results)=>{
      console.log(results);
      res.json(results);
    })
})

// getting all performances associated to a tournament
router.get("/api/performances/:id",(req,res)=>{
    db.Tournaments.findOne({
      where:{id:req.params.id},
      include:[db.Performances]
    }).then((results)=>{
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

  // what the hell?
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

  // Getting friends
  router.get("/api/friends/:id",(req,res)=>{
    console.log(req.params.id);
    db.Users.findOne({
      where:{id: req.params.id},
      include: [{
        model: db.Users,
        as: 'Friends'
      }]
    }).then((user)=>{
      console.log(user);
      res.json(user);
    })
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

// Adding a friend
router.post("/api/friends",(req,res)=>{
  console.log("ROUTE HIT");
  console.log(req.body.userId);
  if(req.body.friendId=== req.body.userId){
    res.json("You cannot add yourself as a friend.");
  }
  db.Users.findOne({
    where:{id:req.body.userId},
    include: [{
      model: db.Users,
      as: 'Friends'
    }]
  }).then((user)=>{
    console.log(user.dataValues.Friends)
    var exists = false
    for(var i =0; i<user.dataValues.Friends.length; i++){
      if(user.dataValues.Friends[i].id ===req.body.friendId){
        exists = true;
        res.json("You are already friends with this user.")
      }
    }
    console.log(exists);
    if(exists===false){
      db.Users.findOne({
        where:{id:req.body.friendId}
      }).then((friend)=>{
        user.addFriend(friend);
        res.json(friend);
      })
    }
  })
})



//======================PUTS====================== 

// Starting tournament
router.put("/api/tournament/:id",(req,res)=>{
  console.log("HELLO ROUTE HIT");
  console.log(req.params.id);
  console.log(req.params);
  var users = req.body.users;
  console.log(users);
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
      TournamentId: req.params.id,
      startMatch: users[i].startMatch,
      UserId:users[i].id,
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
    where:{joinCode: joinCode},
    include:[db.Users]
  }).then((tournament)=>{
    console.log(tournament);
    for(var i =0; i<tournament.Users.length; i++){
      if(tournament.Users[i].id===req.body.userId){
        res.json("USER ALREADY IS IN TOURNAMENT")
      }
    }
    db.Users.findOne({
      where:{id:user.userId}
    }).then((user)=>{
      user.addTournament(tournament);
      console.log(user);
      res.json(user);
    })
  })
})

// Ending tournament
router.put("/api/end/tournament",(req,res)=>{
  console.log(req.body);
  db.Tournaments.findOne({
    where:{joinCode: req.body.joinCode},
    include:[db.Performances]
  }).then((tournament)=>{
    console.log(tournament);
    tournament.update({
      status: "completed",
      endDate: req.body.endDate
    })
    for(var i =0; i<tournament.Performances.length; i ++){
      console.log("attempting to update");
      console.log(req.body.performances[i]);
      console.log(tournament.Performances[i])
      tournament.Performances[i].update(req.body.performances[i]).then((results)=>{
        console.log(results);
      })
    }
    res.json("success");
   
  })
})


module.exports = router