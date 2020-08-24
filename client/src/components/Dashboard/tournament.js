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

export default function Middle(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardActions>
        <div size="large" color="primary">
          Tournament 
          Dashboard
        </div>
        <hr/>
        <div size="small" color="primary">
          Status:
        </div>
        <Button size="small" color="primary">
          Learn More
        </Button>

      </CardActions>
      <CardActionArea>
        <Chart/>

      </CardActionArea>
    </Card>
  );
}