import React from "react";
import { Container } from 'react-bootstrap';
import Footer from "./MyFooter";
import StatsList from "./StatsList";
import MyTable from "./Table";
import Header from "./navbar";

const Home = () => {
    return(
        <Container fluid style = {{ padding: "10px"}}>
            <Header />
            <div style={{ backgroundColor: "white"}}>
            <br />
             <div className="site-layout-content" ><p style={{ fontSize: "45px" }}>Welcome to Code.Hub Dashboard!!</p>
                <p style={{ fontSize: "20px" }}>Manage everything and have fun!</p></div>
            </div>
            <StatsList />
            <MyTable /> 
            <Footer />
        </Container>
    );

}

export default Home;