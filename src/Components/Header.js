
import { Link } from "react-router-dom";
import AuthButton from "./Auth0/AuthButton";
import Button from "../Styled Components/Button";

function Header(props) {

const handleMenu = ()=>{
  console.log(props.menuOn)
  props.setMenuOn(!props.menuOn)
}


  return (
    <nav className="nav">
      <div className="nav-circle" >
        <img src="./hamburger_menu.png" alt="menu" className="menu-img" />
        <div className={"dropdown "}>
          <Button primary>Home</Button>
          <AuthButton />
        </div>
      </div>
      <AuthButton />
      <Link to="/">
        <div>Allston Christmas</div>
      </Link>

    </nav>
  );
}

export default Header;