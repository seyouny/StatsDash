//STOP TOURNAMENT BUTTON

import React from 'react';
import Button from '@material-ui/core/Button';
import Styles from './adminpanelstyle.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import API from "../../utils/API"




function StopTournButton (props) {
    
        //Incomplete backend. this function will need to set the start date and time so that the API query can pull the next x# of games from that starting point.
    const submit = () => {
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to end tournament?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => stopTournament()
          },
          {
            label: 'No',
            onClick: () => alert("ok")
          }
        ]
      });
    };
    const stopTournament = () => {
        

        //calculate UTC stop time to match "utcStartSeconds" in API query.
        let StopTime = new Date().getTime();
        console.log("Stop time", StopTime);
        console.log(props.tournamentData)
        //TODO: change status in Tournament to "active" and set start date in Tournament table to now in UTC time
        //API.updateTournament...    
        API.endTournament(props.tournamentData);
    };
  
  
    return (
      <div className="adminPanel">
        <Button id="stopTournBtn" variant="contained" className="adminBtn" color="secondary" onClick={submit}>
          Stop Tournament
        </Button>
      </div>
    );
  }
  
export default StopTournButton;