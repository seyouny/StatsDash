import React from 'react';
import Chart from 'chart.js';
// import performance from "../../utils/performanceSeeds.json";

export default class BarChart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    this.state = {
                    performance:props.performance
                }
    };
    componentDidMount() {
       
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

        var fillerArr = []
        this.state.performance.map((match, i) => {
            fillerArr.push( {
                label: match.gamerTag,
                data: [match.damage, match.score],
                // fill: false,
                borderColor: color[i],
                backgroundColor: color[i],
                borderWidth: 1
            })
        })

        const barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Damage', 'Overall Score'],
                datasets: fillerArr
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