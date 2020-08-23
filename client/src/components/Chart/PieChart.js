import React from 'react';
import Chart from 'chart.js';

export default class PieChart extends React.Component {
    componentDidMount() {
        // chartjs code goes here
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const pie = document.getElementById('pie');
        const pieChart = new Chart(pie, {
            type: 'pie',
            data: {
                labels: ['Player 1', 'Player2', 'Player 3'],
                datasets: [{
                    data: [5, 25, 70],
                    backgroundColor: ['blue', 'green', 'red'],
                    borderWidth: 0
                }]
            },
            options: {
                rotation: -0.7 * Math.PI,
                responsive: true,
                //maintainAspectRatio: false
            },
        });


    }

    render() {
        return (
            
            <div style={{ width: '400px', height: '200px' }}>
                <canvas id="pie" />
            </div>
            // <div>
            //     <canvas id="pie" />
            // </div>
        
        );
    }
}