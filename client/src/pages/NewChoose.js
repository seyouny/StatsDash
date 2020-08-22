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


export default function NewChoose () {

    return (
        <Container>
        <Navigation></Navigation>
            <Grid item xs={6}>
                <Paper className="newChoose">
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                        <CardContent>
                            If you have not yet signed up, here's where to do that.
                            <CardActionArea>
                                <Button size="small" color="primary">
                                New Player
                                </Button>
                            </CardActionArea>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="newChoose">
                    <Card>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                            Already signed up and want to start a new Tournament? Here's where you do that.
                            <CardActionArea>
                                <Button size="small" color="primary">
                                New Tournament
                                </Button>
                            </CardActionArea>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>                
        </Container>


    )
}