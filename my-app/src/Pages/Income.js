import React from 'react';
import{IncomeStatement,IncomeTable,SideBar}from "../Components/Index";

export const Income=()=>{

return(
    <div className="flex-container">
     <SideBar/>    
    <div className="income">
    <IncomeStatement/>
    <IncomeTable/>
    </div>
    </div>
    
);





}