import React,{useState} from 'react';
import { useForm,Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import ReactSelect from "react-select";
import {useData} from "../Contexts/DataContext";
import "react-datepicker/dist/react-datepicker.css";
import {Account} from "./Account";
import {SubAccount} from "./SubAccount"
import { ErrorMessage } from '@hookform/error-message';

function AddDebit(){
const{subAccountOptions}=SubAccount();
const{accountOptions}=Account();
const {setDebitData}=useData();
const [account, setAccount] = useState(null); 
const optionlist=[]; 
   
    const { register, handleSubmit, reset, errors, watch,control} = useForm({
      reValidateMode: 'onChange',
        
    });

    const watchNumberofForms = watch('numberOfForms');
    //a filter for the dependent dropdown
    const filter=(Array,Number)=>{
      for (let i = 0; i < Array.length; i++){
        if(Array[i].parent === Number){
        optionlist.push(Array[i]);}
        }return optionlist}

    function formNumbers() {
        return [...Array(parseInt(watchNumberofForms || 1)).keys()];
    }
    
   function onSubmit(debitData) {
    setDebitData(debitData);
      }
    
    return(
    <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
        <div>
        <label className="label">number of inputs</label>
        <select name="numberOfForms" ref={register} className="input">
            {[1,2,3,4].map(i => 
                <option key={i} value={i}>{i}</option>
            )}
        </select>
        
    </div>
      {formNumbers().map(i=>(
          <div key={i} className="wrapper">
          <div>
             <label className="label">amount</label>
             <input type="number" name={`amount[${i}]`} ref={register({validate:value=>value>=1||"amount is required"})} 
              /> 
             <ErrorMessage errors={errors} name={`amount[${i}]`} as="p" />  
            <ErrorMessage
              errors={errors}
              name={`amount[${i}]`}
              render={({ message }) => <p style={{color:"red"}}>{message}</p>}
         />

           </div>
           <div>   
              <label className="label">remark</label>
              <input name={`remark[${i}]`} className="input" ref={register} />
           </div>
            <div>  
             <label className="label">date</label>
                <Controller
                 control={control}
                 name={`date[${i}]`}
             render={(props) => (
             <ReactDatePicker
              className="input"
              placeholderText="select date"
              onChange={(e) => props.onChange(e)}
              selected={props.value}/>
              )}
              rules={{
                required:true
                
              }}
            />
            </div>
             <div>    
             <label className="label">AccountType</label>
             <Controller
              control={control}
              name={`accountType[${i}]`}
              render={()=>(
              <ReactSelect
              className="input"
              options={accountOptions}
              onChange={(e)=>{setAccount(()=>e.value)}}
              />)}
              isClearable
              rules={{
                required: true
              }}
              />
           </div>
           <div>
              <label className="label">sub-account</label>
              <Controller
               as={ReactSelect}
            options={filter(subAccountOptions,account)}
             name={`subAccountType[${i}]`}
              isClearable
              control={control}
              className="input"
              rules={{
                required: true
                
              }}
              />
           </div>
           
        </div> 
        ))}
          <button type="submit" className="btn btn-primary mr-1"> add</button>
          <button className="btn btn-secondary mr-1" type="reset">Reset</button>
         </form> 
        )
}

export {AddDebit};