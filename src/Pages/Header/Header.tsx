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


    return (
        <section className="header">
            <div className="upHead">
                <Link to="/" onClick={() => handleMenuClick("/")}>esst-6</Link>
                <Link to="/login" className="login">
                    <FaRegUser/>
                </Link>
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
                    <Link
                        to="/profile"
                        onClick={() => handleMenuClick("/profile")}
                        className={activeMenu === "/profile" ? "active" : ""}
                    >
                        Profile
                    </Link>
                    <Link
                        to="/dashboard"
                        onClick={() => handleMenuClick("/dashboard")}
                        className={activeMenu === "/dashboard" ? "active" : ""}
                    >
                        Dashboard
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