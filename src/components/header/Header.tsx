import { useState } from "react";
import Nav from "../Nav/Nav";
import "./Header.scss";
import { FaXing } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import log from "../../assets/images/Shape.png";

const Header = () => {
    const [ismenuOpen, setIsmenuOpen] = useState(false);

    const toggleMenu = () => setIsmenuOpen(!ismenuOpen);

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a href="" className="logo">
                        <img className="logo_img" src={log} alt="" />
                    </a>

                    <Nav isMenuOpen={ismenuOpen} toggleMenu={toggleMenu} />

                    <div className="nav-menu-btn" onClick={toggleMenu}>
                        {ismenuOpen ? <FaXing /> : <FaBarsStaggered />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;