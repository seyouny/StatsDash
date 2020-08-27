import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';
import ReactPlayer from 'react-player'
import smoke2 from './smoke2.mp4'

//npm install react-player --save

const useStyles = makeStyles({
    root: {
        fullWidth: true,
        display: 'inline-block',
        float: 'none',
        position: 'relative',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        overflow: 'hidden',
        zIndex: -100,
    },
    video: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        minHeight: '100%',
        WebkitTransform: 'translate(-50%, -50%)',
        MozTransform: 'translate(-50%, -50%)',
        MsTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        display: 'block',
    }
  
});

export default function Smoke () {
  const classes = useStyles();

  return (

    <ReactPlayer url={smoke2} className="myVideo" playing autoPlay muted loop />

  );
}

