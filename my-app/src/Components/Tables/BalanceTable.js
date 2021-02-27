import React from 'react';
import {useData}from"./../../Contexts/DataContext";
import {Table} from 'reactstrap';
export const BalanceTable=()=>{
    const{balanceSheet}=useData();
    

     if (JSON.stringify(balanceSheet)!=="{}") {
        const[previous,current]=balanceSheet;
          return(
              <div className="balance-table">
              <Table
              striped
              >
                  <tr>
                   <th>Assets</th>
                   <th>Selected year</th>
                   <th>Previous year</th>
                   <th>Liabilities and Stockholders equity</th>
                   <th>Selected year</th>
                   <th>Previous year</th>   
                  </tr>
                  <tr>
                    <td>cash</td>
                    <td>{current.cash}</td>
                    <td>{previous.cash}</td>
                    <td>Accounts Payable</td>
                    <td>{current.accountsPayable}</td>
                    <td>{previous.accountsPayable}</td>  
                    </tr>
                    <tr>
                    <td>Cash Equivalent</td>
                    <td>{current.cashEquivalent}</td>
                    <td>{previous.cashEquivalent}</td>
                    <td>Taxes Payable</td>
                    <td>{current.taxesPayable}</td>
                    <td>{previous.taxesPayable}</td>  
                    </tr>
                    <tr>
                    <td>Account Recievables</td>
                    <td>{current.accountReceivables}</td>
                    <td>{previous.accountReceivables}</td>
                    <td>Interests Payable</td>
                    <td>{current.interestPayable}</td>
                    <td>{previous.interestPayable}</td>  
                    </tr>
                    <tr>
                    <td>Stock Inventory</td>
                    <td>{current.stockInventory}</td>
                    <td>{previous.stockInventory}</td>
                    <td>Notes Payable</td>
                    <td>{current.notesPayable}</td>
                    <td>{previous.notesPayable}</td>  
                    </tr>
                    <tr>
                    <td>prepaid Liabilities</td>
                    <td>{current.prepaidLiabilities}</td>
                    <td>{previous.prepaidLiabilities}</td>
                    <td>Accrued Expense</td>
                    <td>{current.accruedExpense}</td>
                    <td>{previous.accruedExpense}</td>  
                    </tr>
                    <tr>
                    <td>Intellectual Properties</td>
                    <td>{current.intellectualProperties}</td>
                    <td>{previous.intellectualProperties}</td>
                    <td>Unearned Revenue</td>
                    <td>{current.unearnedRevenue}</td>
                    <td>{previous.unearnedRevenue}</td>  
                    </tr>
                    <tr>
                    <td>Plant Equipment</td>
                    <td>{current.plantEquipment}</td>
                    <td>{previous.plantEquipment}</td>
                    <td>Mortgage Payable</td>
                    <td>{current.mortgagePayable}</td>
                    <td>{previous.mortgagePayable}</td>  
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Long-Term Debt</td>
                    <td>{current.longTermDebt}</td>
                    <td>{previous.longTermDebt}</td>  
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Owners Equity</td>
                    <td>{current.ownersEquity}</td>
                    <td>{previous.ownersEquity}</td>  
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Common Stocks</td>
                    <td>{current.commonStocks}</td>
                    <td>{previous.commonStocks}</td>  
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Retained Earnings</td>
                    <td>{current.retainedEarnings}</td>
                    <td>{previous.retainedEarnings}</td>  
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Owners Drawing</td>
                    <td>{current.ownersDrawing}</td>
                    <td>{previous.ownersDrawing}</td>  
                    </tr>
                    <tr><td>  </td></tr> 
                  </Table>
                  </div>);
          }
               return(null);}