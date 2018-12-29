import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Card, CardBody, CardHeader, Col, Row, Button, ListGroup, ListGroupItem } from 'reactstrap';

class WelcomeScreen extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            
            <div className="animated fadeIn">
            <Row>
            <Col xs={6} md={4}>
            <div className="chart-wrapper" align="center">
                <img src='../../assets/img/cuisine/generator.png' height="350" width="350"/>
                </div>
                </Col>
                <Col xs={12} md={8}>
                <Card>
                <CardHeader className="text-white bg-primary">
        <h2>Welcome to Bundle Generator!</h2>
  
          </CardHeader>
          <CardBody >
            <div className="chart-wrapper" align="left">
            <p>Creating a combination of Cloudbreak blueprints and recipes is easy with Cloudbreak Cuisine.</p>
                    <p>Follow these four simple steps:</p>
                    <ListGroup>
                   
                        <ListGroupItem><strong>1. </strong>Choose a cluster type</ListGroupItem>
                        <ListGroupItem><strong>2. </strong>Select the services you need</ListGroupItem>
                        <ListGroupItem><strong>3. </strong>Select custom add-ons for these services</ListGroupItem>
                        <ListGroupItem><strong>4. </strong>Enter cluster details</ListGroupItem>
                   
                    </ListGroup>
                
            </div>
          </CardBody>
        </Card>
                    
 
                </Col>
               
            </Row>
            
            <Row>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={12} md={8}>
                <div className="chart-wrapper" align="right">
                <Button size="lg" color="primary" onClick={this.saveAndContinue}>
                  Get Started  <i className="fa fa-long-arrow-right"></i>
                </Button>
                </div>
                </Col>
            </Row>
            </div>
           
        )
    }
}

export default WelcomeScreen;