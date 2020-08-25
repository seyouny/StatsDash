//TOURNAMENT DASH PLACEHOLDER PAGE

import React, { Component, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Navigation from "../../components/Navigation";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { AuthContext } from "../../Auth";
import API from "../../utils/API";
import banner from "../../components/NewChoose/soldier1.jpg";
import { Card } from "@material-ui/core";
import Styles from "../TDashboard/style.css";

class TDashboard1 extends React.Component {
    render() {
        return (
            <Box>
                <Navigation />
                    <Grid container spacing={2}
                        direction="row"
                        justify="center"
                        alignItems="center">
                        
                        <Grid item xs={12} className="heroImg">
                            <h1 className="heroTxt">Tournament Name</h1>
                        </Grid>

                        <Grid item xs={12} className="placeholder">
                            <h1>Tournament Status & Details</h1>
                        </Grid>

                        <Grid item xs={12} className="placeholder">
                            <h1>Players</h1>
                        </Grid>

                        <Grid item xs={12} className="placeholder">
                            <h1>Charts</h1>
                        </Grid>
                        
                    </Grid>
            </Box>
        )
    } 
}

export default TDashboard1;