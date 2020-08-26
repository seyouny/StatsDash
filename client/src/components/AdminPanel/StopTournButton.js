//STOP TOURNAMENT BUTTON

import React from 'react';
import Button from '@material-ui/core/Button';
import Styles from './adminpanelstyle.css';



function StopTournButton () {
    
        //Incomplete backend. this function will need to set the start date and time so that the API query can pull the next x# of games from that starting point.

    const stopTournament = () => {
        alert ("The tournament will stop when you click OK!");

        //calculate UTC stop time to match "utcStartSeconds" in API query.
        let StopTime = new Date().getTime();
        console.log("Stop time", StopTime);

        //TODO: change status in Tournament to "active" and set start date in Tournament table to now in UTC time
        //API.updateTournament...    
    };
  
  
    return (
      <div className="adminPanel">
        <Button id="stopTournBtn" variant="outlined" className="adminBtn" color="secondary" onClick={stopTournament}>
          Stop Tournament
        </Button>
      </div>
    );
  }
  
export default StopTournButton;