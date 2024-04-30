import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';

const CustomDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                <FaRegUser />
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <a href="/profile" className="dropdown-item">Profil</a>
                    <a href="/settings" className="dropdown-item">Ayarlar</a>
                    <a href="/logout" className="dropdown-item">Çıkış Yap</a>
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
