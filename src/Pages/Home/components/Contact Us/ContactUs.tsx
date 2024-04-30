import React from 'react';
import './ContactUs.scss'
import { motion } from "framer-motion";

export const ContactUs = () => {
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className='contact-us'>
            <h1 className="title">Contact Us</h1>
            <div className="contact-us-container">
                <div className="contact-form">
                    <form>
                        <label htmlFor="email">Email Address required</label>
                        <input type="email" id="email" name="email" required/>
                        <label htmlFor="name">Name required</label>
                        <input type="text" id="name" name="name" required/>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone"/>
                        <label htmlFor="message">Message required</label>
                        <textarea id="message" name="message" required></textarea>
                        <button className='success'>Send Message</button>
                    </form>
                </div>
                <div className="map-container">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5476277497705!2d49.809911891709966!3d40.37455390772369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea2b26aff9%3A0x8bf044493464664c!2sBaku%20State%20University!5e0!3m2!1sen!2saz!4v1713103070036!5m2!1sen!2saz"
                        width="1200px"
                        height="550"
                        style={{border: 1}}
                        loading="lazy"
                    />
                </div>
            </div>
        </motion.div>
    )
}
