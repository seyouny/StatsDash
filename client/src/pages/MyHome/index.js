//MY HOME

import React, { Component, useContext } from "react";
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

  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

// Working on getting real data from MySQL but getting error uid not defined
  // const data = API.getTournaments(currentUser.uid).then(
  //   console.log("Data: " + data, "Current User: " + currentUser));

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

        <h3>Choose Your Battle, (gamerTag)</h3>

          {/* MY TOURNAMENTS TABLE */}

          <TableContainer component={Paper}>
              <Table className={classes.table} 
              aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Tournament Name</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {TourneySeeds.map((row) => (
                    <TableRow key={row.tournName}>
                      <TableCell component="th" scope="row">
                        <a href="/tournament/dash">
                        {row.tournName}</a>
                      </TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>{row.endDate}</TableCell>
                      <TableCell>{row.tournStatus}</TableCell>
                    </TableRow>
                  ))}
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

          <form className={classes.root} noValidate autoComplete="off">

          <TextField id="joinTournByCode" label="Enter Tournament Code" variant="outlined" />
        </form>

    </Grid>

  
  </Grid>
  </Box>
  );
}

export default MyHome;