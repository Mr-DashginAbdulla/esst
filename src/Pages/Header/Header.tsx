import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import {FaBars, FaRegUser, FaTimes} from "react-icons/fa";
import CustomDropdown from "./Dropdown";

export const Header  = () => {

    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState<string>(location.pathname);

    const handleMenuClick = (path: string) => {
        setActiveMenu(path);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Boş bir alana tıklama ile menüyü kapatma
    const closeMenu = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).id === 'menu-overlay') {
            setIsOpen(false);
        }
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    return (
        <section className="header">
            <div className="upHead">
                <Link to="/" onClick={() => handleMenuClick("/")}>esst-6</Link>
                <div className="dropdown">
                    <button className="dropbtn"> <FaRegUser/> </button>              
                    <div className="dropdown-content">
                        <Link
                            to={isLoggedIn ? "/profile" : "/login"}
                            onClick={() => handleMenuClick("/profile")}
                            className={activeMenu === "/profile" ? "active" : ""}>
                            {isLoggedIn ? "Profile" : "Login"}
                        </Link>
                        <Link
                            to="/dashboard"
                            onClick={() => handleMenuClick("/dashboard")}
                            className={activeMenu === "/dashboard" ? "active" : ""}
                        >
                            Dashboard
                        </Link>
                    
                        <Link
                            to="/"
                            onClick={() => handleMenuClick("/logout")}
                            className={activeMenu === "/logout" ? "active" : ""}
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navHead">
                {/*<SlideMenu/>*/}
                <div className="desktopMenu">
                    <Link
                        to="/"
                        onClick={() => handleMenuClick("/")}
                        className={activeMenu === "/" ? "active" : ""}
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        onClick={() => handleMenuClick("/services")}
                        className={activeMenu === "/services" ? "active" : ""}
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact-us"
                        onClick={() => handleMenuClick("/contact-us")}
                        className={activeMenu === "/contact-us" ? "active" : ""}
                    >
                        Contact Us
                    </Link>
                    
                </div>
                <div >
                    <div id="menu-overlay" className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
                    <div className="burger-menu" onClick={toggleMenu}>
                        {isOpen ? <FaTimes/> : <FaBars/>}
                    </div>
                    <nav className={`menu-nav ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                            <li><Link to="/services" onClick={toggleMenu}>Service</Link></li>
                            <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

