import { Link } from "react-scroll";
import "./Nav.scss";

type NavProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

const Nav = ({ toggleMenu, isMenuOpen }: NavProps) => {
  const items = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className={isMenuOpen ? "nav active" : "nav"}>
      <div className="nav-menu">
        {items.map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={toggleMenu}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;