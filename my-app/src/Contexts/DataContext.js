import React,{useState,useContext} from 'react';



export const DataContext=React.createContext();
 
 
export const DataProvider=({children})=>{
    const[creditData,setCreditData]=useState({});
    const[debitData,setDebitData]=useState({});
    const[balanceSheet,setBalanceSheet]=useState({});
    const[incomeStatement,setIncomeStatement]=useState({});
   
    
    return(
        <DataContext.Provider value={{incomeStatement,setIncomeStatement,creditData,setCreditData,debitData,setDebitData,balanceSheet,setBalanceSheet}}>
            {children}
        </DataContext.Provider>
    );

};
export const useData=()=> useContext(DataContext)

