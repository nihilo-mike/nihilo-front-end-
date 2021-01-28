import { Button } from "reactstrap";
import {useData} from "../Contexts/DataContext";

export const Results=()=>{
    const {creditData}=useData()||{};
    const {debitData}=useData()||{};
    const creditTransactions = [];
    const debitTransactions=[];
    

//function to add 
const add=(A)=>{
    var sum=0;  
    for (let index = 0; index < A.length; index++) {
          const element = A[index];
        let tmp=Number(element)
          sum+=tmp;
      }
      return sum;
  }
//function to extract indivisual elements from the form data 
const setValues=(data,Array)=>{
for (let index = 0; index < data.numberOfForms; index++) {
        const element ={
            amount: data.amount[index],
            remark: data.remark[index],
            date: data.date[index],
            accountType: {
                accTypeId:data.accountType[index].value
            },
            subAccountType: {
                subId: data.subAccountType[index].value
            }
        }
   Array.push(element)}
}

const handleSubmit=()=>{
    //checking to see if the data is not equal to null 
if(JSON.stringify(creditData) != "{}"&&JSON.stringify(debitData) != "{}"){
        console.log(creditData);
    //checking to see if the two datas are equal before submitting the form 
        if(add(creditData.amount)===add(debitData.amount)){
            setValues(creditData,creditTransactions);
            setValues(debitData,debitTransactions);
            
            
            
            
            
            
            
            
            
            console.log(JSON.stringify(debitTransactions));
            console.log(JSON.stringify(creditTransactions));
            
            }else{return;}  
}else{return;}
   
}

return(<button onClick={handleSubmit}>let goo</button>);
    
}
