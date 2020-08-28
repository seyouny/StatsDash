import axios from "axios";
export default {
   getMatches: async function (userName,platform){
       var formattedPlat = ""
       if(platform==="Playstation - (psn)"){
            formattedPlat = "psn";
       }
       if(platform=== "Steam - (steam)"){
        formattedPlat = "steam";
       }
       if(platform=== "XBox - (xbl)"){
        formattedPlat = "xbl";
       }
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/"+userName+"/"+formattedPlat,
            "headers": {
                "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
                "x-rapidapi-key": "401c08f482msha8f3fc31e872911p10a56cjsn9db42713d2d4"
            }
        }
        return axios.get(settings.url,settings).then(function (response) {
            console.log(response.data.matches);
            return response.data.matches;
        });
    },

    createUser: function(user){
        axios.post("/api/user",user);
    },

    createTournament: function(tournament,id){
        axios.post("/api/tournament/"+id,tournament)

    },

    startTournament: function(tournament) {
        axios.put("/api/tournament/"+tournament.id,tournament)
    },


    getTournaments: function(userId,callback){
        axios.get("/api/user/"+userId+"/tournament").then((results)=>{
            console.log(results);
            return callback(results);
        })
    },
    getOneTournament:function(id,callback){
        axios.get("/api/tournament/"+id).then((results)=>{
            return callback(results);
        })
    },

    getUsers: function(userId,callback){
        axios.get("/api/user/"+userId).then((results)=>{
            console.log(results);
            return callback(results)
        })
    },

    joinTournament:function(user){
        axios.put("/api/join/tournament",user)
    },
    findFriend:function(search,callback){
        console.log(search)
        axios.get("/api/find/friends/"+search.query+"/"+search.title).then((results)=>{
            return callback(results);
        })
    },
    getAllUsers:function(callback){
        axios.get("/api/all/users").then((results)=>{
            return callback(results);
        })
    }

    // getPerformances: function(userId, callback){
    //     axios.get("/api/user/"+userId+"/performances").then((results) =>{
    //         console.log(results);
    //         return callback(results.data)
    //     })
    // }


}
