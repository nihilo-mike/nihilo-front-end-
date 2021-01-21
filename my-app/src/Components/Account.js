import {useFetch} from "./useFetch"
export const Account=()=>{
const url1="https://nihiloacc.herokuapp.com/api/AccountType";
const {data:accountType,loading:accLoad}=useFetch(url1);
const accountOptions=accountType.map(a=>(
    {
      "value":a.accTypeId,
      "label":a.name
    })) 
return{accountOptions,accLoad};

};



