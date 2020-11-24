import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./navbar";
import Home from "./Home";
import About from "./About";
import Course from "./Course";



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path = "/" component={Home} />
        <Route exact path = "/About" component={About} />
        <Route exact path = "/Course/:id" component={Course} />
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
