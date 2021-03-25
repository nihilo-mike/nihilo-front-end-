import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { AddCredit, AddDebit, FormSubmit, Header } from "../Components/Index";


 export  const Form=()=>{


    return(
      <>
      <Header />
      <Card className="addForm">
        <CardHeader>Credit accounts</CardHeader>
        <CardBody>
          <AddCredit />
        </CardBody>
        <CardHeader>Debit accounts</CardHeader>
        <CardBody>
          <AddDebit />
        </CardBody>
        <CardFooter align="center">
          <FormSubmit />
        </CardFooter>
      </Card>
    </>
  );
    
    
    
    





}




