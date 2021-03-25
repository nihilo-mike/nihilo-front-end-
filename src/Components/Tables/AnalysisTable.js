import React from 'react';
import {useData}from"./../../Contexts/DataContext";
import {Table} from 'reactstrap';
export const AnalysisTable=()=>{
    const{analysis}=useData();


    function checkNan(val) {
        if (isFinite(val)) {
            return Math.round((val + Number.EPSILON) * 100) / 100;
        }
       return 0;
     }
    

     if (JSON.stringify(analysis)!=="{}") {
        const[previous,current]=analysis;
          return(
              <div className="balancetable">
              <Table
              striped
              responsive
              >
                  <tr>
                   <th>Label</th>
                   <th>Selected year</th>
                   <th>Previous year</th>
                   <th>Label</th>
                   <th>Selected year</th>
                   <th>Previous year</th>  
                  </tr>
                  <tr>
                    <td>Debt Ratio</td>
                    <td>{checkNan(current.debtRatio)}%</td>
                    <td>{checkNan(previous.debtRatio)}%</td>
                    <td>Recievables Turnover</td>
                    <td>{checkNan(current.recievablesTurnOver)}%</td>
                    <td>{checkNan(previous.recievablesTurnOver)}%</td>  
                    </tr>
                    <tr>
                    <td>Equity Multiplier</td>
                    <td>{checkNan(current.Equitymultiplier)}%</td>
                    <td>{checkNan(previous.Equitymultiplier)}%</td>
                    <td>capital Intensity</td>
                    <td>{checkNan(current.capitalIntensity)}%</td>
                    <td>{checkNan(previous.capitalIntensity)}%</td>  
                    </tr>
                    <tr>
                    <td>Return on Assets</td>
                    <td>{checkNan(current.roa)}%</td>
                    <td>{checkNan(previous.roa)}%</td>
                    <td>Profit Margin</td>
                    <td>{checkNan(current.profitMargin)}%</td>
                    <td>{checkNan(previous.profitMargin)}%</td>  
                    </tr>
                    <tr>
                    <td>Inventory TurnOver</td>
                    <td>{checkNan(current.inventoryTurnOver)}%</td>
                    <td>{checkNan(previous.inventoryTurnOver)}%</td>
                    <td>Times Interest</td>
                    <td>{checkNan(current.timesInterest)}%</td>
                    <td>{checkNan(previous.timesInterest)}%</td>  
                    </tr>
                    <tr>
                    <td>Total Asset Turnover</td>
                    <td>{checkNan(current.totalAssetTurnOver)}%</td>
                    <td>{checkNan(previous.totalAssetTurnOver)}%</td>
                    </tr>
                    <tr>
                    </tr>
                    <tr><td>  </td></tr> 
                  </Table>
                  </div>);
                  }
               return(null);}