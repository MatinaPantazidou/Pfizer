import React, { Component } from 'react'
import './App.css';

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar,Nav,NavItem, NavLink} from 'reactstrap';
export class Test extends Component {
        render() {
                return (
                    <div>
                                <Navbar color="light" light expand="md">


                                        <Nav className="mr-auto" navbar>

                                                <NavItem className="hdr">

                                                        <NavLink href="/components/">Demo Form Using Reactstrap</NavLink>

                                                </NavItem>



                                        </Nav>


                                </Navbar>

                                <Container className="themed-container" fluid="sm">



                                        <Form className="form">

                                                <Col>

                                                        <FormGroup row>

                                                                <Label for="name" sm={2}>Email</Label>

                                                                <Col sm={10}>

                                                                        <Input type="text" id="name" placeholder="Enter Email" />

                                                                </Col>

                                                        </FormGroup>

                                                        <FormGroup row>

                                                                <Label for="address" sm={2}>Password</Label>

                                                                <Col sm={10}>

                                                                        <Input type="text" id="Address" placeholder="Enter Password" />

                                                                </Col>

                                                        </FormGroup>


                                                </Col>

                                                <Col>

                                                        <FormGroup row>

                                                                <Col sm={5}>

                                                                </Col>

                                                                <Col sm={1}>

                                                                        <Button color="success">Login</Button>{' '}

                                                                </Col>

                                                                <Col sm={1}>

                                                                        <Button color="success">Cancel</Button>{' '}

                                                                </Col>

                                                                <Col sm={5}>

                                                                </Col>

                                                        </FormGroup>

                                                </Col>

                                        </Form>

                                </Container>

                        </div>

                )

        }

}

export default Test;
  