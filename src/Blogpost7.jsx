import React from 'react';
import { Card } from 'react-bootstrap';
import './Blogpost7.css';

function Blogpost7() {
  return (
    <div className="blogpost7-container">
      <Card className="blogpost7-card">
        <h2>What are some similarities and differences you can see with JS and Python?</h2>
        <p>Some similarities are that they both do the same thing just with different syntax.</p>
        
        <h2>If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have benefited?</h2>
        <p>If I had started with Python I don't think it would've been bad but I personally think JavaScript was the best approach because it's less complex than Python. Python seems easy at first glance but is really complex and has a lot of similarities to JavaScript.</p>
        
        <h2>Think of a project or tech-based tool that you use often and think about what the database structure might look like for it. Do you feel like you have a better understanding of how it works now and could you see yourself enjoying building something like that in the future?</h2>
        <p>I think of Facebook or Instagram. I can see how their databases control likes, dislikes, how many posts there are, and a ton more. Yes, I have a much better understanding of databases and how they work.</p>
      </Card>
    </div>
  );
}

export default Blogpost7;