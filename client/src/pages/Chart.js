import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BarChart from '../components/Chart/BarChart';
import PieChart from '../components/Chart/PieChart';
import RadarChart from '../components/Chart/RadarChart';
import LineChart from '../components/Chart/LineChart';
import performanceSeeds from "../utils/performanceSeeds.json";

export default class Chart extends React.Component {
    componentDidMount() {
        console.log(performanceSeeds.matches);
        console.log("Checking");
    } 

    render() {
        return (
            <Container>
                <Grid container spacing={3} >

                    <Grid item xs={12} sm={6} md={6} align="center" component={Paper} >
                        
                        <BarChart 
                          performance = {performanceSeeds.matches}
                        />
                        
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={6} align="center" >
                        
                        <PieChart />
                        
                    </Grid> */}
                    <Grid item xs={12} sm={6} md={6} align="center" component={Paper} >
                        
                        <RadarChart 
                            performance = {performanceSeeds.matches}
                        />
                    
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} align="center" component={Paper}>
                        
                        <LineChart 
                            performance = {performanceSeeds.matches}
                        />
                    
                    </Grid>
                </Grid >
                
                {/* <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <BarChart />
                    <PieChart />
                    </Grid>
                </Grid>
                </div> */}
            </Container>
        );
    }
}