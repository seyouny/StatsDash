import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Bot from "./playercard";
import performance from "../../utils/performanceSeeds.json";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
var players = []
performance.matches.map((stats)=>{
    var play = 
    {
        kills:stats.playerStats.kills,
        headshots:stats.playerStats.headshots,
        assists:stats.playerStats.assists,
        rank:stats.playerStats.rank
    }
    players.push(play)
})
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
// var players = [
//     {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1},
//      {"user":"bob",
//      "player":1}
//  ]
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5}>
        {players.map((play)=>{
            return <Bot
            headshots = {play.headshots}
            rank = {play.rank}
            assists = {play.assists}
            />
        })}
      </GridList>
    </div>
  );
}