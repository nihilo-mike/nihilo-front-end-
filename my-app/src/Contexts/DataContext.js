import React,{useState,useContext} from 'react';



export const DataContext=React.createContext();
 
 
export const DataProvider=({children})=>{
    const[creditData,setCreditData]=useState({});
    const[debitData,setDebitData]=useState({})
   
    
    return(
        <DataContext.Provider value={{creditData,setCreditData,debitData,setDebitData}}>
            {children}
        </DataContext.Provider>
    );

};
export const useData=()=> useContext(DataContext)

