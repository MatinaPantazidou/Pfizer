import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';

const useFetch = (url, defaultData) => {
  const [data, updateData] = useState(defaultData);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      updateData(json);
    }
    fetchData();
  }, [url]);

  return data;
};



const Course = () => {
  const { id } = useParams();
  const URL = `http://localhost:3001/courses/${id}`;
  const result = useFetch(URL, {});
  //console.log(result.instructors)

  //const array = [...result.instructors];
  //console.log(array[0])
  const elements1 = function* () {
    yield result.instructors;
};

const johnDev = { ...result.instructors };
console.log(johnDev)
const instrone = johnDev[0];
const instrtwo = johnDev[1];
const sum  = instrone + instrtwo;
console.log(sum)


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
      
      {/* Main info of the course*/}
        <Card className="mt-5">
          <Card.Header>{result.title} ({result.id})</Card.Header>
          <Card.Body>
            <Card.Text>
                <p style = {{fontSize: "18px"}}>Price: {result.price?.normal}&#8364; 
                <span style = {{float: "right"}}>Duration: {result.duration} </span>
                </p>
                <p style = {{fontSize: "18px"}}>Bookable: <span style = {{color: "green", fontSize: "25px"}}>{result.open ? "✔" : "✘"}</span>
                <span style = {{float: "right"}}>Dates: {result.dates?.start_date} <b>till</b> {result.dates?.end_date}</span>
                </p>
                <br />
                <div dangerouslySetInnerHTML={{__html:result["description"]}}></div>
            </Card.Text>
            <Button variant="primary">Edit</Button>

            <br /><br />
            <h1>{result.instructors}</h1>
            <p>
        {instrone ? "John" : "Kostas" }
      </p>
          </Card.Body>
        </Card>
      <br /><hr />
      
      <p>{[...elements1()]}</p>
      {instrtwo ? instrone+instrtwo : "00"}
      
      {instrtwo && <p>nai!!</p>}

      

    </Container>

    
    
  );
};

export default Course;