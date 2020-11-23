import React from "react";
import { Card, Spin, Row, Col } from "antd";
import useCharacters from "./MyData";


const StatsList = () => {
  const [characters, isLoading] = useCharacters({
    url: "http://localhost:3001",
    format: "json",
    resource: "stats",
  });
  
  return (
      
      <Row justify="space-around" style = {{ marginTop: "50px" }}>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          characters.map(({ id, title, amount }) => (
                <Col span={4}>
                <Card type="inner" key={id} style = {{ border: "1px solid rgb(200,200,200)" }}>
                <p>
                    <span style = {{ fontSize: "20px" }}>{title}</span> : <span className="amount" >{amount}</span> 
                </p>
                </Card>
            </Col>
            
          ))
        )}
      </Row>

  );
};

export default StatsList;
