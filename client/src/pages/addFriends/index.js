//ADD FRIEND PAGE

import React, { Component, useContext,useState, useEffect } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }, header: {
    color: 'black',
  }
}));



 

function Friends() {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    const classes = useStyles();
    const [query, setQuery] = useState('');
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        console.log(users)
        if(users.length===0){
          getTable()
        }
    })

    function getTable(){
        API.getAllUsers((results)=>{
          console.log(results.data);
          setUsers(results.data)
          return results.data;
        })
    }

    const handleChange = (event) => {
      setQuery(event.target.value);
    };


    const lookUpFriend = (event) => {
        event.preventDefault()
        const {title} = event.target.elements;
        console.log(query)
        console.log(title.value)
        var search = {
            query: query,
            title:title.value
        }
        console.log(search)
        API.findFriend(search,(results)=>{
            console.log(results.data);
            setUsers(results.data);
        })
    };

    const addFriend =(event)=>{
        console.log(event);
        var id = event.target.value;
        console.log(event.target);
        if(!event.target.value){
            console.log(event.target.parentNode.value);
            id = event.target.parentNode.value;
        }
        var user = currentUser;
        user.friendId = id;
        console.log(user);
        API.addFriend(user);
    }
    return(
      <div>
        <Box>
          <Navigation/>

          <Container>
              <h1 className={classes.header}>Find Friends</h1>
          </Container>
          
          <Container className="searchLine">
              <form onSubmit = {lookUpFriend}>

              <FormControl className={classes.margin}>
              <InputLabel htmlFor="demo-customized-textbox">Search for</InputLabel>
              <BootstrapInput label="Search..." name= "title" id="demo-customized-textbox"></BootstrapInput>
              </FormControl>

              <FormControl className={classes.margin}>
                  <InputLabel id="demo-customized-select-label">By</InputLabel>
                  <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={query}
                  onChange={handleChange}
                  input={<BootstrapInput></BootstrapInput>}
                  >  
                  <MenuItem value="">
                      <em>None</em>
                  </MenuItem>
                  <MenuItem value="gamerTag">Gamer Tag</MenuItem>
                  <MenuItem value="email">Email</MenuItem>
                  <MenuItem value="firstName">First Name </MenuItem>
                  </Select>
              </FormControl>

              <FormControl className={classes.margin}>
                  <Button className="searchBtn" variant="contained" color="primary" type ="submit">Search</Button>
              </FormControl>

              </form>
              </Container>
              <Container>

              {/* MY FRIENDS TABLE */}

            <TableContainer component={Paper}>
                <Table className={classes.table} 
                aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Gamer Tag</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Platform</TableCell>
                      <TableCell>Add</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {users.map((row)=>{
                        return(
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                        {row.gamerTag}
                        </TableCell>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.platform}</TableCell>
                        <TableCell>   
                            <Button variant="contained" color="primary" onClick ={addFriend} value = {row.id} >Add</Button>
                        </TableCell>

                        </TableRow>
                        )
                      })
                    }
                  </TableBody>
                </Table>
              </TableContainer>
          </Container>
        </Box>
      </div>
    )

}

export default Friends