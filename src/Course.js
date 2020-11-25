import React from "react";
import useAxios from "axios-hooks";
import { useParams } from "react-router-dom";


const Course = () => {
  const { id } = useParams();
  const [{ data, loading, error }] = useAxios(
    `http://localhost:3001/courses/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      
      <p>{data.title}</p>
    </div>
  );
}

export default Course;