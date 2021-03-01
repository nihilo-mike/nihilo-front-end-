import React from 'react';
import {Header, Transactions} from "../Components/Index";
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
          <Col className="text-left" sm="6">
            <CardTitle tag="h2">SOME TITLE</CardTitle>
          </Col>
          <Col sm="6">
           </Col>
        </Row>
      </CardHeader>
      <CardBody>
          
        <div className="chart-area">
          <h1>SOME TITLE</h1>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>
<Row>
  <Col lg="4">
    <Card className="card-chart">
      <CardHeader>
        <h5 className="card-category">SOME TITLE </h5>
        <CardTitle tag="h3">
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <h1>SOME GRAPH</h1>
        </div>
      </CardBody>
    </Card>
  </Col>
  <Col lg="4">
    <Card className="card-chart">
      <CardHeader>
        <h5 className="card-category">CHART TITLE</h5>
        <CardTitle tag="h3">
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
         <h1>SOME CHART</h1>
        </div>
      </CardBody>
    </Card>
  </Col>
  <Col lg="4">
    <Card className="card-chart">
      <CardHeader>
        <h5 className="card-category">SOME TITLE</h5>
        <CardTitle tag="h3">
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
            <h1>SOME CHART</h1>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>
<Row>
  <Col>
    <Card className="card-tasks">
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
