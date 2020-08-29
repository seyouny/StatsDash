//MY HOME PAGE

import React, { Component, useContext,useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Navigation from "../../components/Navigation";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import { AuthContext } from "../../Auth";
import API from "../../utils/API";
import NewChoose from "../NewChoose";
import TourneySeeds from "../../utils/tourneySeeds";
import Smoke from "./homeVidBanner";
import Banner from "./homeBanner";
import Styles from './style.css';
import ReactPlayer from 'react-player'


const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
  header: {
    color: 'white',
  }
});


function MyHome() {
  const { currentUser } = useContext(AuthContext);
  const [state, setState] = useState([])
  const [friends, setFriends] = useState([])
  const classes = useStyles();
  
  useEffect(()=>{
    console.log(state)
    if(state.length===0){
      getTable()
    }
  })
  function getTable(){
    API.getTournaments(currentUser.userId,(results)=>{
      console.log(results.data.Tournaments);
      setState(results.data.Tournaments);
      setFriends(results.data.Friends);
      console.log("friends",friends);
      return results.data.Tournaments
    })
  }
  function joinTournament(event){
    event.preventDefault()
    const {tournamentJoiner} = event.target.elements;
    console.log(tournamentJoiner.value);
    var user = currentUser;
    user.joinCode = tournamentJoiner.value
    API.joinTournament(user).then(()=>{
      window.location.reload(false);
    });
    

  }
  console.log(currentUser)
// Working on getting real data from MySQL but getting error uid not defined

  return (
    <Box>
      <Smoke className={classes.video} />
      <Navigation />
      {/* <Banner /> */}
      <Grid container spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                className="myHomeCont">


  {/* GAMER GREETING */}

      <Grid item xs={10}>

          <h3 className={classes.header}>Choose Your Battle, {currentUser.gamerTag}</h3>

      </Grid>

      <Grid item xs={10}>

  {/* MY TOURNAMENTS TABLE */}

          <TableContainer component={Paper}>
              <Table className={classes.table} 
              aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Tournaments</strong></TableCell>
                    <TableCell>Games</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {state.map((row)=>{
                      return(
                      <TableRow key={row.tName}>
                      <TableCell component="th" scope="row">
                        <a href={"tournament/"+row.id+"/dashboard/"+currentUser.userId}>
                        {row.tName}</a>
                      </TableCell>
                      <TableCell>{row.games}</TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>{row.endDate}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>

      </Grid>   

  {/* COLLAPSIBLE MY FRIENDS SECTION */}  

       <Grid item xs={10}>
 
        <Accordion>

        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="My Friends Panel"
            id="myFriendsPanelHead"
            >
            <Typography className={classes.heading}><strong>My Friends</strong><small><i>&nbsp;&nbsp;click to open panel</i></small></Typography>
            </AccordionSummary>

          <AccordionDetails>

          <Grid container spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                className="myFriendsCont">

            <Grid item xs={8}>

                <TableContainer component={Paper}>
                  <Table className={classes.table} 
                  aria-label="Friends Table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>GamerTag</TableCell>
                        <TableCell>Platform</TableCell>
                        <TableCell>Player Since</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {friends.map((row)=>{
                          return(
                          <TableRow key={row.id}>
                          <TableCell component="th" scope="row">{row.id}
                          </TableCell>
                          <TableCell>{row.firstName} {row.lastName}</TableCell>
                          <TableCell>{row.gamerTag}</TableCell>
                          <TableCell>{row.platform}</TableCell>
                          <TableCell>{row.createdAt}</TableCell>
                          </TableRow>
                          )
                        })
                      }
                    </TableBody>
                  </Table>
                </TableContainer>

            </Grid>

            <Grid item xs={2}>

              <Button id="addFriendsBtn" variant="contained" align="left" color="primary" href="/new/friends">Add friends</Button>

            </Grid>

          </Grid>


          </AccordionDetails>

        </Accordion>

      </Grid>


  {/* CREATE OR JOIN TOURNAMENT SECTION */}
    
    <Grid item xs={4}>

          <h5 className={classes.header}>Join a Tournament</h5>

          <form  className={classes.root} noValidate autoComplete="off" onSubmit ={joinTournament} >

          <TextField id="joinTournByCode" name= "tournamentJoiner" label="Enter Tournament Code" variant="outlined" />
          <Button variant="contained" color="primary" type ="submit">Join</Button>
        </form>

    </Grid>
    </Grid>

  </Box>
  );
}

export default MyHome;