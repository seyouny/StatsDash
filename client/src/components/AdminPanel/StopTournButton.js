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

    const getMatchData = async(performances)=> {
      var tournament = props.tournamentData;
      
      var newPerformances =[]
      for(var i =0; i<performances.length; i++){
        var startingMatchIndex=0;
        var matches =[];
        var data = performances[i];
        console.log(data);
        await API.getMatches(tournament.users[i].gamerTag,tournament.users[i].platform).then((results)=>{
          console.log(results);
          for(var j =0; j<results.length; j++ ){
            console.log(results[j].matchID);
            if(results[j].matchID===data.startMatch){
              console.log("Match found")
              if(!results[j-tournament.games]){
                return alert("Not enought games have been played");
              }else{
                startingMatchIndex = j;
                console.log(startingMatchIndex);
                break;
              }
            }
            matches.push(results[j].playerStats);
          }
          if(startingMatchIndex!==0){
            console.log(data);
            for(var i =0; i<tournament.games; i++){
              var game = matches[matches.length-1-i]
              console.log(game);
              data.kills+= game.kills;
              data.deaths+= game.deaths;
              if(game.objectiveLastStandKill){
                data.clutchKills += game.objectiveLastStandKill;
              }
              if(game.objectiveReviver){
                data.revives += game.objectiveReviver
              }
              data.gulagKills +=game.gulagKills
              if(game.teamPlacement===1){
                data.placement +=1
              }
              data.gulagDeaths += game.gulagDeaths
              data.damage += game.damageDone;
            }
            data.damageToKills = Math.floor(data.damage/250)
            data.overallScore =calculateScore(data);
            newPerformances.push(data)
            console.log(data);
          }
        })
      }
      tournament.performances = newPerformances
      let StopTime = new Date().getTime();
      console.log("Stop time", StopTime);
      tournament.endDate = StopTime
      console.log(tournament)
      API.endTournament(tournament);
    }
    
    const calculateScore = (performance)=>{
      var multipliers = props.tournamentData.multiplier;
      console.log(performance)
      console.log(multipliers);
      var score =0;
      score += performance.kills* multipliers.killsMultiplier;
      score += performance.deaths* multipliers.deathsMultiplier;
      score += performance.gulagKills* multipliers.gulagKillsMultiplier;
      score += performance.gulagDeaths* multipliers.gulagDeathsMultiplier;
      score += performance.damage* multipliers.damageMultiplier;
      score += performance.revives* multipliers.revivesMultiplier;
      score += performance.placement* multipliers.placementMultiplier;
      score += performance.clutchKills* multipliers.clutchKillsMultiplier;
      score += performance.damageToKills* multipliers.damageToKillsMultiplier;



      console.log(score);
      return score;
    }
    const stopTournament = async() => {
        

        //calculate UTC stop time to match "utcStartSeconds" in API query.
        let StopTime = new Date().getTime();
        console.log("Stop time", StopTime);
        console.log(props.tournamentData)
        var data = props.tournamentData
        data.endDate = StopTime
        var performances =[]
        await API.getPerformances(data.tournamentId,(results)=>{
          console.log(results);
          performances = results.data.Performances;
          console.log(performances);
          getMatchData(performances);
        });
        
        
        //TODO: change status in Tournament to "active" and set start date in Tournament table to now in UTC time
        //API.updateTournament...    
        
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