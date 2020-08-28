import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chart from "../../pages/Chart"

const useStyles = makeStyles({
  root: {
    fullWidth: true,
  },
  media: {
    height: 140,
  },
});

export default function Stats(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardActions>
       <p>{props.currentuser}'s Statistics For This Tournament </p>

      </CardActions>
      <CardActionArea>
        <h4>Rank:{props.rank} </h4>
        <h5>Kills: {props.kills}</h5>
        <h5>Gulag Kills: {props.gulagkills}</h5>
        <h5>Gulag Deaths: {props.gulagdeaths}</h5>
        <h5>Overall Damage: {props.damage}</h5>
      </CardActionArea>
    </Card>
  );
}