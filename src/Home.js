import React from "react";
import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./navbar";
import Footer from "./MyFooter";
import StatsList from "./StatsList";

const Home = () => {
    return(
        <Layout>
            <StatsList />
            <Footer />
        </Layout>
    );

}

export default Home;