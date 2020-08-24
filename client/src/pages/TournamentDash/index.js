import React from "react";
import Top from "../../components/Dashboard/mainImage";
import Middle from "../../components/Dashboard/tournament";
import Bot from "../../components/Dashboard/playercard";
import Box from '@material-ui/core/Box';
import Navigation from "../../components/Navigation";
import "./dashstyle.css";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import InviteFriend from '../../components/InviteFriend';

import API from "../../utils/API";
import Chart from "../../pages/Chart";
// import Users from "../../../../models/user";


export default function Dashboard(){
    // state = {
    //     var tournamentID = 0
    // }

    // API.getAllUsers()
    // .then(results => {
        // console.log(results)
        // if (tournamentID === results){
        //     console.log(results)
        // }

    // })
    // API.getUsers(user, (results) => {
    //     players.push(results)
    //     return players
        
    // })
    var players = [
        {"user":"bob",
         "player":1},
         {"user":"bob",
         "player":1},
         {"user":"bob",
         "player":1},
         {"user":"bob",
         "player":1},
         {"user":"bob",
         "player":1},
     ]

    return(
        <div>
        <Navigation/>

        <Box className = "body">
        <Top></Top>
        <br></br>
        <hr></hr>
        <InviteFriend />
        <Middle> 
            <Chart/>
        </Middle>
        <br></br>
        <hr></hr>
        <Grid container spacing={3}>
        {players.map((play)=>{
            return <Bot
            user = {play.user}
            title = {play.player}
            />
        })}

        </Grid>
        </Box>
        </div>
    )
} 