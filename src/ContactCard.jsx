import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Image from './assets/Blogpic.jpeg'


function ContactCard () {
  return (
    <div class="card-container" style={{height: "300px", width: "300px", display: "flex", justifyContent: "center", marginLeft: "80px", marginTop: "20px"}}>
        <Card>
        <div className="photo" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "25px"}}>
            <img src={Image} />
        </div>
        <ul>
            <li><b>Jay Miller</b></li>
            <li><b>Full-Stack Developer</b></li>
        </ul>
        <div class="icon-container">
            <Link to="https://github.com/"><i className="fab fa-github-alt"></i></Link>
            <Link to= "mailto:jay.miller02@icloud.com"><i className="fa-solid fa-envelope"></i></Link>
            <Link to="tel:+8594758431"><i className="fa-solid fa-mobile-alt"></i></Link>
            <Link to="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link to="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="https://twitter.com/"><i className="fa-brands fa-x-twitter"></i></Link>
            <Link to="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></Link>
            <Link to="https://www.google.com/"><i className="fa-brands fa-google"></i></Link>
              </div>
        </Card>
    </div>
  )
}


export default ContactCard