import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Container, Card, Button } from 'react-bootstrap';
import Header from "./navbar";
import { Image } from "react-bootstrap";
import {API} from './API';
import axios from 'axios';
import Footer from "./MyFooter";


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
  let history = useHistory();
  const { id } = useParams();
  const URL = `http://localhost:3001/courses/${id}`;
  const result = useFetch(URL, {});
  const URL1 = `http://localhost:3001/instructors`;
  const instructors = useFetch(URL1, []);
  const deleteCourse = async (id) => {
    await axios.delete(`${API}/${id}`);
    history.push("/");
  };
 

const selectedInstructors = instructors && instructors.filter(instructor => result.instructors ? result.instructors.includes(instructor.id) : null)
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
                <p style = {{fontSize: "18px"}}>Bookable: <span style = {{color: "green", fontSize: "25px"}}>{result.open==="false" ? <span style = {{color: "red"}}>✘</span> : "✔"}</span>
                <span style = {{float: "right"}}>Dates: {result.dates?.start_date} <b>till</b> {result.dates?.end_date}</span>
                </p>
                <br />
                <div dangerouslySetInnerHTML={{__html:result["description"]}}></div>
            </Card.Text>
            <Link to={`/Update/${result.id}`}><Button variant="primary">Edit</Button></Link>

            <br /><br />
            
           </Card.Body>
        </Card>
      <br /><hr />  

      <div>
      <h2>Instructors</h2>
      {selectedInstructors.map((person, index) => (
          <p key={index}>
            <b style={{fontSize: "25px", color: "blue"}}>{person.name.first} {person.name.last} - {person.bio}</b><br />
            <b>{person.email}</b><br />
            <b>{person.linkedin}</b>
          </p>
      ))}
    </div>

    <Button className="mt-5" variant="danger" onClick={() => {deleteCourse(`${id}`)}}>Delete Course</Button>
    {/* <Link to={`/Update/${result.id}`}><Button variant="info">Update</Button>{' '} </Link> */}
    <br />

    <Footer />

    </Container>

    
    
  );
};

export default Course;