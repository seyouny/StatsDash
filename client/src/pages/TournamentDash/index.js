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
        userstats: [],
        admin: false
    }

    async componentDidMount() {
        if (this.props.match.params) {
            try {
                var userId = this.props.match.params.userid
                var tId = this.props.match.params.tid
                // console.log(userId, tI)
                await API.getOneTournament(tId, (results) => {
                    console.log("TOURNAMENT FOUND");

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
                    this.setState({ ...this.state, tournamentData: tournamentData });
                    console.log("check userID", this.state);
                })
                console.log(this.state)
                await API.getUsers(userId, (results) => {
                    console.log("user found");
                    console.log(results);
                    const currentUser = {
                        firstName: results.data[0].firstName,
                        userId: results.data[0].id,
                        lastName: results.data[0].lastName,
                        gamerTag: results.data[0].gamerTag,
                        platform: results.data[0].platform,
                        email: results.data[0].email
                    }
                    console.log("NEW STATE:")
                    // console.log(newState)
                    this.setState({ ...this.state, currentUser: currentUser });
                    console.log("here", this.state);

                    console.log("checking for COD API")
                    //map out user and fill in Get latest match for each user
                    this.state.tournamentData.users.map (async user => {
                        const userstats = []
                        await API.getMatches(user.gamerTag,user.platform)
                        .then(res => {
                            console.log("matches data",res)
                            userstats.push({
                                userId:user.gamerTag,
                                deaths:res[0].playerStats.deaths,
                                gulagdeaths:res[0].playerStats.gulagDeaths,
                                gulagkills:res[0].playerStats.gulagKills,
                                damage:res[0].playerStats.damageDone,
                                kills:res[0].playerStats.kills
                            })
                        })
                        this.setState({ ...this.state, userstats: userstats });
                        console.log(this.state)
                    })
                    // API.getMatches(this.state.currentUser.gamerTag, this.state.currentUser.platform)
                    //     .then(res => {
                    //         console.log("results of matches", res)
                    //         const userstats = []
                            
                    //         res.map(stats => {
                    //             userstats.push({
                    //             userid:this.state.currentUser.gamerTag,
                    //             deaths:stats.playerStats.deaths,
                    //             gulagdeaths:stats.playerStats.gulagDeaths,
                    //             gulagkills:stats.playerStats.gulagKills,
                    //             damage:stats.playerStats.damageDone,
                    //             kills:stats.playerStats.kills
                    //         })
                    //     })
                    // this.setState({ ...this.state, userstats: userstats });

                        // })
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
                        // rank={this.state.userstats[0].rank}
                        // kills={this.state.userstats[0].kills}
                        // gulagdeaths={this.state.userstats[0].gulagdeaths}

                    />
                    <br></br>
                    <hr></hr>
                    <AdminPanel />
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
                        {/* <Bot
                        // userId = {this.state.tournamentData.users[0].firstName}
                        deaths = {play.deaths}
                        // damage = {play.damage}
                        /> */}
                        {/* })}  */}
                    {/* </GridList> */}
                    {/* </div> */}
                </Box>
            </div>
        )
    }
}

export default Dashboard