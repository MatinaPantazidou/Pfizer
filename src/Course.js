import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";


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

  return <div>{result.title}</div>;
};

export default Course;