import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
     <button><Link to="/">Blog-1</Link></button>
     <button><Link to="/Blogpost2">Blog-2</Link></button>
     <button><Link to="/Blogpost3">Blog-3</Link></button>
     <button><Link to="/Blogpost4">Blog-4</Link></button>
     <button><Link to="/ContactCard">Contact Me</Link></button>
    </div>
  )
}

export default Header