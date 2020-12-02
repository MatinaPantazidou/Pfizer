import React, { useState, useEffect, useCallback } from "react";
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
  const [dates, setDates] = useState({ start_date: "", end_date: ""});
  const [duration, setDuration] = useState("");
  const [description, setDescr] = useState("");
  const [open, setBook] = useState("false");
  const [instructors, setInstr] = useState([]);
     
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
    <Container fluid>
         {/* Navbar on top */}
       <Header /><br />
       <Container className="shadow appearance-none border rounded" style={{border: "1px solid red"}}>
       <h2 className="mt-5" style= {{color: "grey"}}>Add Course</h2>
      <Row style = {{textAlign: "center"}}>
          <Col md={6} >
          {/* First form */}
          <Form>
          <h4 className="mt-5" style= {{color: "grey"}}>Basic Information</h4><hr />
          <div className="w-full mt-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              Title
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
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
              placeholder="Image path"
            />
          </div>
          <div className="w-full mt-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              Duration
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={duration}
              onChange={e => setDuration(e.target.value)}
              type="text"
              placeholder="Duration"
            />
          </div>
          <div className="w-full mt-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
              Description
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={description}
              onChange={e => setDescr(e.target.value)}
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="w-full mt-5 mx-auto" style = {{width: "270px"}}>
                <InputGroup className="shadow appearance-none border rounded mt-3" style = {{}}>
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" value={open}
                        onChange={e => setBook ("true")}/>
                    </InputGroup.Prepend> <p style={{ marginBottom : "0px", padding: "5px"}}> Bookable</p>
                </InputGroup>
            </div>
            <br />
          {/* Second form */}
        </Form>
          </Col>

          <Col md={6} className ="mx-auto">
          <Form>
          <h4 className="mt-5" style= {{color: "grey"}}>Price Information</h4><hr />
           {/* Prices */}
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
              placeholder="Normal price"
            />
          </div>

          <div className="w-full  mt-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
              Early bird
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={price.early_bird}
              onChange={e => setPrice({...price, early_bird:e.target.value})}
              type="text"
              placeholder="Early bird"
            />
          </div>
             {/* Dates */}
             <h4 className="mt-5" style= {{color: "grey"}}>Dates</h4><hr />
          <div className="w-full  mt-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
              Start date
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={dates.start_date}
              onChange={e => setDates({...dates, start_date:e.target.value})}
              type="text"
              placeholder="Start date"
            />
          </div>
          
          <div className="w-full  mt-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
              End date
            </label><br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={dates.end_date}
              onChange={e => setDates({...dates, end_date:e.target.value})}
              type="text"
              placeholder="End date"
            />
          </div>
          
        </Form>
          </Col>
      </Row>

      <h4 className="mt-5" style= {{color: "grey", textAlign: "center"}}>Instructors</h4><hr />
        <Row>
        <Col md={6}>
            <Form>
            <div className="w-full mt-3 mx-auto" style = {{width: "270px"}}>
                <InputGroup className="shadow appearance-none border rounded mt-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" value={instructors}
                        onChange={(e, instructors) => {setInstr(prevState => ([...prevState, "01"]))}}/>
                    </InputGroup.Prepend> <p style={{ marginBottom : "0px", padding: "5px"}}> John Tsevdos</p>
                </InputGroup>
            </div>
            </Form>
            </Col>
            <Col md={6}>
            <Form>
            <div className="w-full mt-3 mx-auto" style = {{width: "270px"}}>
                <InputGroup className="shadow appearance-none border rounded mt-3">
                    <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" value={instructors}
                        onChange={(e, instructors) => {setInstr(prevState => ([...prevState, "02"]))}}/>
                    </InputGroup.Prepend> <p style={{ marginBottom : "0px", padding: "5px"}}> Konstantinos Ztoupis</p>
                </InputGroup>
            </div>
            </Form>
            </Col>
           
        </Row>
        <hr style = {{marginTop: "40px", marginBottom: "40px" }} />
            <Form style = {{ marginBottom: "40px" }}>
            <div>
                <Button style = {{float: "right"}} variant="primary" onClick={() => {addCourse({title, imagePath, price, dates, duration, open, instructors, description})}}>
                    Add Course
                </Button>
                <Link to="/"><Button variant="dark">Cancel</Button>{' '}</Link>
            </div>            
            </Form>
     
      
       
          {/* <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div> */}
      </Container><br />
    <Footer />
      
    </Container>
  );
};

export default AddCourse;