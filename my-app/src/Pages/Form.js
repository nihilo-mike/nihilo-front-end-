import React from 'react';
import {AddCredit,AddDebit,FormSubmit}from "../Components/Index";

 export  const Form=()=>{


    return(
    <div className="addForm">
    <h1 color="white">Credit accounts</h1>    
    <AddCredit/>
    <h1 color="white">Debit accounts</h1>
      <AddDebit/>
       <br></br>
      <FormSubmit/>
      
      </div>
    
        );
    
    
    
    





}




