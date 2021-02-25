import React from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useData} from "../Contexts/DataContext";
import { useForm,Controller } from 'react-hook-form';
import { Button } from 'reactstrap';
import axios from 'axios';

export const IncomeStatement=()=>{

const{setIncomeStatement}=useData();
const {handleSubmit,control} = useForm({
        reValidateMode: 'onChange',
          
      });   

const onSubmit=(date)=>{
    
    const event = new Date(date.startDate);
    const eventTwo = new Date(date.endDate);      
    const startDate=event.toISOString();
    const endDate=eventTwo.toISOString();
   if(typeof startDate!=='undefined'){
 axios.get(`https://nihiloacc.herokuapp.com/api/IncomeStatement/${startDate}/${endDate}`,
    {'headers':{'Authorization':localStorage.getItem('token')}}).then(response=>{
          if(response.status==200){
        setIncomeStatement(response.data); 
        }else{
            alert("please refresh and try again");
        }
    })
  }
}
return(
   <form  className="income-form" onSubmit={handleSubmit(onSubmit)}> 
 
                <Controller
                 control={control}
                 name={"startDate"}
             render={(props) => (
             <ReactDatePicker
              className="incomeinput"
              placeholderText="from Date"
              onChange={(e) => props.onChange(e)}
              selected={props.value}/>
              )}
              rules={{
                required:true
                }}
                />
                <Controller
                         control={control}
                         name={"endDate"}
                     render={(props) => (
                     <ReactDatePicker
                      className="incomeinput"
                      placeholderText="up to date"
                      onChange={(e) => props.onChange(e)}
                      selected={props.value}/>
                      )}
                      rules={{
                        required:true
                        }}
                        />
            <div className="button-div">            
           <Button className="button" type="submit">go</Button>
           </div>
   </form>
   
);

}