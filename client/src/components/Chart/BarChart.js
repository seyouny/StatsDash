import React from 'react';
import Chart from 'chart.js';
import performance from "../../utils/performanceSeeds.json";

export default class BarChart extends React.Component {
    componentDidMount() {
        // make async api call to back end
        // make sure to await on response result
        // loop thru user data and create dataset objects
        // labels: ['kills, 'death', 'assists']

        //datasets: [{
            //label: 'player1'
            //data: [2,4,1]
        //}...]
        const color = [
            'rgba(184,60,19,.5)',
            'rgba(88,52,33,.5)',
            'rgba(224,207,148,.5)',
            'rgba(56,145,145,.5)',
            'rgba(69,75,84,.5)',
            'rgba(88,98,86,.5)' 
        ];

        // chartjs code goes here
        const canvas = document.getElementById('canvas#1');
        const ctx = canvas.getContext('2d');

        const barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Damage', 'Damage To Kills', 'Overall Score'],
                datasets: performance.matches.map((match, i) => {
                    return {
                        label: 'Player ' + (i + 1),
                        data: [match.playerStats.damageDone, match.playerStats.damageTaken, match.playerStats.score],
                        fill: false,
                        borderColor: color[i],
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
                responsive: true,
                //maintainAspectRatio: false
            }
        });
    }

    render() {
        return (
            
            <div>
                <canvas id="canvas#1"/>
            </div>
        );
    }
}