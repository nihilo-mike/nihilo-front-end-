import {useFetch} from "./useFetch"
export const SubAccount=()=>{ 
const url="https://nihiloacc.herokuapp.com/api/SubAccountType"; 
const {data:subAccountType,loading:subLoad}=useFetch(url);
const subAccountOptions=subAccountType.map(s=>(
    {
      "value":s.subId,
      "label":s.name
    })) 
return{subAccountOptions,subLoad};

};
