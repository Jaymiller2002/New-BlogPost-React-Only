import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <div className="button-container">
          <button><Link to="/">Contact Me</Link></button>
          <button><Link to="/Blogpost1">Entry 1</Link></button>
          <button><Link to="/Blogpost2">Entry 2</Link></button>
          <button><Link to="/Blogpost3">Entry 3</Link></button>
          <button><Link to="/Blogpost4">Entry 4</Link></button>
          <button><Link to="/Blogpost5">Entry 5</Link></button>
          <button><Link to="/Blogpost6">Entry 6</Link></button>
          <button><Link to="/Blogpost7">Entry 7</Link></button>
          <button><Link to="/Blogpost8">Entry 8</Link></button>
        </div>
    </div>
  )
}

export default Header