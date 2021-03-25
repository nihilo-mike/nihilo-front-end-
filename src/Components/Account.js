import {useEffect,useState}from 'react'; 
import {useFetch} from "./useFetch";
import { useHistory } from "react-router-dom";
export const Account=()=>{
  let history = useHistory();
  const[accountOptions,setAccountOptions]=useState([]);
  const url="https://nihiloacc.herokuapp.com/api/AccountType";
const {data:accountType,loading:accLoad,status}=useFetch(url);
const GetAccount=()=>{
  console.log(status);
  
  if(accountType.status==401){
       history.push("/");
       }
   else{    
  setAccountOptions(accountType.map(a=>(
    {
      "value":a.accTypeId,
      "label":a.name
    })));}
  }; 

useEffect(()=>{
  GetAccount();
  },[accountType]);
return{accountOptions,accLoad};  



};



