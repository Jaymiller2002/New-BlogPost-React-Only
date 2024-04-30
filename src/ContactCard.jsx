import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Image from './assets/Blogpic.jpeg'

function ContactCard () {
  return (
    <div class="card-container">
        <Card>
        <div className="photo" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "25px"}}>
            <img src={Image} />
        </div>
        <ul>
            <li><b>Jay Miller</b></li>
            <li><b>Full-Stack Developer</b></li>
        </ul>
        <div class="icon-container">
            <Link to="https://github.com/"><i className="fa-brands fa-square-github"></i></Link>
            <Link to= "mailto:jay.miller02@icloud.com"><i className="fa-solid fa-square-envelope"></i></Link>
            <Link to="tel:+8594758431"><i className="fa-solid fa-square-phone"></i></Link>
            <Link to="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></Link>
            <Link to="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></Link>
            <Link to="https://twitter.com/"><i className="fa-brands fa-square-x-twitter"></i></Link>
            <Link to="https://www.youtube.com/"><i className="fa-brands fa-square-youtube"></i></Link>
            <Link to="https://www.google.com/"><i className="fa-brands fa-square-google-plus"></i></Link>
              </div>
        </Card>
    </div>
  )
}


export default ContactCard