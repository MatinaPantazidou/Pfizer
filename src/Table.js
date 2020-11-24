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
                        characters.map(({ id, title, price, open, dates }) => (
                            <tr key = {id}>
                            <td>{title}</td>
                            <td>{open}</td>
                            <td>{price.normal}</td>
                            <td>{dates.start_date} to {dates.end_date} </td>
                            <td><Link to={`/Course/${id}`}><Button variant="info">View details </Button>{' '} </Link></td>
                            </tr>
                        ))
                        
                      )}
                </tbody>
                </Table>

        </Container>
            
                    
                   


      ) //return
    
    
}

export default MyTable;