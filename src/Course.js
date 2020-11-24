import React from "react";
import { useParams } from "react-router-dom";

const Course = () => {
    const { id } = useParams();
    return(
        <div>
            <h2>Now showing post {id}</h2>
        </div>
    );

}

export default Course;