import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <div className="button-container">
          <button><Link to="/">Contact Me</Link></button>
          <button><Link to="/Blogpost1">Blog-1</Link></button>
          <button><Link to="/Blogpost2">Blog-2</Link></button>
          <button><Link to="/Blogpost3">Blog-3</Link></button>
          <button><Link to="/Blogpost4">Blog-4</Link></button>
          <button><Link to="/Blogpost5">Blog-5</Link></button>
        </div>
    </div>
  )
}

export default Header