import React  from 'react';
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

// export default class Chart extends React.Component {
    export default function Chart(props){


    // constructor(props) {
    //     super(props);
    //     console.log(props);
    //     this.state = {
    //         performances:props.performances
    //         };
    // }
   
    // componentDidMount() {
    //     console.log(this.state);
    //     console.log("Checking");
    //     console.log("In Charts");
        
    // } 

    // render() {
        const [performances, setPerformances] = React.useState(props.performances)
        React.useEffect(()=>{
            console.log(props.performances);
            if(props.performances.length!==0){
                    setPerformances(props.performances);
                    console.log(performances);
            }
        })
        
    if(performances.length>0){
        return (
            <Container>
                <Grid container spacing={3} >

                    <Grid item xs={12} sm={6} md={6} align="center" component={Paper} >
                        
                        <BarChart 
                        //   performance = {this.state.performances}
                        performance = {performances}

                        />
                        
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={6} align="center" >
                        
                        <PieChart />
                        
                    </Grid> */}
                    <Grid item xs={12} sm={6} md={6} align="center" component={Paper} >
                        
                        <RadarChart 
                            //   performance = {this.state.performances}
                            performance = {performances}                        
                        />
                    
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} align="center" component={Paper}>
                        
                        <LineChart 
                           //   performance = {this.state.performances}
                            performance = {performances}
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
    return(
        <h1>Loading...</h1>
    );
    // }
}