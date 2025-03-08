import logoImage from './assets/logo.png';
import MenuIcon from './assets/hamburger.svg'
import React, { useState } from "react";
import "./Header.css"
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      const onClickImage = () => {
        navigate("/");
      };

    const menuItems = [
        { id: 1, label: "Home", link: "/" },
        { id: 2, label: "About", link: "/about" },
        { id: 3, label: "Menu", link: "/underConstruction" },
        { id: 4, label: "Reservations", link: "/reservations" },
        { id: 5, label: "Order Online", link: "/underConstruction" },
        { id: 6, label: "Login", link: "/underConstruction" }
      ];

    return (
        <header>
            <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                <div className="logo">
                    <img src={logoImage} alt="Little Lemon logo" onClick={onClickImage}/>
                </div>
                <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
                    {menuItems.map(actItem => (
                        <Link key={actItem.id} to={actItem.link} className="nav-item" onClick={toggleMenu}>{actItem.label}</Link>
                    ))}
                </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <img src={MenuIcon} alt="menu-icon" />
            </div>
        </header>
    );
  }

  export default Header;