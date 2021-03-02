import React from 'react';
import {Header, ChartOne} from "../Components/Index";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";
export const DashBoard=()=>{

return(  
<>
<Header></Header>

<div style={{paddingTop:"75px"}} >
<Row>
  <Col xs="12">
  <Card >
      <CardHeader>
        <Row>
          <Col  sm="6">
            <CardTitle tag="h2">SOME TITLE</CardTitle>
          </Col>
          <Col sm="6">
           </Col>
        </Row>
      </CardHeader>
      <CardBody>
          
        <div >
         <h1>some graph</h1>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>
<Row>
  <Col lg="4">
    <Card >
      <CardHeader>
        <h5 >SOME TITLE </h5>
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
  <Col lg="4">
    <Card >
      <CardHeader>
        <h5 >CHART TITLE</h5>
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
  <Col lg="4">
    <Card >
      <CardHeader>
        <h5 >SOME TITLE</h5>
        <CardTitle tag="h3">
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div>
        <ChartOne/>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>
<Row>
  <Col>
    <Card>
      <CardHeader>
        <h6>SOME TITLE</h6>
        </CardHeader>
        </Card>
      </Col>
      </Row>
    </div>
    </>
    );
}
