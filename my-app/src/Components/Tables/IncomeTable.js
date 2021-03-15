import React from 'react';
import {useData} from "../../Contexts/DataContext";
import {Table} from 'reactstrap';


export const IncomeTable=()=>{
      
    const {incomeStatement}=useData();
   if( JSON.stringify(incomeStatement)!=="{}"){
   return(<div className="incometable">
             <Table 
             size="sm"
             borderless
             striped="true"
             responsive>
             <thead>
                <tr>
                <th>Income Statement</th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                 <td>Total Revenue</td>
                 <td>{incomeStatement.revenue}</td>   
                </tr>    
                <tr>
                <td>Cost Of Goods Sold</td>
                <td>{incomeStatement.cogs}</td>
                </tr>
                <tr>
                <td>Selling and general adminstrative Costs</td>
                <td>{incomeStatement.sgac}</td>
                </tr>
                <tr>
                <td>Depreciation</td>
                <td>{incomeStatement.depreciation}</td>
                </tr>     
                <tr>
                <td>Operating Income(EBIT)</td>
                <td>{incomeStatement.ebit}</td>    
                </tr> 
                <tr>
                <td>Interest Expense</td>
                <td>{incomeStatement.interestExpense}</td>
                </tr>
                <tr>
                <td>Pretax Income</td>
                <td>{incomeStatement.preTaxIncome}</td>
                </tr>
                <tr>
                <td>Taxes</td>
                <td>{incomeStatement.taxes}</td>
                </tr>
                <tr>
                <td>Net Income</td>
                <td>{incomeStatement.netIncome}</td>
                </tr>
                <tr>
                <td>Addition to retained earnings</td>
                <td>{incomeStatement.additionToEarnings}</td>
                </tr>
                <tr>
                <td>Dividends</td>
                <td>{incomeStatement.dividends}</td>
                </tr>
            </tbody>
        </Table>
    </div>);}
    
 return(null);

}