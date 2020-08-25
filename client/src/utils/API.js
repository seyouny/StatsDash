import axios from "axios";
export default {
   getMatches: function (userName,platform){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/"+userName+"/"+platform,
            "headers": {
                "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
                "x-rapidapi-key": "401c08f482msha8f3fc31e872911p10a56cjsn9db42713d2d4"
            }
        }
        
        axios.get(settings.url,settings).then(function (response) {
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

    //rough start to put/change added by Jen - not tested, may not work as is.  Needed for start tournament function to set start date in UTC.
    updateTournament: function(tournament) {
        axios.put("/api/tournament/:id",tournament.Id)
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
    }

}
