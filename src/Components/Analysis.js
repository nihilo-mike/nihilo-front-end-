import React from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useData} from "../Contexts/DataContext";
import { useForm,Controller } from 'react-hook-form';
import { Button,Card,CardBody,CardHeader } from 'reactstrap';
import axios from 'axios';
export const Analysis=()=>{

const{setAnalysis}=useData();    
const {handleSubmit,control} = useForm({
        reValidateMode: 'onChange',
          
      });   

const onSubmit=(data)=>{
    const event = new Date(data.date);
    let eventTwo=new Date(data.date);
        eventTwo.setMonth(eventTwo.getMonth()-12);
    let eventThree=new Date(data.date);
        eventThree.setMonth(eventThree.getMonth()-24);    
    const firstDate=event.toISOString();
    const secondDate=eventTwo.toISOString();
    const thirdDate=eventThree.toISOString();
   if(typeof thirdDate!=='undefined'){
     axios.all([
       axios.get(`https://nihiloacc.herokuapp.com/api/Analysis/${secondDate}/${firstDate}`,
     {'headers':{'Authorization':localStorage.getItem('token')}}),
     axios.get(`https://nihiloacc.herokuapp.com/api/Analysis/${thirdDate}/${secondDate}`,
     {'headers':{'Authorization':localStorage.getItem('token')}})
    ])
 .then(
   axios.spread((first,second)=>{
     const yearOne=first.data;
     const yearTwo=second.data;
     setAnalysis([yearTwo,yearOne]);
    }
    ))
    }
}
return(
     <Card className="balance-form">
       
       <CardHeader tag="h2">
         Analysis
       </CardHeader>
       <CardBody> 
    <form  onSubmit={handleSubmit(onSubmit)}>
    <div style={{paddingBottom:"20px"}}>
     <label className="label">date</label>
                <Controller
                 control={control}
                 name={"date"}
             render={(props) => (
             <ReactDatePicker
              placeholderText="select date"
              onChange={(e) => props.onChange(e)}
              selected={props.value}/>
              )}
              rules={{
                required:true
                }}
                />
            </div>
            <div className="balancebutton">
          <Button className="button" type="submit">go</Button>
          </div>
   </form>
   </CardBody>
   </Card>
   

);
            
}