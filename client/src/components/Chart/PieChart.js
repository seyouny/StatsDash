import React from 'react';
import Chart from 'chart.js';
import performance from "../../utils/performanceSeeds.json";



const color = [
    'rgba(184,60,19,.5)',
    'rgba(88,52,33,.5)',
    'rgba(224,207,148,.5)',
    'rgba(56,145,145,.5)',
    'rgba(69,75,84,.5)',
    'rgba(88,98,86,.5)' 
];


export default class PieChart extends React.Component {
    componentDidMount() {
        // chartjs code goes here
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const pie = document.getElementById('pie');
        const pieChart = new Chart(pie, {
            type: 'polarArea',
            data: {
                labels: ['Placement', 'Revives', 'Overall Score'],
                datasets: performance.matches.map((match, i) => {
                    return {
                        label: 'Player ' + (i + 1),
                        data: [match.playerStats.score, match.playerStats.damageDone, match.playerStats.kills],
                        fill: false,
                        borderColor: color[i],
                        pointRadius: 2,
                        pointBorderColor: color[i],
                        pointBackgroundColor: color[i],
                        backgroundColor: color[i],
                        borderWidth: 2
                    }
                })
                // labels: ['Player 1', 'Player2', 'Player 3'],
                // datasets: [{
                //     data: [5, 25, 70],
                //     backgroundColor: ['blue', 'green', 'red'],
                //     borderWidth: 0
                // }]
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
            
            <div >
                <canvas id="pie" />
            </div>
            // <div>
            //     <canvas id="pie" />
            // </div>
        
        );
    }
}