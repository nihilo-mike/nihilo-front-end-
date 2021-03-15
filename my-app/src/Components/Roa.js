import {useEffect,useState}from 'react'; 
import {useFetch} from "./useFetch"
export const Roa=()=>{
  const[roa,setRoa]=useState([]);
  
  const url="https://nihiloacc.herokuapp.com/api/Roa";
const {data,loading:roaLoad}=useFetch(url);
const GetRoa=()=>{
  
  setRoa(data);
  
  }; 
useEffect(()=>{
  GetRoa();
  
   },[roaLoad]);

return{roa,roaLoad};  



};
