import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export const Header  = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState<string>(location.pathname);

    const handleMenuClick = (path: string) => {
        setActiveMenu(path);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };


    return (
        <section className="header">
            <div className="upHead">
                <Link to="/" onClick={() => handleMenuClick("/")}>esst-6</Link>
                <div className="login">P</div>
            </div>
            <div className="navHead">
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
            </div>
        </section>
    );
};
