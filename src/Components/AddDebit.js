import React,{useState} from 'react';
import { useForm,Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import Select from "react-select";
import {useData} from "../Contexts/DataContext";
import "react-datepicker/dist/react-datepicker.css";
import {Account} from "./Account";
import {SubAccount} from "./SubAccount"
import { ErrorMessage } from '@hookform/error-message';
import { Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  CardFooter,} from 'reactstrap';


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
    
    return( <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
    <Col md={12} xs={12} sm={12} align="right">
      <Label>Number of Inputs</Label>
      <select name="numberOfForms" ref={register} className="input">
        {[1, 2, 3, 4].map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </Col>
    {formNumbers().map((i) => (
      <div key={i} className="wrapper">
        <Row>
          <Col md={3} sm={12} xs={12}>
            <FormGroup>
              <Label>Amount</Label>
              <Controller
              as={Input}
                type="number"
                control={control}
                name={`amount[${i}]`}
                rules={{
                  required: true
                }}
                />
              <ErrorMessage errors={errors} name={`amount[${i}]`} as="p" />
              <ErrorMessage
                errors={errors}
                name={`amount[${i}]`}
                render={({ message }) => (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              />
            </FormGroup>
          </Col>

          <Col md={3} sm={12} xs={12}>
            <FormGroup>
              <Label>Date</Label>
              <Col>
                <Controller
                  control={control}
                  name={`date[${i}]`}
                  render={(props) => (
                    <ReactDatePicker
                      placeholderText="select date"
                      onChange={(e) => props.onChange(e)}
                      selected={props.value}
                    />
                  )}
                  rules={{
                    required: true,
                  }}
                />
              </Col>
            </FormGroup>
          </Col>

          <Col md={3} sm={12} xs={12}>
            <Label>AccountType</Label>
            <Controller
              control={control}
              name={`accountType[${i}]`}
              render={(props) => (
                <Select
                  options={accountOptions}
                  onChange={(e) => {
                    props.onChange(e);
                    setAccount(() => e.value);
                  }}
                />
              )}
              isClearable
              rules={{
                required: true,
              }}
            />
          </Col>
          <Col md={3} sm={12} xs={12}>
            <Label>sub-account</Label>
            <Controller
              as={Select}
              options={filter(subAccountOptions, account)}
              name={`subAccountType[${i}]`}
              isClearable
              control={control}
              className="input"
              rules={{
                required: true,
              }}
            />
          </Col>
          <Col md={12} sm={12} xs={12}>
            <Label>Remarks</Label>
            <Controller
            as={Input}
              type="textarea"
              name={`remark[${i}]`}
              className="input"
              control={control}
            />
          </Col>
        </Row>
        <hr className="bg-success" />
      </div>
    ))}
    <CardFooter align="center">
      <Button type="submit" className="bg-success m-1 border-0">
        {" "}
        Add
      </Button>
      <Button className="bg-danger border-0 m-1" type="reset">
        Reset
      </Button>
    </CardFooter>
  </Form>
   
        )
}

export {AddDebit};