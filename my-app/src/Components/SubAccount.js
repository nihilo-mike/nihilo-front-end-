import {useFetch} from "./useFetch";
import {useEffect,useState}from 'react'; 


export const SubAccount=()=>{

const[subAccountOptions,setSubAccountOptions]=useState([]);
const url="https://nihiloacc.herokuapp.com/api/SubAccountType"; 
const {data:subAccountType,loading:subLoad}=useFetch(url);
  const GetSubAccount=()=>{ 
    while(!subLoad){
 setSubAccountOptions(subAccountType.map(s=>(
  {
    "value":s.subId,
    "label":s.name
  })));
  }};
     
    useEffect(()=>{
      GetSubAccount();
      },[subAccountType]);
    return{subAccountOptions,subLoad};  
  }; 




