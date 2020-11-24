import React from "react";
import { Layout } from 'antd';
import Footer from "./MyFooter";
import StatsList from "./StatsList";
import MyTable from "./Table";

const Home = () => {
    return(
        <Layout>
            <StatsList />
            <MyTable /> 
            <Footer />
        </Layout>
    );

}

export default Home;