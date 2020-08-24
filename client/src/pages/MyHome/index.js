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


const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
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
      console.log(results.data);
      setState(results.data)
      return results.data
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
      <Navigation />
      <Grid container spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                className="myHomeCont">

      <Grid item xs={10}>

        <Container>

  {/* GAMER GREETING */}

  <h3>Choose Your Battle, {currentUser.gamerTag}</h3>

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
                        <a href={"api/tournament/"+row.id+"/dash"}>
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

          <h5>Join a Tournament</h5>

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