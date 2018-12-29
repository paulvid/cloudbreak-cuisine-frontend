import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Card, CardBody, CardHeader, Progress, Row, Col, Button } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { throws } from 'assert';

class ClusterType extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
            <div className="animated fadeIn">
                    <Row>
                <Col>
        <h1>Step 1: Choose a cluster type</h1>
        </Col>
        </Row>
        <Row>
                <Col>
                &nbsp; 
        </Col>
        </Row>
            <Row>
                <Col>
        <Progress  value='25' color="success" text-align="center" size="lg">25%</Progress>
        </Col>
        </Row>
        <Row>
                <Col>
                &nbsp; 
        </Col>
        </Row>
        

        <Row>
        <Col>
        <Card>
            <CardHeader>
                HDP
                <div className="card-header-actions">
                  <AppSwitch className={'mx-1'} variant={'pill'} color={'success'}/>
                </div>
            </CardHeader>
          <CardBody >
          <div className="chart-wrapper" align="center">
          <img src='../../assets/img/cuisine/hdp_cluster.png' height="200" width="200"/>
          </div>
            <div className="chart-wrapper" align="left">
           
            <h3>Hortonworks Data Platform</h3>
            <p>

<strong>Hortonworks Data Platform (HDP)</strong> helps enterprises gain insights from structured and unstructured data. It is an open source framework for distributed storage and processing of large, multi-source data sets. HDP modernizes your IT infrastructure and keeps your data secure—in the cloud or on-premises—while helping you drive new revenue streams, improve customer experience, and control costs.</p>
<p>HDP enables agile application deployment, machine learning and deep learning workloads, real-time data warehousing, and security and governance. It is a key component of a modern data architecture for data at rest. </p>
                
            </div>
          </CardBody>
        </Card>
        </Col>
        <Col>
        <Card>
            <CardHeader>
                HDF
                <div className="card-header-actions">
                  <AppSwitch  className={'mx-1'} variant={'pill'} color={'success'}/>
                </div>
            </CardHeader>
          <CardBody >
          <div className="chart-wrapper" align="center">
          <img src='../../assets/img/cuisine/hdf_cluster.png' height="200" width="200"/>
          </div>
            <div className="chart-wrapper" align="left">
            <h3>Hortonworks Data Flow</h3>
            <p><strong>Hortonworks DataFlow (HDF)</strong> is a scalable, real-time streaming analytics platform that ingests, curates and analyzes data for key insights and immediate actionable intelligence.</p>
<p>DataFlow addresses the key challenges enterprises face with data-in-motion—real-time stream processing of data at high volume and high scale, data provenance and ingestion from IoT devices, edge applications and streaming sources.</p>
                
            </div>
          </CardBody>
        </Card>
        </Col>
        <Col>
        <Card>
            <CardHeader>
                HDF+HDP
                <div className="card-header-actions">
                  <AppSwitch  className={'mx-1'} variant={'pill'} color={'success'}/>
                </div>
            </CardHeader>
          <CardBody >
          <div className="chart-wrapper" align="center">
          <img src='../../assets/img/cuisine/both_cluster.png' height="200" width="200"/>
          </div>
            <div className="chart-wrapper" align="left">
            <h3>Combined Cluster</h3>
            <p><strong>Talk about going nowhere fast.</strong> I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. Travel time to the nearest starbase? Sorry, Data. The Federation's gone; the Borg is everywhere! 
            </p><p>Some days you get the bear, and some days the bear gets you. In all trust, there is the possibility for betrayal. A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you. The unexpected is our normal routine. </p>
                
            </div>
          </CardBody>
        </Card>
        </Col>
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
                <Button size="lg" color="primary" onClick={this.saveAndContinue}>
                  Next  <i className="fa fa-long-arrow-right"></i>
                </Button>
                </div>
                </Col>
            </Row>
        </div>
        )
    }
}

export default ClusterType;