import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Blogpost1.css';

const Blogpost1 = () => {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(prevState => !prevState); // Toggle the state
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="mt-5 blog-card">
            <Card.Body>
              <Title />
              <Button onClick={handleButtonClick} className="mt-3 toggle-button">
                {showContent ? 'Read Less' : 'Read More'}
              </Button>
              {showContent && <Content />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const Title = () => {
  return (
    <h1 className="title">
      Jay Miller's Blog Journey
    </h1>
  );
};

const Content = () => {
  return (
    <div className="content">
      <h2>What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing user experience?</h2>
      <p>I find it extremely cool to see everything finally come together to make a fully functional page or website.</p>
      <h2>What are your thoughts on pseudocoding?</h2>
      <p>pusedocoding is SUPER helpful and I need to get better at it. I need to also work on organizing my pusedocode.</p>
      <h2>What was helpful during Onboarding that made working remotely easier?</h2>
      <p>I'd say the help channel on slack because usually I would be able to look through and see someone else having the same problem or just ask for help in the channel myself.</p>
      <h2>What hindered your progress during Onboarding?</h2>
      <p>Just my own personal life(family, time-management, sleep, etc)</p>
      <h2>How did you overcome challenges during Onboarding?</h2>
      <p>I overcame challenges through perseverance and by asking for help. I may have taken to long to ask for help so I'll do that sooner next week.</p> 
      <h2>What is the number one thing that held you back this week? Why?</h2>
      <p>Javascript because it's a whole new language for me so I just need to slow down a bit so I can understand what i'm doing.</p>
      <h2>What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, or Atomic Design?</h2>
      <p>I'd love to learn more about javascript and how to change anything in html</p>
      <h2>What is your “Y”?</h2>
      <p>I'd like to learn this since javascript is so powerful and there's a lot you can accomplish with it.</p>
    </div>
  );
};

export default Blogpost1;

