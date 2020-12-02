import React from "react";
import { Table,Container, Button } from 'react-bootstrap';
import { Spin } from "antd";
import useCharacters from "./MyData";
import { Link } from "react-router-dom";

const MyTable = () => {
    const [characters, isLoading] = useCharacters({
      url: "http://localhost:3001",
      format: "json",
      resource: "courses",
    });

    return (
        <Container fluid>
         
            <Table striped bordered hover style = {{marginTop: "30px"}}>
            <caption><span style = {{ marginLeft: "10px" }}>Last 3 Courses</span></caption>
                <thead>
                    <tr>
                    <th><b>Title</b></th>
                    <th><b>Bookable</b></th>
                    <th><b>Price</b></th>
                    <th><b>Date</b></th>
                    <th><b>Actions</b></th>
                    </tr>
                </thead>
                <tbody>
                
                {isLoading ? (
                        <Spin size="large" />
                      ) : (
                        characters.slice(-3).map(({ ...courses }) => (
                            <tr key = {courses.id}>
                            <td>{courses.title}</td>
                            <td style = {{color: "green", fontSize: "25px"}}>{courses.open==="false" ? <span style = {{color: "red"}}>✘</span> : "✔"}</td>
                            <td>{courses.price?.normal}&#8364;</td>
                            <td>{courses.dates?.start_date} to {courses.dates?.end_date} </td>
                            <td><Link to={`/Course/${courses.id}`}><Button variant="info">View details </Button>{' '} </Link></td>
                            </tr>
                        ))
                        
                      )}
                </tbody>
                </Table>

                <Link to="/allCourses"><Button variant="primary" style = {{float: "right"}}>View all </Button>{' '} </Link>

            <br /> <hr />
        </Container>
       
      ) //return
    
    
}

export default MyTable;