import React from 'react';
import './ContactUs.scss'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ContactUs = () => {
    return (
        <section className='contact-us'>
            <div className="contact-us-container">
                <h1 className="title">Contact Us</h1>
                <form >
                    <label htmlFor="email">Email Address required</label>
                    <input type="email" id="email" name="email" required/>
                    <label htmlFor="name">Name required</label>
                    <input type="text" id="name" name="name" required/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone"/>
                    <label htmlFor="message">Message required</label>
                    <textarea id="message" name="message" required></textarea>
                    <button className='success'>
                        Contact Us
                    </button>
                </form>
            </div>
        </section>
    )
}