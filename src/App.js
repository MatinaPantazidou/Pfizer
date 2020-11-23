import React from "react";
import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./navbar";
import Footer from "./MyFooter";
import StatsList from "./StatsList";
import Home from "./Home";
import About from "./About";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path = "/" component={Home} />
        <Route exact path = "/About" component={About} />
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
