
import { Link } from "react-router-dom";
import AuthButton from "./Auth0/AuthButton";

function Header(props) {

  return (
    <nav className="nav">
      <AuthButton />
      <Link to="/">
        <div>Allston Christmas</div>
      </Link>

    </nav>
  );
}

export default Header;