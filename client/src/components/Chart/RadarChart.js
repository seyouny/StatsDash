import React from 'react';
import Chart from 'chart.js';
import firebase from 'firebase';
import API from '../../utils/API';
import performance from "../../utils/performanceSeeds.json";

export default class RadarChart extends React.Component {
    componentDidMount() {
        // const ctx = document.getElementById("myChart").getContext("2d");
        const canvas = document.getElementById('myChart');
        const ctx = canvas.getContext('2d');

        
        const color = [
            'rgba(184,60,19,.5)',
            'rgba(88,52,33,.5)',
            'rgba(224,207,148,.5)',
            'rgba(56,145,145,.5)',
            'rgba(69,75,84,.5)',
            'rgba(88,98,86,.5)' 
        ];

        console.log(performance);

        const myChart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: ["Kills", "Death", "Gulag Kills", "Gulag Deaths", "Clutch Kills"],
                datasets: performance.matches.map((match, i) => {
                    return {
                        label: 'Player ' + (i + 1),
                        data: [match.playerStats.kills, match.playerStats.deaths, match.playerStats.gulagKills, match.playerStats.gulagDeaths, match.playerStats.clutchKills],
                        // fill: false,
                        borderColor: color[i],
                        radius: 1,
                        pointRadius: 2,
                        pointBorderColor: color[i],
                        pointBackgroundColor: color[i],
                        pointBorderWidth: 2,
                        backgroundColor: color[i],
                        borderWidth: 1
                    }
                })
                // datasets: performance.matches.map((match, i) => {
                //     return {
                //         label: 'Player ' + (i + 1),
                //         data: [match.playerStats.kills, match.playerStats.deaths, match.playerStats.gulagKills, match.playerStats.gulagDeaths, match.playerStats.damageClutchKills, match.playerStats.damageTaken,],
                //         borderColor: color[i],
                //         borderWidth: 1,
                //         radius: 1,
                //         pointRadius: 1,
                //         pointBackgroundColor: color[i],
                //         pointBorderWidth: 2,
                //         backgroundColor: color[i],
                //     }
                // })
                // datasets: [
                // {
                //     label: "player 1",
                //     data: [12, 19, 3, 34, 26, 57, 44, 76],
                //     borderColor: 'rgba(0,140,232,.4)',
                //     borderWidth: 1,
                //     radius: 1,
                //     pointRadius: 1,
                //     pointBackgroundColor: 'rgba(0,140,232,.4)',
                //     pointBorderWidth: 2,
                //     backgroundColor: 'rgba(0,140,232,.4)',
                // }
                // ],
            },
            options: {
                legend: {
                    display: true,
                    position: 'top'
                },
                scale: {
                    angleLines: {
                        display: false
                    },
                    ticks: {
                        // suggestedMin: 50,
                        // suggestedMax: 100,
                        beginAtZero: true
                    }
                },
                responsive: true,
            }
    
        });
                
            
       
    }

    render() {
        return (
            
            <div  >
                <canvas id="myChart" />
            </div>
        );
    }
}