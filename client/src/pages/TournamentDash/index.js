import React from "react";
import Top from "../../components/Dashboard/mainImage"
import Middle from "../../components/Dashboard/tournament"
import Bot from "../../components/Dashboard/playercard"
import Box from '@material-ui/core/Box';
import Navigation from "../../components/Navigation"
import "./dashstyle.css"
import Grid from '@material-ui/core/Grid';


export default function Dashboard(){
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
        <Middle></Middle>
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