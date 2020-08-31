//START TOURNAMENT BUTTON

import React from 'react';
import Button from '@material-ui/core/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Styles from './adminpanelstyle.css';
import API from "../../utils/API"



function StartTournButton (props) {
  console.log("TOURNAMENT DATA IN START BUTTON");
  console.log(props.tournamentData);
        //Incomplete backend. this function will need to set the start date and time so that the API query can pull the next x# of games from that starting point.
        const submit = () => {
          confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to start tournament? Once started you cannot add new players to this tournament.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => startTournament()
              },
              {
                label: 'No',
                onClick: () => alert("ok")
              }
            ]
          });
        };
    const  startTournament = async () => {

        alert ("When you click OK, the tournament will start and the official UTC start time will be logged");
        var tournament = props.tournamentData
        //calculate UTC start time to match "utcStartSeconds" in API query.
        let StartTime = new Date().getTime();
        tournament.startTime = StartTime
        console.log("UTC Start time", StartTime);
        console.log(tournament);
        for(var i =0; i<tournament.users.length; i++){
          await API.getMatches(tournament.users[i].gamerTag,tournament.users[i].platform).then((results)=>{
            console.log(results);
            console.log(tournament.users);
            console.log(i)
            tournament.users[i].startMatch = results[0].matchID
            console.log("success");
            console.log(tournament.users[i]);
          })
        }
        API.startTournament(tournament)

        //change status in Tournament to "active" and set start date in Tournament table to now in UTC time
        // API.updateTournament...    
    };
  
  
    return (
      <div className="adminPanel">
        <Button id="startTournBtn" className="adminBtn" variant="contained" color="secondary" onClick={submit}>
          Start Tournament
        </Button>
      </div>
    );
  }
  
export default StartTournButton;