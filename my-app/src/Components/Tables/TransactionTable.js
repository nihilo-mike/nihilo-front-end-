import Moment from 'react-moment';
import {useData} from "../../Contexts/DataContext";
import {Table} from 'reactstrap';

export const TransactionTable=()=>{


const{transactions}=useData();

function isEmpty(value){
    return(value==null||value.length===0);
}

if(!isEmpty(transactions)){
    console.log(JSON.stringify(transactions));
return(
<Table 
striped
bordered
size="sm">
<thead>
<tr>
 <th style={{color:"white",backgroundColor:"#009600"}}>Id</th>
 <th style={{color:"white",backgroundColor:"#009600"}}>Transactions</th>
</tr>
</thead>
<tbody>
{/* mapping the data we fetched so that in can be displayed in a table   */}

{transactions.flat().map((lines,transId) => (
 <tr key={transId}>
 <th scope="row">{lines.transId}</th>
   {lines.creditTransactions.map(c =>{ 
   return (
   <> 
  <thead>
    <th style={{color:"white",backgroundColor:"#009600"}}>creditTransaction</th>
    <tr>
   <th style={{color:"white",backgroundColor:"#009600"}}>amount</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>date</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>remark</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>account</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>subaccount</th>
   </tr>
   </thead>
    <tr>  
   <td>{c.amount}</td>
   <td><Moment date={c.date}format="YYYY/MM/DD"/></td>
   <td>{c.remark}</td>
   <td>{c.accountType.name}</td>
   <td>{c.subAccountType.name}</td>
   </tr>
   </>
   );
   })}
   {lines.debitTransactions.map(d =>{ 
   return (
   <> 
  <thead>
    <tr style={{color:"white",backgroundColor:"#009600"}}>debitTransaction</tr>
    <tr>
   <th style={{color:"white",backgroundColor:"#009600"}}>amount</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>date</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>remark</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>account</th>
   <th style={{color:"white",backgroundColor:"#009600"}}>subaccount</th>
   </tr>
   </thead>
    <tr>  
   <td>{d.amount}</td>
   <td><Moment date={d.date}format="YYYY/MM/DD"/></td>
   <td>{d.remark}</td>
   <td>{d.accountType.name}</td>
   <td>{d.subAccountType.name}</td>
   </tr>
   </>
   );
   })}

   
 </tr>
))}
</tbody>
</Table>
); 
}
else return null;
}
