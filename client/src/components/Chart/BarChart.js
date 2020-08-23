import React from 'react';
import Chart from 'chart.js';

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

        // chartjs code goes here
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
                datasets: [
                    {
                        label: 'Kills',
                        type: 'bar',
                        data: [5, 3, 8, 8],
                        backgroundColor: 'green'
                    },
                    {
                        label: 'Accuracy',
                        type: 'bar',
                        data: [5, 3, 8, 8],
                        backgroundColor: 'blue'
                    },
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
                responsive: true,
                //maintainAspectRatio: false
            }
        });
    }

    render() {
        return (
            
            <div style={{ width: '400px', height: '200px' }}>
                <canvas id="canvas" />
            </div>
            // <div>
            //     <canvas id="canvas" />
            // </div>
                
        
        );
    }
}