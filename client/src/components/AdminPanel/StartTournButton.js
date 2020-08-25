//START TOURNAMENT BUTTON

import React from 'react';
import Button from '@material-ui/core/Button';


function StartTournButton () {
    
        //Incomplete backend. this function will need to set the start date and time so that the API query can pull the next x# of games from that starting point.

    const startTournament = () => {

        alert ("When you click OK, the tournament will start and the official UTC start time will be logged");

        //calculate UTC start time to match "utcStartSeconds" in API query.
        let StartTime = new Date().getTime();
        console.log("UTC Start time", StartTime);

        //change status in Tournament to "active" and set start date in Tournament table to now in UTC time
        // API.updateTournament...    
    };
  
  
    return (
      <div className="adminPanel">
        <Button id="startTournBtn" variant="outlined" color="primary" onClick={startTournament}>
          Start Tournament
        </Button>
      </div>
    );
  }
  
export default StartTournButton;