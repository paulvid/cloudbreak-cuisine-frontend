import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import WelcomeScreen from './WelcomeScreen';
import ClusterType from './ClusterType';

class Generator extends Component {
    state = {
        step: 1,
        services: '',
        recipes: '',
        hdpSwitch: true,
        hdfSwitch: false,
        combinedSwitch: false,
        hdpBorder: 'border-success',
        hdfBorder: '',
        combinedBorder: '',
        hdpHeader: 'text-white bg-success',
        hdfHeader: '',
        combinedHeader: '',
        clusterVersion: '',
        clusterType: 'HDP'
    }



    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    changeClusterVersion = (data) =>  {
        this.setState({ clusterVersion : data })
   }

    changeClusterType = (data) =>  {
         this.setState({ clusterType : data })
    }

    render(){
        const {step} = this.state;
        const { clusterVersion, clusterType, services, recipes } = this.state;
        const values = { clusterVersion, clusterType, services, recipes };
        switch(step) {
        case 1:
            return <WelcomeScreen 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <ClusterType 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    changeClusterType = {this.changeClusterType}
                    changeClusterVersion = {this.changeClusterVersion}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        }
    }
}

   export default Generator;