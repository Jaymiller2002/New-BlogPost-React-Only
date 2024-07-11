import React from 'react';
import { Card } from 'react-bootstrap';
import './Blogpost8.css';

function Blogpost8() {
  return (
    <div className="blogpost8-container">
      <Card className="blogpost8-card">
        <h2>What are you struggling with the most in the Tech Stack so far and why?</h2>
        <p>I'd say I'm struggling with Django and Django REST Framework mainly because it's a lot of information all at once. I'm just having trouble understanding and developing these new stacks and languages in my brain at a fast enough pace.</p>
        
        <h2>What companies or people (local or not) would you like to hear talk during a Bootcamp lunch and learn?</h2>
        <p>Any company or companies that specialize in front-end work. I'm not a huge fan of the backend.</p>
        
        <h2>After having built your first full-stack application, what things in your repertoire are a sticking point for you? Were you able to reconnect your React Restaurant to your Backend Bistro code? If so, what was that like, and if not, what hurdles did you need to jump?</h2>
        <p>The things that were sticking points for me were the front-end because everything was much easier and you can see your changes in real-time. Yes, I was able to connect my backend to my frontend, but I couldn't figure out how to send information back to my backend from the frontend.</p>
      </Card>
    </div>
  );
}

export default Blogpost8;