import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InviteFriend from './InviteFriend';
import friends from '../../utils/friendSeeds';
import Styles from './adminpanelstyle.css';
import { keys } from '@material-ui/core/styles/createBreakpoints';
import API from "../../utils/API"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  paper: {
    width: 200,
    height: 230,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function AddFriends(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setLeft(props.friends);
      setRight([]);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      
    };
    const handleSubmit = async()=>{
      console.log("HANDLE SUBMIT")
      console.log(right);
      console.log(props.joinCode);
      setOpen(false);
      var users = right
      for(var i =0; i<users.length; i++){
        users[i].userId =users[i].id;
        users[i].joinCode =props.joinCode
        console.log(users[i]);
        await API.joinTournament(users[i])
        
      }
      window.location.reload(false);

    }

  
    //SEEDS FOR TESTING, REPRESENTS PLAYERS ADDED TO TOURNAMENT
    //TODO: ONCE PLAYERS ARE SELECTED IN FRONT-END, NEED TO RETURN THE ARRAY OF SELECTED PLAYERS AND SEND THOSE TO BE ADDED TO THIS TOURNAMENT.  (REPLACE addedFriends seeds with an empty array of objects, and do some kind of insert in tournaments or performances table.)
    const addedFriends = [
      { 
        userId: 9,
        firstName: "Stephen",
        lastName: "Curry",
        email: "steph@gmail.com",
        gamerTag: "MadSkills",
      },
      { 
        userId: 10,
        firstName: "Klay",
        lastName: "Thompson",
        email: "klay@gmail.com",
        gamerTag: "DunkOnYou",
      },
      { 
        userId: 11,
        firstName: "Jerry",
        lastName: "Rice",
        email: "jerry@gmail.com",
        gamerTag: "Haaaaands",
      },
      { 
        userId: 12,
        firstName: "LeBron",
        lastName: "James",
        email: "lebron@gmail.com",
        gamerTag: "TheLTrain",
      }
    ]


    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [myFriends, setFriends] = React.useState(props.friends);
    const [left, setLeft] = React.useState(props.friends);
    const [right, setRight] = React.useState([]);
    //TODO: CHANGE USESTATE TO APPLY TO FRIENDS ADDED TO TOURNAMENT. RIGHT SHOULD BE FRIENDS ADDED TO TOURNAMENT, LEFT SHOULD BE ALL FRIENDS IN THE USERT TABLE.

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };
    
  const customList = (userArray) => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {userArray.map((value) => {

          const labelId = `transfer-list-item-${value}-label`;
          console.log("Value.FirstName :", value.firstName)
          console.log(value);
          return (
            <ListItem key={value.userId} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.firstName}`} />
              {/* <ListItemText id={labelId} primary={users} /> */}
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <div className="adminPanel">

        <Button id="inviteFriendBtn" variant="contained" className="adminBtn" color="secondary" onClick={handleClickOpen}>
        Add Friends
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Friends</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add friends who are already Bragging Rights players to this tournament.
            </DialogContentText>

                <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
                {/* <Grid item>{customList(left)}</Grid> */}
                <Grid item>{customList(left)}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleAllRight}
                        disabled={left.length === 0}
                        aria-label="move all right"
                    >
                        ≫
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleAllLeft}
                        disabled={right.length === 0}
                        aria-label="move all left"
                    >
                        ≪
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>{customList(right)}</Grid>
                </Grid>

                </DialogContent>
            <DialogActions>
                    <InviteFriend align="left"/>
                <ButtonGroup aria-label="button group">
                    <Button variant="outlined" onClick={handleClose} color="secondary">
                    Cancel
                    </Button>
                    <Button id="addFriendBtn" className="adminBtn" variant="outlined" color="secondary" type="submit" onClick={handleSubmit}>
                    Add
                    </Button>
                </ButtonGroup>
          </DialogActions>
        </Dialog>
    </div>
  );
}