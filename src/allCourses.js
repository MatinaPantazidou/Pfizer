import React from "react";
import { Spin } from "antd";
import useCharacters from "./MyData";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./navbar";
import Footer from "./MyFooter";
import { Image } from "react-bootstrap";


const AllCourses = () => {
    const [characters, isLoading] = useCharacters({
      url: "http://localhost:3001",
      format: "json",
      resource: "courses",
    });
    
  
    return (
        
    <Container fluid>
        {/* Navbar on top */}
       <Header />
        
        <br />
        {/* Main info of the course*/}
        <h1>All Courses</h1>
            <Row>
            {isLoading ? (
          <Spin size="large" />
        ) : (
          characters.map(({ ...courses }) => (
                <Col md={3} className ="d-flex align-self-stretch">
                <Card className = "w-100 mt-3">
                <Card.Img as={Image} src={courses.imagePath} fluid={true} alt="Card image" />
                <Card.Header>{courses.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>Price: <b>{courses.price?.normal}&#8364;</b> | 
                        Bookable: <span style = {{color: "green"}}>{courses.open==="false" ? <span style = {{color: "red"}}>✘</span> : "✔"}</span></p>
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
        
            <Footer />
    </Container>
    
    
    );
  };
  
  export default AllCourses;
  