import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Bot(props) {
  const classes = useStyles();

  return (
    <Grid>
    <Card className={classes.root}>
      <CardHeader

        title={props.userId}
        subheader = " "
        // subheader={"Rank: " + props.rank}

      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <p>{"Deaths: "+ props.deaths + "\n"}</p>
       <p>{"Gulag Death: "+props.gulagdeaths + "\n"}</p>   
       <p>{"Gulag Kills: "+props.gulagkills + "\n"}</p>   

       <p>{"Damage: "+props.damage + "\n"}</p>   
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
}