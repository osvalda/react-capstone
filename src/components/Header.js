import logoImage from './assets/logo.png';
import MenuIcon from './assets/hamburger.svg'
import React, { useState } from "react";
import "./Header.css"
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ReservationPage from './pages/ReservationPage'
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage'
import HomePage from './pages/HomePage/HomePage';

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
                        <Link to={actItem.link} className="nav-item" onClick={toggleMenu}>{actItem.label}</Link>
                    ))}
                </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <img src={MenuIcon} alt="menu-icon" />
            </div>
            <Routes> 
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/reservations" element={<ReservationPage />}></Route>
                <Route path="/underConstruction" element={<UnderConstructionPage />}></Route>
            </Routes>
        </header>
    );
  }

  export default Header;