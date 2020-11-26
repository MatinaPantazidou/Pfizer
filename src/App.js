import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Course from "./Course";
import allCourses from "./allCourses";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/About" component={About} />
        <Route exact path = "/Course/:id" component={Course} />
        <Route exact path = "/allCourses" component={allCourses} />
        
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
