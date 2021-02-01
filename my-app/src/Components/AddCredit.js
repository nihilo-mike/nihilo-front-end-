import React from 'react';
import { useForm,Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import ReactSelect from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import {useData} from "../Contexts/DataContext";
import {Account} from "./Account";
import {SubAccount} from "./SubAccount"
import { ErrorMessage } from '@hookform/error-message';
// to do correct the validation errors 
//apply validation for all 

const AddCredit=()=>{
//importing optionlist constants
const{subAccountOptions}=SubAccount();
const{accountOptions}=Account();
const {setCreditData}=useData();   
    //react hook forms mthods 
    const { register, handleSubmit, reset, errors, watch,control} = useForm({
        reValidateMode: 'onChange'
        });
    //this will keep count of how many forms we have 
    const watchNumberofForms = watch('numberOfForms');
     
    //this will assign keys to the forms 
    function formNumbers() {
        return [...Array(parseInt(watchNumberofForms || 1)).keys()];
    }
    //basically setting the submit to value called credit data 
   function onSubmit(creditData) {
        // sets the data to creditdata 
           setCreditData(()=>creditData);
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
          {/*using a ref to save the values */}
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
                as={ReactSelect}
               className="input"
              options={accountOptions}
              name={`accountType[${i}]`}
              isClearable
              control={control}
              rules={{
                required: true
              }}
              />
           </div>
           <div>
              <label className="label">sub-account</label>
              <Controller
               as={ReactSelect}
              options={subAccountOptions}
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

export {AddCredit};
