import React, { useState } from "react";
import CourseDataService from "./Services";

const AddCourse = () => {
  const initialCourseState = {
    id: null,
    title: "",
    description: "",
  };
  const [course, setCourse] = useState(initialCourseState);
  const [submitted, setSubmitted] = useState(false);

  //track the values of the input and set that state for changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  const saveCourse = () => {
    var data = {
        title: course.title,
        description: course.description
    };

    CourseDataService.create(data)
      .then(response => {
        setCourse({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCourse = () => {
    setCourse(initialCourseState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCourse}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={course.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={course.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveCourse} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCourse;