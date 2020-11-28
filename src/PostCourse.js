import React, { Fragment, useState, useEffect, useCallback } from "react";
import {Button, Spinner, Alert} from 'react-bootstrap';
import { useHistory, useParams, Link } from "react-router-dom";
import {API} from './API';
import axios from 'axios';

 const AddCourse = (addCourse) => {

  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [imagePath, setImage] = useState("");
  const [description, setDescr] = useState("");
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //const { id } = useParams();

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
      ...data,
      id: Math.max(...courses.map(({id}) => id)) + 1
      
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
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of employee
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={imagePath}
              onChange={e => setImage(e.target.value)}
              type="text"
              placeholder="Enter location"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={description}
              onChange={e => setDescr(e.target.value)}
              type="text"
              placeholder="Enter designation"
            />
          </div>
          <Button variant="primary" onClick={() => {addCourse({title, imagePath, description})}}>
          Add
        </Button>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddCourse;