import React, { Component, useContext } from "react";
import Top from "../../components/Dashboard/mainImage";
import Middle from "../../components/Dashboard/tournament";
import Stats from "../../components/Dashboard/playerMain";
import Bot from "../../components/Dashboard/playercard";
import Box from '@material-ui/core/Box';
import Navigation from "../../components/Navigation";
import "./dashstyle.css";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PlayerList from "../../components/Dashboard/playerscroll";
import API from "../../utils/API";
import Chart from "../../pages/Chart";
import AdminPanel from '../../components/AdminPanel';
import { AuthContext } from "../../Auth";
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';


// import Users from "../../../../models/user";


// export default function Dashboard(){
class Dashboard extends Component {

    // const { currentUser } = 
    state = {
        tournamentData: {},
        currentUser: {},
        friends:[],
        userstats: [{
            userId:"Stacey",
            deaths:5,
            gulagdeaths:6,
            gulagkills:3,
            damage:2,
            kills:4
        },
        {
            userId:"Bob",
            deaths:3,
            gulagdeaths:3,
            gulagkills:2,
            damage:4,
            kills:6
        },
        {
            userId:"Sam",
            deaths:5,
            gulagdeaths:3,
            gulagkills:2,
            damage:8,
            kills:6
        }],
        admin: false
    }

    async componentDidMount() {
        if (this.props.match.params) {
            try {
                var userId = this.props.match.params.userid
                var tId = this.props.match.params.tid
                // console.log(userId, tI)
                var friends =[]
                await API.getFriends(userId,(results)=>{
                    console.log(results.data.Friends);
                    friends = results.data.Friends;

                })
                await API.getOneTournament(tId, (results) => {
                    console.log("TOURNAMENT FOUND");
                    console.log(friends)
                    console.log("here", results);
                    const tournamentData = {
                        adminId: results.data.adminId,
                        tName: results.data.tName,
                        games: results.data.games,
                        users: results.data.Users,
                        multiplier: {
                            clutchKillsMultiplier: results.data.Users.clutchKillsMultiplier,
                            damageMultiplier: results.data.Users.damageMultiplier,
                            damageToKillsMultiplier: results.data.Users.damageToKillsMultiplier,
                            deathsMultiplier: results.data.Users.deathsMultiplier,
                            gulagDeathsMultiplier: results.data.Users.gulagDeathsMultiplier,
                            gulagKillsMultiplier: results.data.Users.gulagKillsMultiplier,
                            killsMultiplier: results.data.Users.killsMultiplier,
                            placementMultiplier: results.data.Users.placementMultiplier,
                            revivesMultiplier: results.data.Users.revivesMultiplier
                        }
                    }
                    
                    console.log("TOURNAMENT DATA:");
                    console.log(tournamentData);
                    var user = {}
                    var friendsNotInTournament =[];
                    for(var i =0; i<tournamentData.users.length; i++){
                        if(tournamentData.users[i].id === userId){
                            user = tournamentData.users[i];
                        }
                        
                    }
                    for(var i =0; i<friends.length; i++){
                        console.log(tournamentData.users)
                        console.log(friends[i]);
                        if(tournamentData.users.indexOf(friends[i])!==0){
                            friendsNotInTournament.push(friends[i])
                        }
                    }
                    this.setState({ ...this.state, tournamentData: tournamentData, currentUser:user,friends:friendsNotInTournament });
                    console.log("check userID", this.state);

                    console.log("checking for COD API")
                    //map out user and fill in Get latest match for each user
                    const userstats = [];
                    // const getMatch = async (user)=>{
                    //     await API.getMatches(user.gamerTag,user.platform)
                    //     .then(res => {
                    //         console.log("matches data",res)
                    //         setTimeout( async () => {
                    //             console.log('waiting...')
                                
                    //             userstats.push({
                    //                 userId:user.gamerTag,
                    //                 deaths:res[0].playerStats.deaths,
                    //                 gulagdeaths:res[0].playerStats.gulagDeaths,
                    //                 gulagkills:res[0].playerStats.gulagKills,
                    //                 damage:res[0].playerStats.damageDone,
                    //                 kills:res[0].playerStats.kills
                    //             })
                    //             this.setState({ ...this.state, userstats: userstats }); 
                    //             console.log(userstats); 

                    //         }, 3000);

                    //     })
                    // }
                    var users = this.state.tournamentData.users;
                    for(var i = 0; i<users.length; i++) {
                        userstats.push({
                            userId:users[i].gamerTag,
                            deaths:0,
                            gulagdeaths:0,
                            gulagkills:0,
                            damage:0,
                            kills:0,
                            score:0
                        })
                    }
                    this.setState({ ...this.state, userstats: userstats });
                       
                    console.log(this.state)   
                    
                      
                })
           
            } catch (err) {
                console.log(err)
            }

            // .then(results=>{
            //     console.log("checking user results",results)
            //     const userstats = {
            //         kills: results[0].playerStats.kills,
            //         gulagdeaths:results[0].playerStats.gulagDeaths,
            //         gulagkills:results[0].playerStats.gulagKills,
            //         deaths: results[0].playerStats.deaths
            //     }
            //     this.setState({...this.state, userstats:userstats});

            // })
        }

        console.log("users", this.state)

    }
    //update api call to get new stats from cod api
    //update database 
    //update refresh on database get new performance
    //render
    // update stats -> admin panel -> main page -> charts
    render() {
        return (
            <div>
                <Navigation />
                <Box className="body">
                    <Container>
                        <h1 className="tournamentNameHead">{this.state.tournamentData.tName}</h1>
                    </Container>
                    <Top></Top>
                    <br></br>
                    <hr></hr>
                    <Stats
                        currentuser={this.state.currentUser.firstName}
                        rank= "--"
                        kills= "--"
                        gulagkills = "--"
                        gulagdeaths= "--"
                        damage = "--"

                    />
                    <br></br>
                    <hr></hr>
                    <AdminPanel 
                        tournamentData ={this.state.tournamentData}
                    />
                    <Middle>
                        <Chart />
                    </Middle>
                    <br></br>
                    <hr></hr>
                    {/* <div className={classes.root}> */}
                    {/* <GridList cols={5}> */}
                        {/* {this.state.userstats.map((play)=>{ */}
                    <PlayerList
                    list = {this.state.userstats}
                    />
    
                       
x                        {/* })}  */}
                    {/* </GridList> */}
                    {/* </div> */}
                </Box>
            </div>
        )
    }
}

export default Dashboard