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
const{subAccountOptions}=SubAccount();
const{accountOptions}=Account();
const {setCreditData}=useData();   
    const { register, handleSubmit, reset, errors, watch,control,unregister} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        
    });

    const watchNumberofForms = watch('numberOfForms');
     
    
    
    
    
    function formNumbers() {
        return [...Array(parseInt(watchNumberofForms || 1)).keys()];
    }
    
   function onSubmit(creditData) {
        // display form data on success
           setCreditData(creditData);
           
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