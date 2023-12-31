import React from 'react';
import "./About.css"
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    
      <div>
<h2 className="about-heading">About  Inventory</h2>  


<Container className="mt-5" style={{width:"max-content"}}>
      <Row>
        <Col md={6}>
          <Card style={{width:"1000px"}}>
            <Card.Body>
              <Card.Title className='about-heading' style={{fontSize:"40px"}}> S Sports Inventory Management</Card.Title>
              <Card.Text>
                Welcome to our sports inventory management website! We are dedicated to providing an efficient and organized solution for managing your sports equipment and inventory.
              </Card.Text>
              <Card.Text>
                Our platform allows you to keep track of your sports gear, monitor stock levels, and streamline the overall management process. Whether you're a sports facility, team, or enthusiast, our system is designed to meet your needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          {/* Add any additional content or images here */}
        </Col>
      </Row>
    </Container>



</div>
     
  );
};

export default About;

















