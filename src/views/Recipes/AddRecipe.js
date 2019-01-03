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
    Table, Badge, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import { AppSwitch } from '@coreui/react'

import recipesData from './RecipesData'
import servicesData from './ServicesData'

class AddRecipe extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: new Array(4).fill('1'),
        };
      }
    
      lorem() {
        return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
      }
    
      toggle(tabPane, tab) {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
          activeTab: newArray,
        });
      }
    
      tabPane() {
        return (
          <>
            <TabPane tabId="1">
              {`1. ${this.lorem()}`}
            </TabPane>
            <TabPane tabId="2">
              {`2. ${this.lorem()}`}
            </TabPane>
            <TabPane tabId="3">
              {`3. ${this.lorem()}`}
            </TabPane>
          </>
        );
      }
    

   
    
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    
    render(){
        const serviceList = servicesData.filter((service) => ((service.display == 1)))

        return(  
                     
            <div className="animated fadeIn align-items-center">

                <Row>
                <Col>
                <Card className="border-success">
                        <CardHeader className="text-white bg-success">
                            <h2>Add Recipe</h2>
                        </CardHeader>
                        <CardBody>
                        <Form>
                  <FormGroup row>
                    
                    <Col md="3">
                      <Label htmlFor="name">Recipe Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                      <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-folder"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="recipeName" name="recipeName" placeholder="Enter recipe name" autoComplete="name"/>
                    </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    
                    <Col md="3">
                      <Label htmlFor="description">Recipe Description</Label>
                      </Col>
                      <Col xs="12" md="9">
                      <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-align-justify"></i></InputGroupText>
                      </InputGroupAddon>

                      <Input type="textarea" id="recipeDescription" name="recipeDescription" placeholder="Enter recipe description"/>
                    </InputGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    
                    <Col md="3">
                      <Label htmlFor="name">Recipe Type</Label>
                      </Col>
                      <Col xs="12" md="9">
                      <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-folder"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="recipeName" name="recipeName" placeholder="Enter recipe name" autoComplete="name"/>
                    </InputGroup>
                    </Col>
                  </FormGroup>



                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="content">Recipe Content</Label>
                      </Col>
                      <Col xs="12" md="9">
                      <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  File
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  URL
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Type
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>

                    </Col>
                  </FormGroup>
                
                

           

  
                </Form>
                        </CardBody>
                    </Card>
              

                </Col>
                </Row>
                
            </div>     
        )
    }
}

export default AddRecipe;