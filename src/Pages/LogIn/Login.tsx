import React, { useRef } from 'react';
import './Login.scss';

export const Login = () => {
    const loginFormRef = useRef<HTMLFormElement>(null);
    const loginTextRef = useRef<HTMLDivElement>(null);
    const signupBtnRef = useRef<HTMLLabelElement>(null);

    const handleSignupClick = () => {
        if (loginFormRef.current && loginTextRef.current) {
            loginFormRef.current.style.marginLeft = "-50%";
            loginTextRef.current.style.marginLeft = "-50%";
        }
    };

    const handleLoginClick = () => {
        if (loginFormRef.current && loginTextRef.current) {
            loginFormRef.current.style.marginLeft = "0%";
            loginTextRef.current.style.marginLeft = "0%";
        }
    };

    const handleSignupLinkClick = () => {
        if (signupBtnRef.current) {
            signupBtnRef.current.click();
            return false;
        }
    };

    return (
        <div className="wrapper">
            <div className="title-text">
                <div className="title login" ref={loginTextRef}>Login Form</div>
                <div className="title signup">Signup Form</div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" defaultChecked />
                    <input type="radio" name="slide" id="signup" />
                    <label htmlFor="login" className="slide login" onClick={handleLoginClick}>Login</label>
                    <label htmlFor="signup" className="slide signup" onClick={handleSignupClick} ref={signupBtnRef}>Signup</label>
                    <div className="slider-tab"></div>
                </div>
                <div className="form-inner">
                    <form action="#" className="login login-form" ref={loginFormRef}>
                        <div className="field">
                            <input type="text" placeholder="Email Address" required />
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div className="pass-link"><a href="#">Forgot password?</a></div>
                        <div className="field btn">
                            <div className="btn-layer"></div>
                            <input type="submit" value="Login" />
                        </div>
                        <div className="signup-link">Not a member? <a href="#" onClick={handleSignupLinkClick}>Signup now</a></div>
                    </form>
                    <form action="#" className="signup login-form">
                        <div className="field">
                            <input type="text" placeholder="Email Address" required/>
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Password" required/>
                        </div>
                        <div className="field">
                            <input type="password" placeholder="Confirm password" required/>
                        </div>

                        <div className="field btn">
                            <div className="btn-layer"></div>
                            <input type="submit" value="Signup"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
