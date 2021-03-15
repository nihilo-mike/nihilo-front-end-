import {useEffect,useState}from 'react'; 
import {useFetch} from "./useFetch"
export const ProfitMargin=()=>{
  const[profitMargin,setProfitMargin]=useState([]);
  
  const url="https://nihiloacc.herokuapp.com/api/ProfitMargin";
const {data,loading:marginLoad}=useFetch(url);
const GetProfitMargin=()=>{
  
  setProfitMargin(data);
  
  }; 
useEffect(()=>{
  GetProfitMargin();
  
   },[marginLoad]);

return{profitMargin,marginLoad};  



};
