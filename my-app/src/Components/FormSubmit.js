import {useData} from "../Contexts/DataContext";
import axios from "axios";

export const FormSubmit=()=>{
    const {creditData}=useData()||{};
    const {debitData}=useData()||{};
    const creditTransaction = [];
    const debitTransaction=[];
    const credit=[];
    const debit=[];
    
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
const creditConstructor=(Array,result,)=>{
   for (let index = 0; index < Array.length; index++) {
       const element ={creditTransId:Array[index].creditTransId}
       result.push(element)}
       return(result);
       }

const debitConstructor=(Array,result,)=>{
        for (let index = 0; index < Array.length; index++) {
            const element ={debitTransId:Array[index].debitTransId}
            result.push(element)}
        return(result);    
        }


const handleSubmit=()=>{
    
    //checking to see if the data is not equal to null 
if(JSON.stringify(creditData) !== "{}"&&JSON.stringify(debitData) !== "{}"){
     
    //checking to see if the two datas are equal before submitting the form 
        if(add(creditData.amount)===add(debitData.amount)){
            setValues(creditData,creditTransaction);
            setValues(debitData,debitTransaction);
            axios.all([
                axios.post(`https://nihiloacc.herokuapp.com/api/CreditTransactions`,creditTransaction,
                {'headers':{'Authorization':localStorage.getItem('token')}}),
                axios.post(`https://nihiloacc.herokuapp.com/api/DebitTransactions`,debitTransaction,
                {'headers':{'Authorization':localStorage.getItem('token')}})
           ]).then(axios.spread((creditResponse,debitResponse)=>{
            const creditTransactions=creditConstructor(creditResponse.data,credit);
            const debitTransactions=debitConstructor(debitResponse.data,debit);    
            var data={creditTransactions,debitTransactions}; 
            console.log(JSON.stringify(data)) 
            axios.post(`https://nihiloacc.herokuapp.com/api/Transaction`,
              data,
                {'headers':{'Authorization':localStorage.getItem('token')}}).then(response=>{
                    if(response.status==201){
                        alert("Succesfully Added")}
                       }).catch(err=>alert("There has been an error please refresh the page and try again"));
                
                    }))
             }else{return;}  
}else{return;}
   
}

return(<button onClick={handleSubmit}>Submit</button>);
    
}
