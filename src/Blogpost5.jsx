import React from 'react';
import { Card } from 'react-bootstrap';
import './Blogpost5.css';

function Blogpost5() {
  return (
    <div className="blogpost5-container">
      <Card className="blogpost5-card">
        <h2>What have you learned about CLIs? Do you think they are scary?</h2>
        <p>Yes, I haven't learned anything about them thus far but I am excited to get hands on
            with something new.
        </p>
        
        <h2>If you were to build a CLI, what would it do?</h2>
        <p>I would presume it's something similar to a react website or a website using some kind of library or framework.</p>
        
        <h2>List some ideas that without a Framework, would take you a long time to code</h2>
        <p>A simple to-do list would take a couple hundred lines of CSS and JavaScript code.</p>
      </Card>
    </div>
  );
}

export default Blogpost5;
