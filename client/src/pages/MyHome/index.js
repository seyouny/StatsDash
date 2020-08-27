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
import TextField from '@material-ui/core/TextField';
import { AuthContext } from "../../Auth";
import API from "../../utils/API";
import NewChoose from "../NewChoose";
import TourneySeeds from "../../utils/tourneySeeds";
import Smoke from "./homeVidBanner";
import Banner from "./homeBanner";
import Styles from './style.css';


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
      setState(results.data.Tournaments)
      return results.data.Tournaments
    })
  }
  function joinTournament(event){
    event.preventDefault()
    const {tournamentJoiner} = event.target.elements;
    console.log(tournamentJoiner.value);

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

      <Grid item xs={10}>

        <Container>

  {/* GAMER GREETING */}

  <h3 className={classes.header}>Choose Your Battle, {currentUser.gamerTag}</h3>

          {/* MY TOURNAMENTS TABLE */}

          <TableContainer component={Paper}>
              <Table className={classes.table} 
              aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Tournament Name</TableCell>
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

      </Container>
    </Grid>

  {/* CREATE OR JOIN TOURNAMENT SECTION */}

    <Grid item xs={4} className="homeButtonDiv">


          <Button variant="contained" align="left" color="primary" href="/new/tournament">Create New Tournament</Button>

    </Grid>
    
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