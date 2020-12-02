import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Course from "./Course";
import allCourses from "./allCourses";
import AddCourse from "./PostCourse";
import Update from "./Update";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/About" component={About} />
        <Route exact path = "/Course/:id" component={Course} />
        <Route exact path = "/allCourses" component={allCourses} />
        {/* <Route exact path = "/AddCourse" component={AddCourse} /> */}
        <Route exact path = "/PostCourse" component={AddCourse} />
        <Route exact path = "/Update/:id" component={Update} />
        
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
