import React, { Component} from "react";
import Top from "../../components/Dashboard/mainImage";
import Middle from "../../components/Dashboard/tournament";
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


// import Users from "../../../../models/user";


// export default function Dashboard(){
class Dashboard extends Component {
    // const { currentUser } = 
    state = {
        tournamentData:{},
        currentUser:{},
        admin:false
    }

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
    async componentDidMount() {
        if (this.props.match.params) {
            try {
                var userId =this.props.match.params.userid
                var tId = this.props.match.params.tid

                API.getOneTournament(tId, (results)=>{
                    console.log("TOURNAMENT FOUND");
                 
                    console.log(results);
                    const tournamentData = {
                        adminId: results.data.adminId,
                        tName:results.data.tName,
                        games:results.data.games,
                        users:results.data.Users
                    }
                    console.log("TOURNAMENT DATA:");
                    console.log(tournamentData);
                    this.setState({...this.state, tournamentData:tournamentData});
                    console.log(this.state);
                })
                console.log(this.state)
                API.getUsers(userId,(results)=>{
                    console.log("user found");
                    console.log(results);
                    const newState ={
                        firstName: results.data[0].firstName,
                        userId: results.data[0].id,
                        lastName: results.data[0].lastName,
                        gamerTag: results.data[0].gamerTag,
                        platform: results.data[0].platform,
                        email: results.data[0].email
                    }
                    console.log("NEW STATE:")
                    console.log(newState)
                    this.setState({...this.state, currentUser:newState});
                    console.log(this.state);
                })
            } catch (err) {
                console.log(err)
            }
        }
    }


    render(){
        return(
        <div>
        <Navigation/>
        <Box className = "body">
        <Container>
        <h1 className="tournamentNameHead">{this.state.tournamentData.tName}</h1>
        </Container>
        <Top></Top>
        <br></br>
        <hr></hr>
        <AdminPanel />
        <Middle> 
            <Chart/>
        </Middle>
        <br></br>
        <hr></hr>
        {/* <Grid container spacing={3}> */}
        <PlayerList/>

        {/* </Grid> */}
        </Box>
        </div>
        )
    }
}

export default Dashboard