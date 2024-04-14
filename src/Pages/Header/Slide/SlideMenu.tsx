import React, { useState } from 'react';
import './SlideMenu.scss';
import {FaBars, FaTimes} from "react-icons/fa";

export const SlideMenu = () => {
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
        <div>
            <div id="menu-overlay" className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
            <div className="burger-menu" onClick={toggleMenu}>
                {isOpen ? <FaTimes/> : <FaBars/>}
            </div>
            <nav className={`menu-nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#service" onClick={toggleMenu}>Service</a></li>
                    <li><a href="#about-us" onClick={toggleMenu}>About Us</a></li>
                </ul>
            </nav>
        </div>
    );
};
