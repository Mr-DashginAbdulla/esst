import React, {useState} from 'react';
import './Footer.scss';
import Logo from './logo512.png';
import {Link, useLocation} from "react-router-dom";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";


export const Footer = () => {

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
        <footer className="footer">
            <div className="footer-left">
                <Link to="/" onClick={() => handleMenuClick("/")}>©  ESST-6</Link>

                {/* <Link to="/" onClick={() => handleMenuClick("/")}>
                    <img src={Logo} alt="ESST-6" />
                </Link> */}
            </div>
            <div className="footer-links">
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

            <div    className="footer-right">
                <div className="links"><FaFacebook /><Link className="links" to="http://fb.com" >Facebook</Link></div>
                <div className="links"><FaInstagram/><Link className="links" to="http://instagram.com" >Instagram</Link></div>
                <div className="links"><FaXTwitter/><Link className="links" to="http://x.com" >Twitter</Link></div>
            </div>
        </footer>
    );
};
