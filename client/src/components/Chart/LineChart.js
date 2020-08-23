import React from 'react';
import Chart from 'chart.js';

export default class BarChart extends React.Component {
    componentDidMount() {
        
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
                datasets: [
                    {
                        label: 'Kills',
                        // type: 'bar',
                        data: [45, 25, 57, 35],
                        fill: false,
                        borderColor: "#742774"
                    },
                    {
                        label: 'Death',
                        // type: 'bar',
                        data: [2, 4, 8, 3],
                        fill: false,
                        borderColor: "#642872"
                    },
                    {
                        label: 'Damage',
                        // type: 'bar',
                        data: [39, 56, 21, 64],
                        fill: false,
                        borderColor: "#242492"
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