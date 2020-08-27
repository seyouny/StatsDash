import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import banner from './banner1.jpg';

const useStyles = makeStyles({
  root: {
    width: "84%",
    position: "relative",
    left: "8%"
  },
  media: {
    height: 240,
  },
});

export default function Top() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={banner}
          title="Call of Duty Collage"
        />
      </CardActionArea>
    </Card>
  );
}