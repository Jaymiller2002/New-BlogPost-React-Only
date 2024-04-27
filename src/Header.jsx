import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
     <button><Link to="/">Blog-1</Link></button>
     <button><Link to="/Blogpost2">Blog-2</Link></button>
    </div>
  )
}

export default Header