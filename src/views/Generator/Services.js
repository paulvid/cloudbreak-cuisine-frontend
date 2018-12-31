import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Progress, Row, Col, Button, Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Table, } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { throws } from 'assert';

import servicesData from './ServicesData'


function ServiceCol(props) {
    const service = props.service
    return (
        
      <Col md="2">
  
        <Card>
            <CardHeader className='bg-white'>
                {service.description}
                <div className="card-header-actions">
                    <AppSwitch id="HDP" className={'mx-1'} variant={'pill'} color={'success'}  />
                </div>
            </CardHeader>
            <CardBody className="align-items-center">
               <div align="center"><img src={service.img} height="75px" width="75px"/></div> 
            </CardBody>
        </Card>
       </Col>

    )
  }

class Services extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            selectedServices: '',
            servicesDependency: ''
        };
      }

    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    
    render(){
        const {values: { clusterType, clusterVersion, clusterId }} = this.props;
     
        const serviceList = servicesData.filter((service) => ((service.cluster_id == clusterId) && (service.display == 1))); 

        return(
            
            <div className="animated fadeIn align-items-center">
            <Row>
                <Col>
        <h1>Step 2: Select Services</h1>
        </Col>
        </Row>
        <Row>
                <Col>
                &nbsp; 
        </Col>
        </Row>
            <Row>
                <Col>
        <Progress animated value='50' color="dark" text-align="center" size="lg"></Progress>
        </Col>
        </Row>
        <Row>
                <Col>
                &nbsp; 
        </Col>
        </Row>
        

        <Row></Row>
                <Row>
                    {serviceList.map((service) =>
                      <ServiceCol service={service}/>
                    )}
                </Row>
                <Row>
             <Col>
             <div className="chart-wrapper" align="left">
             <Button size="lg" outline color="primary"  onClick={this.back}>
             <i className="fa fa-long-arrow-left"></i> Back  
             </Button>
             </div>
             </Col>
             <Col>
             <div className="chart-wrapper" align="right">
             <Button id={this.state.clusterType} size="lg" color="primary" onClick={this.saveAndContinue} disabled={this.state.nextDisabled}>
               Next  <i className="fa fa-long-arrow-right"></i>
             </Button>
             </div>
             </Col>
         </Row>
             </div>
             
        )
    }
}

export default Services;