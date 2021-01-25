import {useData} from "../Contexts/DataContext";

export const Results=()=>{
    const {creditData}=useData()||{};
    const {debitData}=useData()||{};
    
 
        
    
    
   return(
       <button onClick={()=>console.log(JSON.stringify(creditData))}>view</button>
   );
    


}



