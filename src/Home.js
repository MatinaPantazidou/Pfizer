import React from "react";
import { Layout } from 'antd';
import Footer from "./MyFooter";
import StatsList from "./StatsList";
import MyTable from "./Table";
import Header from "./navbar";

const Home = () => {
    return(
        <Layout>
            <Header />
            <StatsList />
            <MyTable /> 
            <Footer />
        </Layout>
    );

}

export default Home;