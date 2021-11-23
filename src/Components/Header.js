
import { Link } from "react-router-dom";
import AuthButton from "./Auth0/AuthButton";
import Button from "../Styled Components/Button";

function Header(props) {

const handleMenu = ()=>{
  console.log(props.menuOn)
  props.setMenuOn(!props.menuOn)
}

const userLinks = props.userAuthenticated ? <><a href="/" className="nav-link">List Item</a> <a href="/profile" className="nav-link">Profile</a></> : ''


  return (
    <nav className="nav">
      <div className="nav-circle" >
        <img src="./hamburger_menu.png" alt="menu" className="menu-img" onClick={handleMenu} />
        <div className={props.menuOn ? "dropdown " : "dropdown hidden"}>
          <a href="/" className="nav-link">Home</a>
          {userLinks}
          <AuthButton />
        </div>
      </div>
      <Link to="/">
        <div>Allston Christmas</div>
      </Link>

    </nav>
  );
}

export default Header;