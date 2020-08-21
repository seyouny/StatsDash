import React, { Component, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Navigation from "../components/Navigation";
import { Container } from '@material-ui/core';
import { AuthContext } from "../Auth";
import API from "../utils/API"


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(tournName, startDate, endDate, tournStatus) {
  return { tournName, startDate, endDate, tournStatus };
}

const rows = [
  createData('Gio Is Dope Tournament', "8/1/20", "8/2/2020", "complete"),
  createData('Alex Is My Homey Tournament', "8/15/2020", "8/16/2020", "complete"),
  createData('Stacey Is Queen Yaaas Tournament', "8/24/2020", "8/24/2020", "scheduled"),
  createData("Royce's This MY Brainchild Y'all Grand Tournament", "8/19/2020", "8/20/2020", "active"),
  createData('Jen Rocks Up On the Mic Tourney', "8/20/2020", "8/20/2020", "active"),
];


function MyHome() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext)
  // const data = API.getTournaments(currentUser.uid);
  console.log(currentUser);
  // console.log(data);
  // rows.map((row)=>{
  //   rows.dataValues.id
  // })
  return (
    <Box>
    <Navigation />
    <Container>
        <h3>Something here maybe</h3>
        <Fab color="primary" aria-label="add">
            <AddCircleIcon />
        </Fab>
    </Container>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tournament Name</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow key={row.tournName}>
              <TableCell component="th" scope="row">
                {row.tournName} */}

          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
              <TableCell align="right">{row.tournStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Container>
      <p>Space for something here</p>
    </Container>
    </Box>
  );
}

export default MyHome;