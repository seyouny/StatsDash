import React from 'react';
import Chart from 'chart.js';
// import firebase from 'firebase';
// import API from '../../utils/API';
// import performance from "../../utils/performanceSeeds.json";

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);

    this.state ={
        performance:props.performance
    }
        
    };

    componentDidMount() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
       

        const color = [
            'rgba(184,60,19,.3)',
            'rgba(88,52,33,.3)',
            'rgba(224,207,148,.3)',
            'rgba(56,145,145,.3)',
            'rgba(69,75,84,.3)',
            'rgba(88,98,86,.3)' 
        ];

        var fillerArr = []
        this.state.performance.map((match, i) => {
            fillerArr.push( {
                label: match.gamerTag,
                data: [match.kills, match.deaths, match.damageToKills ],
                // fill: false,
                borderColor: color[i],
                pointRadius: 2,
                pointBorderColor: color[i],
                pointBackgroundColor: color[i],
                backgroundColor: color[i],
                borderWidth: 1
            })
        })

        const lineChart = new Chart(ctx, {
            
            type: 'line',
            data: {
                labels: ['Clutch Kills',  'Deaths','Damage to Kills'],
                datasets:  fillerArr
                   
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
        })
    }

    render() {
        return (
            
            <div>
                <canvas id="canvas" />
            </div>
        );
    }
}