import React from 'react';
import{IncomeStatement,IncomeTable,SideBar}from "../Components/Index";


export const Income=()=>{

return(
  <div className="grid-container">
     <SideBar/>    
    <IncomeStatement/>
    <IncomeTable/>
    </div>);





}