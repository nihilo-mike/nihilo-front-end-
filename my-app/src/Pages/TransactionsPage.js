import React from 'react';
import{TransactionTable,Transactions,SideBar}from "../Components/Index";


export const TransactionsPage=()=>{

return(
    <div className="trans-container">
    <SideBar/>    
    <Transactions/>
    <TransactionTable/>      
    </div>
    );





}