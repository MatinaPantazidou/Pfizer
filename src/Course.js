import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from 'react-bootstrap';
import Header from "./navbar";
import { Image } from "react-bootstrap";



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
  const URL1 = `http://localhost:3001/instructors`;
  const instructors = useFetch(URL1, []);
  
 

const newInstr = { ...result.instructors };
const selectedInstructors = instructors && instructors.filter(instructor => result.instructors.includes(instructor.id) )
console.log(selectedInstructors)
const pic = result.imagePath;



   return (
    <Container fluid>
      {/* Navbar on top */}
      <Header />
     
      {/* Main info of the course*/}
        <Card className="mt-5" >
        
        <Card.Img as={Image} src={pic} fluid={true} alt="Card image" style={{ width: "90rem", height: "17rem"}} />
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
           </Card.Body>
        </Card>
      <br /><hr />  

      <div>
    {selectedInstructors.map((person, index) => (
        <p key={index}>Hello, {person.id} from {person.name.first}!</p>
    ))}
    </div>


    </Container>

    
    
  );
};

export default Course;