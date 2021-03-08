import React from 'react';
import{TransactionTable,Transactions,SideBar}from "../Components/Index";

export const TransactionsPage=()=>{

return(
    <div className="grid-container">
     <SideBar/>    
    <Transactions/>
    <TransactionTable/>
    </div>
    
);





}