import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    fullWidth: true,
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
          image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/44e57fd8-2629-4b3e-afad-e5f0469dff6b/d858mcf-cd891165-65d5-4765-a573-b71266a12e10.jpg/v1/fill/w_1024,h_576,q_75,strp/call_of_duty_wallpaper_by_sorrowda_d858mcf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC80NGU1N2ZkOC0yNjI5LTRiM2UtYWZhZC1lNWYwNDY5ZGZmNmJcL2Q4NThtY2YtY2Q4OTExNjUtNjVkNS00NzY1LWE1NzMtYjcxMjY2YTEyZTEwLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.LSgj-3r-LqqS5QY5hJLUvA4oDIEwxl4cKXoVddVRjE8"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}