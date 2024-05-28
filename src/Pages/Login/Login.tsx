import React, { useRef, useState } from 'react';
import './Login.scss';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const loginFormRef = useRef<HTMLFormElement>(null);
    const loginTextRef = useRef<HTMLDivElement>(null);
    const signupBtnRef = useRef<HTMLLabelElement>(null);
    const navigate = useNavigate();

    const [loginFormData, setloginFormData] = useState({
        email: '',
        password: '',
        rememberMe: true
    });

    const [signUpFormData, setsignUpFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const loginHandleInputChange = (e: any) => {
        const { name, value } = e.target;
        setloginFormData({
            ...loginFormData,
            [name]: value
        });
    };

    const signUpHandleInputChange = (e: any) => {
        const { name, value } = e.target;
        setsignUpFormData({
            ...signUpFormData,
            [name]: value
        });
    };

    const handleLoginSubmitClick = async (e: any) =>  {
        e.preventDefault(); // Prevent the default form submission
        const { email, password, rememberMe} = loginFormData;
        
        const response = await fetch('https://localhost:7286/account/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginFormData)});


        // const loginData = await response.json();
        if(response.status == 200){
            navigate("/")
        }

    }

    const handleSignUpSubmitClick = async (e: any) =>  {
        e.preventDefault(); // Prevent the default form submission
        const { email, password, confirmPassword } = signUpFormData;

        // Add your form validation logic here
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        
        const response = await fetch('https://localhost:7286/account/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpFormData)});

        const errorData = await response.json();
        console.error('Error:', errorData);

    }

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
        <div className="margin-login">
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}

                className="wrapper">
                <div className="title-text">
                    <div className="title login" ref={loginTextRef}>Login Form</div>
                    <div className="title signup">Signup Form</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" defaultChecked />
                        <input type="radio" name="slide" id="signup" />
                        <input type="radio" name="slide" id="login" defaultChecked />
                        <input type="radio" name="slide" id="signup" />
                        <label htmlFor="login" className="slide login" onClick={handleLoginClick}>Login</label>
                        <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}
                            ref={signupBtnRef}>Signup</label>
                            ref={signupBtnRef}>Signup</label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                    <form id='Login' name='Login' action="#" className="login login-form" ref={loginFormRef}>
                            <div className="field">
                                <input 
                                    type="text" 
                                    placeholder="Email Address" 
                                    name='email'
                                    value={loginFormData.email}
                                    onChange={loginHandleInputChange}
                                    required/>
                        <form  id='Signup' name='Signup' onSubmit={handleLoginSubmitClick} action="#" className="signup login-form">
                        <div className="field">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    name="email"
                                    value={loginFormData.email}
                                    onChange={loginHandleInputChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    name='password'
                                    value={loginFormData.password}
                                    onChange={loginHandleInputChange}
                                    required/>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={loginFormData.password}
                                    onChange={loginHandleInputChange}
                                    required
                                />
                            </div>

                            <div className="pass-link"><a href="#">Forgot password?</a></div>

                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            
                            <div className="signup-link">Not a member? <a href="#" onClick={handleSignupLinkClick}>Signup
                                now</a></div>
                            <div className="signup-link">Not a member? <a href="#" onClick={handleSignupLinkClick}>Signup now</a></div>
                        </form>


                        {/* register */}
                        <form id='Signup' name='Signup'  action="#" className="signup login-form" onSubmit={handleSignUpSubmitClick}>
                        {/* register */}
                        <form id='Signup' name='Signup' onSubmit={handleSignUpSubmitClick} action="#" className="signup login-form">
                            <div className="field">
                                <input 
                                    type="text" 
                                    placeholder="Email Address" 
                                    name='email'
                                    value={signUpFormData.email}
                                    onChange={signUpHandleInputChange}
                                    required/>
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    name="email"
                                    value={signUpFormData.email}
                                    onChange={signUpHandleInputChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    name='password'
                                    value={signUpFormData.password}
                                    onChange={signUpHandleInputChange} 
                                    required/>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={signUpFormData.password}
                                    onChange={signUpHandleInputChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <input 
                                    type="password" 
                                    placeholder="Confirm password" 
                                    name='confirmPassword'
                                    value={signUpFormData.confirmPassword}
                                    onChange={signUpHandleInputChange}
                                    required/>
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    name="confirmPassword"
                                    value={signUpFormData.confirmPassword}
                                    onChange={signUpHandleInputChange}
                                    required
                                />
                            </div>

                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                        </form>


                    </div>
                </div>
            </motion.div>
        </div>
    );
};
