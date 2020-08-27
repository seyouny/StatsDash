import React from 'react';
import Chart from 'chart.js';
import firebase from 'firebase';
import API from '../../utils/API';
import performance from "../../utils/performanceSeeds.json";

export default class LineChart extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        /*

        axios.get('/api/player/stats')
        .then(res => {
           this.setState({ data: res.data })
        });

        datasets: this.state.data.map
        */

        // console.log(performance);

        const color = [
            'rgba(184,60,19,.3)',
            'rgba(88,52,33,.3)',
            'rgba(224,207,148,.3)',
            'rgba(56,145,145,.3)',
            'rgba(69,75,84,.3)',
            'rgba(88,98,86,.3)' 
        ];

        const lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Placement', 'Revives'],
                datasets: performance.matches.map((match, i) => {
                    return {
                        label: 'Player ' + (i + 1),
                        data: [match.playerStats.teamPlacement, match.playerStats.objectiveReviver],
                        // fill: false,
                        borderColor: color[i],
                        pointRadius: 2,
                        pointBorderColor: color[i],
                        pointBackgroundColor: color[i],
                        backgroundColor: color[i],
                        borderWidth: 1
                    }
                })
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                responsive: true
                
            }
        });
    
        /*
        performance.matches.map((matches)=>{
            
            
            const lineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Placement', 'Revives', 'Overall Score'],
                    datasets: [
                        {
                            label: 'Player 1',
                            data: [matches.playerStats.score, matches.playerStats.objectiveReviver, matches.playerStats.kills],
                            fill: false,
                            borderColor: 'rgba(0,140,232,.4)',
                            pointBorderColor: 'rgba(0,140,232,.4)',
                            pointBackgroundColor: 'rgba(0,140,232,.4)',
                            backgroundColor: "transparent",
                            borderWidth: 2
                        },
                        {
                            label: 'Player 2',
                            data: [22, 78, 51],
                            fill: false,
                            borderColor: 'rgba(160,160,160,.4)',
                            pointBorderColor: 'rgba(160,160,160,.4)',
                            pointBackgroundColor: 'rgba(160,160,160,.4)',
                            backgroundColor: "transparent",
                            borderWidth: 2
                        },
                        {
                            label: 'Player 3',
                            data: [39, 56, 64],
                            borderColor: 'rgba(204,204,0,.4)',
                            pointBorderColor: 'rgba(204,204,0,.4)',
                            pointBackgroundColor: 'rgba(204,204,0,.4)',
                            backgroundColor: "transparent",
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    responsive: true
                    
                }
            });
        })
        */
        
                
            
        
    }

    render() {
        return (
            
            <div>
                <canvas id="canvas" />
            </div>
        );
    }
}