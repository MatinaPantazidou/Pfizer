import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";



const { Header, Content } = Layout;

const AppHeader = () => (
<Layout className="layout">
    <Header style={{ backgroundColor: "rgb(56,56,56)",  }}>
      <Menu style={{ backgroundColor: "rgb(56,56,56)" }} mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" className="menitemone" >Code.Hub Dashboard <Link to="/About"/> </Menu.Item>
        <Menu.Item key="2" className="menitem" >Add new course </Menu.Item>
        <Menu.Item key="3" className="menitem">Courses</Menu.Item>
      </Menu>
    </Header>

    <Content style={{ backgroundColor: "white"}}>
    <br />
      <div className="site-layout-content" ><p style={{ fontSize: "45px" }}>Welcome to Code.Hub Dashboard!!</p>
      <p style={{ fontSize: "20px" }}>Manage everything and have fun!</p></div>
    </Content>
</Layout>


  );

export default AppHeader;
