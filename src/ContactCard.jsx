import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from './assets/Blogpic.jpeg';
import './ContactCard.css';

const ContactCard = () => {
  return (
    <div className="card-container d-flex justify-content-center mt-4">
      <Card className="text-center p-4 contact-card">
        <div className="photo">
          <img src={Image} alt="Profile" className="rounded-circle" style={{ width: '150px' }} />
        </div>
        <Card.Body>
          <Card.Title className="mb-3">Jay Miller</Card.Title>
          <Card.Text className="mb-3">Full-Stack Developer</Card.Text>
          <div className="icon-container">
            <Link to="https://github.com/"><i className="fab fa-github-alt mx-2"></i></Link>
            <Link to="mailto:jay.miller02@icloud.com"><i className="fa-solid fa-envelope mx-2"></i></Link>
            <Link to="tel:+8594758431"><i className="fa-solid fa-mobile-alt mx-2"></i></Link>
            <Link to="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin-in mx-2"></i></Link>
            <Link to="https://www.instagram.com/"><i className="fa-brands fa-instagram mx-2"></i></Link>
            <Link to="https://twitter.com/"><i className="fa-brands fa-twitter mx-2"></i></Link>
            <Link to="https://www.youtube.com/"><i className="fa-brands fa-youtube mx-2"></i></Link>
            <Link to="https://www.google.com/"><i className="fa-brands fa-google mx-2"></i></Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;

