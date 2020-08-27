//UPDATE STATS BUTTON

import React from 'react';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import Styles from './adminpanelstyle.css';


function UpdateStatsButton () {

        //Incomplete backend. this function will need to set the start date and time so that the API query can pull the next x# of games from that starting point.

    const UpdateStats = () => {

        alert ("When you click OK, we'll update the stats for all players.");

        //calculate UTC current time.
        let UpdateTime = new Date().getTime();
        console.log("UTC Start time", UpdateTime);

        //TODO: Get Tournament starttime and number of matches from Tournaments table.    

        //TODO: Trigger API query to Call of Duty database. 
        // API.getMatches... here

        //TODO: Return UpdateTime time to Tournament Dashboard in small print somewhere
    };
  
  
    return (
      <div className="adminPanel">
        <Button id="updateStatsBtn" variant="contained" color="secondary" onClick={UpdateStats}>
          Update Stats
        </Button>
      </div>
    );
  }
  
export default UpdateStatsButton;