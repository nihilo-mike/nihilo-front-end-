import {useData} from "../Contexts/DataContext";

export const Results=()=>{
    const {creditData}=useData()||{}
    const {debitData}=useData()||{}
    
return(
    <>
    <button onClick={()=>alert(JSON.stringify(creditData))}>click me </button>
    <button onClick={()=>console.table(debitData)}>click me </button>
    </>
    
)
}
