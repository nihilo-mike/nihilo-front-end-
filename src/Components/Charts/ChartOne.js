import React  from 'react';
import {   Bar  } from 'react-chartjs-2';
import { ProfitMargin } from '../ProfitMargin';


export const ChartOne=()=>{
 
const{profitMargin}=ProfitMargin();
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
        data:percentConv(profitMargin,arr),
      }
    ]
  };
  
  return (
      <div>
        <h4>Profit Margin in % </h4>
        <Bar data={data} />
        </div>
    );
  }