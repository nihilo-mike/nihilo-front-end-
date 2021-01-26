import {useData} from "../Contexts/DataContext";
import{useEffect}from "react";

export const Results=()=>{
    const {creditData}=useData()||{};
    const {debitData}=useData()||{};
    const{amount:creditTotal}=creditData;
    const{amount:debitTotal}=debitData;

    var creditTransactions = new Array();
    var debitTransactions=new Array();
    


  const add=(A)=>{
    var sum=0;  
    for (let index = 0; index < A.length; index++) {
          const element = A[index];
        let tmp=Number(element)
          sum+=tmp;
      }
      return sum;
  }

   const handleSubmit=()=>{
    //checking to see if the two datas are equal before submitting the form 
    if(add(creditTotal)===add(debitTotal)){
    for (let index = 0; index < creditData.numberOfForms; index++) {
            const element ={
                amount: creditData.amount[index],
                remark: creditData.remark[index],
                date: creditData.date[index],
                accountType: {
                    accTypeId:creditData.accountType[index].value
                },
                subAccountType: {
                    subId: creditData.subAccountType[index].value
                }
            }
       creditTransactions.push(element)}
     for (let index = 0; index < debitData.numberOfForms; index++) {
        const element ={
            amount:debitData.amount[index],
            remark:debitData.remark[index],
            date:debitData.date[index],
            accountType: {
                accTypeId:debitData.accountType[index].value
            },
            subAccountType: {
                subId:debitData.subAccountType[index].value
            }
        }
   debitTransactions.push(element)
 }
     console.log(JSON.stringify(debitTransactions));
     console.log(JSON.stringify(creditTransactions));
  }else{return;}  
    } 
      

return(
       <>
       <button onClick={handleSubmit}>view</button>
       </>
   );
    
}
