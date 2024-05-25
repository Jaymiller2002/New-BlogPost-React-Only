import Basketball from './assets/Basketball.png'
import Destiny2 from './assets/Destiny2.jpeg'
import { Card } from "react-bootstrap"


function Blogpost2 () {
  return (
    <div>
      <div>
      <Card style={{left: "90px"}}>
        <h2>Was your first week what you expected? Why? Why not?</h2>
        <p>It was more than I expected to be honest mainly cause all I've been working with before was HTML, CSS and a little Javascript. Being introduced to git, github and gitpod has honestly been really confusing and getting them to connect/work together just hasn't been working for me.</p>
        <h2>What are you excited or eager to learn more about?</h2>
        <p>I'm eager to get a better understanding of how git, gitpod, github and vscode work together to properly make things function correctly.</p>
        <h2>What is something about you that can only be learned by reading this blog?</h2>
        <p>My name is Jay Miller, I am 21 years old and live in Lexington, KY. Two things you'll learn about me from reading this blog post are that I love to play basketball and play video games.</p>
        <img className="rounded-square" style={{
          marginRight: "10px",
          borderRadius: "8px",
          position: "relative",
          left: "50px"}} src={Basketball}/>
        <img className="rounded-square" style={{
          marginRight: "10px",
          borderRadius: "8px",
          position: "relative",
          left: "50px"}} src={Destiny2}/>
        <h2>What is something you wish you could do but currently do not have the coding skills to accomplish?</h2>
        <p>I wish I could explain my coding process more and actually be able to go over my code and explain what I did rather than what I did on our last demo day.</p>
        <h2>What are you struggling with?</h2>
        <p>I would say I struggle with asking questions but mostly with staying focused and getting my work done.</p>
        <h2>How do you solve a problem?</h2>
        <p>Usually when I get stuck on something I troubleshoot by myself for about an hour or two and if I'm still stuck I tend to take a break and watch a video on it. However, I should instead reach out and ask questions but I don't because I get distracted by other things like YouTube.</p>
        <h2>What methods do you use to help yourself get unstuck?</h2>
        <p>Look up videos online or ask questions if I can't find the answer online.</p>
        <h2>What is something you wish you could do but currently do not have the coding skills to accomplish?</h2>
        <p>Currently, I'd like to be able to use Javascript and properly link my elements and/or anything else. Javascript is easily the biggest struggle for me.</p>
        <h2>What are you struggling with?</h2>
        <p>Javascript.</p>
        <h2>How do you solve a problem?</h2>
        <p>I solve problems by smashing my head into the problem until I figure it out or get stuck and then ask for help.</p>
        <h2>What methods do you use to help yourself get unstuck?</h2>
        <p>First, I take a breath and remember this is all new and then I ask ChatGPT then take what ChatGPT gives me and look it up online. I like to see if I can find an MDN or Stack Overflow document.</p>
        </Card>
      </div>
    </div>
  )
}


export default Blogpost2
