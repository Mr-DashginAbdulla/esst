

import React from 'react';
import './Login.scss'; // SASS dosyanızı bu şekilde import edin

export const Login = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Log In</h2>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

