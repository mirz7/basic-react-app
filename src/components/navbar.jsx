import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return (
    <><nav>
      <h3>
        <NavLink to="/mainpage/" end>HOME</NavLink>
      </h3>
      <h3>
        <NavLink to="/mainpage/about">ABOUT</NavLink>
      </h3>
      
      <h3>
        <NavLink to="/mainpage/users">USERS</NavLink>
      </h3>
      
      <h3>
        <NavLink to="/">LOGOUT</NavLink>
      </h3>
      </nav>
    </>
  );
}
export default Navbar;
