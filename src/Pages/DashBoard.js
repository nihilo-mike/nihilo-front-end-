import React from 'react';
import {Header, ChartOne,ChartTwo} from "../Components/Index";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    Spinner,
} from "reactstrap";
import { useFetch } from '../Components/useFetch';
import { Roa } from '../Components/Roa';


export const DashBoard=()=>{

  const{data:revenue,loading}=useFetch("https://nihiloacc.herokuapp.com/api/Revenue");
  const{roaLoad}=Roa();

  if(!loading&&!roaLoad){
return(
  <>
<Header/>
<div style={{paddingTop:"75px"}} >
 <Row>
  <Col lg="12">
  <Card >
      <CardHeader>
        <Row>
          <Col  lg="12">
            <CardTitle tag="h1">Welcome!</CardTitle>
          </Col>
          <Col lg="4">
           </Col>
        </Row>
      </CardHeader>
      <CardBody >
     </CardBody>
      </Card>
  </Col>
</Row> 
<Row>
  <Col lg="6">
    <Card >
      <CardHeader>
        <CardTitle tag="h3">
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div >
        <ChartOne/>
        </div>
      </CardBody>
    </Card>
  </Col>
  <Col lg="6">
    <Card >
      <CardHeader>
        <CardTitle tag="h3">
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div >
        <ChartTwo/>
        </div>
      </CardBody>
    </Card>
  </Col>
  <Col lg="4">
    <Card >
      <CardHeader>        
        <CardTitle tag="h3">
        Total Revenue for year
        </CardTitle>
      </CardHeader>
      <CardBody>
      
      <h1 style={{fontSize:"75px",fontStyle:"Bold",fontFamily:"roboto"}}>{revenue.revenue}</h1>  
    </CardBody>
    </Card>
  </Col>
</Row>
</div>
    </>
    );}
    else{
      return(
        <div className="spinner">
         <Spinner style={{ width: '200px', height: '300px' }} />{' '}
        </div>
        
      );
    }
}
