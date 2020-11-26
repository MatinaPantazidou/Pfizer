import React from "react";
import { Spin } from "antd";
import useCharacters from "./MyData";
import { Container, Row, Col, Navbar, Nav, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const AllCourses = () => {
    const [characters, isLoading] = useCharacters({
      url: "http://localhost:3001",
      format: "json",
      resource: "courses",
    });
    
    return (
        
    <Container fluid>
        {/* Navbar on top */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Code.Hub Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#deets" className="newNav">Courses</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="newNav">Add new course </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        <br />
        {/* Main info of the course*/}
        <h1>All Courses</h1>
            <Row>
            {isLoading ? (
          <Spin size="large" />
        ) : (
          characters.map(({ ...courses }) => (
                <Col className ="d-flex align-self-stretch">
                <Card className = "w-100">
                <Card.Header>{courses.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>Price: <b>{courses.price.normal}&#8364;</b> | 
                        Bookable: <span style = {{color: "green"}}>{courses.open ? "✔" : "✘"}</span></p>
                        <p>Duration: <b>{courses.duration}</b></p>
                        <p>Dates: {courses.dates?.start_date} <b>to</b> {courses.dates?.end_date}</p>
                    </Card.Text>
                    <Link to={`/Course/${courses.id}`}><Button variant="primary" style = {{float: "right"}}>View</Button>{' '} </Link>
                </Card.Body>
                </Card>
                    
                </Col>
                ))
        )}
            </Row>
        

    </Container>
    
  
    );
  };
  
  export default AllCourses;
  