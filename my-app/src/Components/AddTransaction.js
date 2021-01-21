import React,{useState} from 'react';
import { useForm,Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import ReactSelect from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import {Account} from "./Account";
import {SubAccount} from "./SubAccount"

export  function AddTransaction() {

const { handleSubmit, register, control } = useForm(" ");
const [data, setData] = useState(null);
const{subAccountOptions}=SubAccount();
const{accountOptions}=Account();
  return (
    <form onSubmit={handleSubmit(data => setData(data))} className="form">
      <div className="wrapper">
              <div>
                 <label className="label">amount</label>
                 <input name="amount" className="input" ref={register} 
                  />
               </div>
               <div>   
                  <label className="label">remark</label>
                  <input name="remark" className="input" ref={register} />
               </div>
                <div>  
                 <label className="label">date</label>
                    <Controller
                     as={ReactDatePicker}
                     control={control}
                     valueName="selected" // DateSelect value's name is selected
                     onChange={([selected]) => selected}
                     name="date"
                     className="input"
                     placeholderText="Select date"
                     />
                </div>
                 <div>    
                 <label className="label">AccountType</label>
                 <Controller
                    as={ReactSelect}
                   className="input"
                  options={accountOptions}
                  name="accountType"
                  isClearable
                  control={control}
                  />
               </div>
               <div>
                  <label className="label">sub-account</label>
                  <Controller
                   as={ReactSelect}
                  options={subAccountOptions}
                  name="subAccountType"
                  isClearable
                  control={control}
                  className="input"
                  />
               </div>
                <div>     
                  <button type="submit"  
                   className="button" 
                   onClick={()=>console.log(data)}>
                     add
                   </button> 
               </div> 
        </div> 
        </form>
   );
      
  }




















      
     
