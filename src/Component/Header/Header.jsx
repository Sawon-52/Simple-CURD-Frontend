import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">user</NavLink>
    </>
  );
  return (
    <div>
      <nav>
        <ul className="flex">{links}</ul>
      </nav>
    </div>
  );
};

export default Header;
