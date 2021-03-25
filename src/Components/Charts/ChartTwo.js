import React  from 'react';
import {   Line } from 'react-chartjs-2';
import { Roa } from '../Roa';


export const ChartTwo=()=>{
 
const{roa}=Roa();
const arr=[];




const percentConv=(Array,Output)=>{
  Array.forEach(element => {
    var tmp=(element*100).toFixed(1);
    Output.push(tmp);
   
        });
  return Output;
  }

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August','September','October','November','December'],
    datasets: [
      {
        label: 'Profitability over time',
        fill: false,
        lineTension: 0.2,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data:percentConv(roa,arr),
      }
    ]
  };
  
  return (
      <div>
        <h4>Return on investment in % </h4>
        <Line data={data} />
        </div>
    );
  }

  
