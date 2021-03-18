import Moment from 'react-moment';
import {useData} from "../../Contexts/DataContext";
import { ContextMenuTrigger } from 'react-contextmenu';
import {Menu} from "../Menu";
import {Table} from 'reactstrap';



export const TransactionTable=()=>{
 
const ID='ID';

const{transactions}=useData();


function isEmpty(value){
   return(value==null||value.length===0);
   }    

if(!isEmpty(transactions)){
   
  return(
     
   <div className="trans-table">
         
  <Table
   style={{background:"white"}}
   hover
   borderless
   >
  <thead>
  <tr>
  <th style={{color:"white",backgroundColor:"#009600"}}align="center">Transactions</th>
    
  </tr>
  </thead>
 <tbody>
{/* mapping the data we fetched so that in can be displayed in a table   */}

{transactions.flat().map((lines,transId) => (
  <tr key={transId}>
 <ContextMenuTrigger id={ID}>
 <th scope="row" align="right"style={{color:"black",backgroundColor:"lightgrey"}}>Transaction id----------------------------{lines.transId}-------------------------------------</th> 
  <Menu id={ID}/>
  </ContextMenuTrigger>
  <thead>
    <tr>
   <th style={{color:"white",backgroundColor:"#009600"}}>amount</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>date</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>remark</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>account</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>subaccount</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>type</th>
   </tr>
   </thead>  
{lines.creditTransactions.map(c =>( 
   <>
   <tr>  
   <td>{c.amount}</td>
   <td><Moment date={c.date}format="YYYY/MM/DD"/></td>
   <td>{c.remark}</td>
   <td>{c.accountType.name}</td>
   <td>{c.subAccountType.name}</td>
   <td>Credit</td>
   </tr> 
   </>
   ))}
   {lines.debitTransactions.map(d =>{ 
   return (
   <> 
  <tr>  
   <td>{d.amount}</td>
   <td><Moment date={d.date}format="YYYY/MM/DD"/></td>
   <td>{d.remark}</td>
   <td>{d.accountType.name}</td>
   <td>{d.subAccountType.name}</td>
   <td>Debit</td>
   </tr>
   </>
   );})}
   </tr>
   
   ))}
</tbody>
</Table>
</div>
); 
}
else return (<div className="trans-table">
              <h1>End of Data</h1>
              <h6>use the page numbers to go back</h6>
           </div>);
}
