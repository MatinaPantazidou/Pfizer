import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';


const { Header, Content } = Layout;

const AppHeader = () => (
<Container fluid style = {{ padding: "0"}}>
    <Header style={{ backgroundColor: "rgb(56,56,56)",  }}>
      <Menu style={{ backgroundColor: "rgb(56,56,56)" }} mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" className="menitemone" >Code.Hub Dashboard <Link to="/"/> </Menu.Item>
        <Menu.Item key="2" className="menitem" >Add new course <Link to="/PostCourse"/> </Menu.Item>
        <Menu.Item key="3" className="menitem">Courses <Link to="/allCourses"/></Menu.Item>
      </Menu>
    </Header>

    
</Container>


  );

export default AppHeader;
