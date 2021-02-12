import {useEffect,useState}from 'react'; 
import {useFetch} from "./useFetch"
export const Account=()=>{
  const[accountOptions,setAccountOptions]=useState([]);
  const url="https://nihiloacc.herokuapp.com/api/AccountType";
const {data:accountType,loading:accLoad}=useFetch(url);
const GetAccount=()=>{
  
  setAccountOptions(accountType.map(a=>(
    {
      "value":a.accTypeId,
      "label":a.name
    }))||{});
  }; 

useEffect(()=>{
  GetAccount();
  },[accountType]);
return{accountOptions,accLoad};  



};



