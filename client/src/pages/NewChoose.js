import React, { Component, useContext } from "react";
import { AuthContext } from "../Auth";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Navigation from "../components/Navigation";
import soldier1 from "../components/NewChoose/soldier1.jpg";
import soldierTeam from "../components/NewChoose/soldierTeam.jpg";


export default function NewChoose () {

    return (
    <Container>
        <Navigation></Navigation>
        <Grid container spacing={3}
                direction="row"
                justify="center"
                alignItems="center">

            <Grid item xs={4}>
                <Paper className="newChoose">
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Solitary Soldier"
                            height="240"
                            image={soldier1}
                            title="Contemplative Reptile"
                            />
                        <CardContent>
                            If you have not yet signed up, here's where to do that.
                            <CardActionArea>
                                <Button size="small" color="primary" href="/new/player">
                                New Player
                                </Button>
                            </CardActionArea>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className="newChoose">
                    <Card>
                    <CardMedia
                        component="img"
                        alt="Team of Soldiers"
                        height="240"
                        image={soldierTeam}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                            Already signed up and want to start a new Tournament? Click here.
                            <CardActionArea>
                                <Button size="small" color="primary" href="/new/tournament">
                                New Tournament
                                </Button>
                            </CardActionArea>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>                
    </Container>


    )
}