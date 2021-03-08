import React,{useState,useContext} from 'react';



export const DataContext=React.createContext();
 
 
export const DataProvider=({children})=>{
    const[creditData,setCreditData]=useState({});
    const[debitData,setDebitData]=useState({});
    const[balanceSheet,setBalanceSheet]=useState({});
    const[incomeStatement,setIncomeStatement]=useState({});
    const[analysis,setAnalysis]=useState({});
    const[currentPage,setCurrentPage]=useState(0);
    const[totalRecords,setTotalRecords]=useState(0);
    const[transactions,setTransactions]=useState([]);
    return(
        <DataContext.Provider value={{
        incomeStatement,setIncomeStatement,
        creditData,setCreditData,
        debitData,setDebitData,
        transactions,setTransactions,
        balanceSheet,setBalanceSheet,
        currentPage,setCurrentPage,
        totalRecords,setTotalRecords,
        analysis,setAnalysis}}>
            {children}
        </DataContext.Provider>
    );

};
export const useData=()=> useContext(DataContext)

