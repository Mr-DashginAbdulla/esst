// TSX: Footer bileşeni
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from './img.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="logo">esst-6</div>
            </div>
            <div className="footer-center">
                <nav className="navigation">
                    <ul>
                        <li><a href="/">Ana Sayfa</a></li>
                        <li><a href="/hakkimizda">Hakkımızda</a></li>
                        <li><a href="/urunler">Ürünler</a></li>
                        <li><a href="/iletisim">İletişim</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-right">
                <nav className="social-links">
                    <ul>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><a href="https://twitter.com" >Twitter</a></li>
                        <li><a href="https://linkedin.com">LinkedIn</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};
