import React from 'react'
import { Spinner, Table } from "reactstrap";
import {useFetch} from "./useFetch";
import Moment from 'react-moment';
//the url where we are getting the data from 
const url='https://nihiloacc.herokuapp.com/api/DebitTransaction';

const DebitTransactions=()=>{
   //creating our useState function
   //setting the state to an empty array at first  
   const {loading,data}=useFetch(url);
   while(loading){
     return <Spinner/>
   }
   return(
     
     <div>
       <h3 style={{color:'white',background:"black"}}>
       Debit Transactions 
     </h3>
   <Table dark 
          striped>
       <thead>
         <tr >
           <th>Id</th>
           <th>amount</th>
           <th>date</th>
           <th>remark</th>
           <th>account</th>
           <th>subaccount</th>
         </tr>
       </thead>
       <tbody>
       {/* mapping the data we fetched so that in can be displayed in a table   */}
         {data.map((lines,index) => (
           <tr key={index}>
             <th scope="row">{lines.debitTransId}</th>
             <td>{lines.amount}</td>
             <td><Moment date={lines.date}format="YYYY/MM/DD"/></td>
             <td>{lines.remark}</td>
             <td>{lines.accountType.name}</td>
             <td>{lines.subAccountType.name}</td>
           </tr>
         ))}
       </tbody>
       </Table>  
     </div>
     );
   
}


export default DebitTransactions;