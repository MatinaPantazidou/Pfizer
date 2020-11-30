import React, { Fragment, useState, useEffect, useCallback } from "react";
import {Button, Spinner, Alert, Container, Form, InputGroup, Row, Col} from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import {API} from './API';
import axios from 'axios';
import Header from "./navbar";
import Footer from "./MyFooter";

 const AddCourse = (addCourse) => {

  const [courses, setCourses] = useState([]);
  //the fields to fill in the form => json post
  const [title, setTitle] = useState("");
  const [imagePath, setImage] = useState("");
  const [price, setPrice] = useState({ normal: "", early_bird: ""});
  //const [normal, setPriceN] = useState();
  const [dates, setDates] = useState({ start_date: "", end_date: ""});
  const [duration, setDuration] = useState("");
  const [description, setDescr] = useState("");
  const [open, setBook] = useState("false");

  const {normal, early_bird} = price;
    
  
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = useCallback(() => {
    setError(false);
    setIsLoading(true);

    axios.get(API)
      .then(response => {
        setCourses(response.data);
          setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData])

   addCourse = async (data) => {
    const newData = {
        id: Math.max(...courses.map(({id}) => id)) + 1,
        ...data,
    }
    await axios.post(API, newData);
    history.push("/");
     };

     if (isLoading) {
        return <Spinner animation="border" size="lg" />;
      }
      if (error) {
        return <Alert variant="warning">{error.message}</Alert>;
      }

  return (
    <Container style={{border: "1px solid red"}}>
         {/* Navbar on top */}
       <Header />
      <Row>
          <Col className ="mx-auto">
          <Form>
          <h2 className="mt-5" style= {{color: "grey"}}>Add Course</h2>
          <div className="w-full mt-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              Title
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div className="w-full  mt-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
              Image path
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={imagePath}
              onChange={e => setImage(e.target.value)}
              type="text"
              placeholder="Enter mage path"
            />
          </div>
          <div className="w-full  mt-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
              Description
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={description}
              onChange={e => setDescr(e.target.value)}
              type="text"
              placeholder="Enter Description"
            />
          </div>
          <div className="w-full  mt-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
              Normal price
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={price.normal}
              onChange={e => setPrice({...price, normal:e.target.value})}
              type="text"
              placeholder="Enter normal price"
            />
          </div>
          <div className="w-full  mt-3">
          <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
              Bookable
            </label><br />
            <InputGroup className="shadow appearance-none border rounded mt-3">
                <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" value={open}
                     onChange={e => setBook ("true")}/>
                </InputGroup.Prepend> <p style={{ marginBottom : "0px", padding: "5px"}}> Bookable</p>
            </InputGroup></div>
            

          <Button className="mt-5" variant="primary" onClick={() => {addCourse({title, imagePath, description, price, open})}}>
          Add
        </Button>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </Form>
          </Col>
      </Row>
        
      
    </Container>
  );
};

export default AddCourse;