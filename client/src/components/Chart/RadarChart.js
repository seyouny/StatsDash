import React from 'react';
import Chart from 'chart.js';

export default class RadarChart extends React.Component {
    componentDidMount() {
        
        // const canvas = document.getElementById('canvas');
        // const ctx = canvas.getContext('2d');

        
        // const radarChart = new RadarChart(ctx, {
        //     type: 'radar',
        //     data: {
        //         labels: ['Kills', 'Death', 'Damage', 'Clutch Kills', 'Revives'],
        //         datasets: [
        //             {
        //                 label: 'Player 1',
                        
        //                 data: [45, 5, 102, 26, 4],
        //                 backgroundColor: 'rgba(19, 123, 56, 0.1)'
        //             }
        //         ]
        //     },
        //     options: {
        //         scale: {
        //             angleLines: {
        //                 display: false
        //             },
        //             ticks: {
        //                 suggestedMin: 50,
        //                 suggestedMax: 100
        //             }
        //         },
        //         responsive: true,
        //     }
        // });
        
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
          type: "radar",
          data: {
            labels: ["Kills", "Death", "Damage", "Green", "Clutch Kills", "Revives"],
            datasets: [
              {
                label: "player 1",
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgba(0,140,232,.4)',
                radius: 2,
                pointRadius: 2,
                pointBackgroundColor: 'rgba(0,140,232,.4)',
                pointBorderWidth: 3,
                backgroundColor: 'rgba(0,140,232,.4)',
              },
              {
                label: "player 2",
                data: [4, 10, 5, 12, 27, 33],
              },
            ],
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
                // ticks: {
                //     suggestedMin: 50,
                //     suggestedMax: 100
                // }
                ticks: {
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
            // <div>
            //     <canvas id="canvas" />
            // </div>
                
        
        );
    }
}