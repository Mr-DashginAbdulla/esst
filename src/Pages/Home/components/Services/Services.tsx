import React from 'react';
import './Servies.scss';
import Drone from './dron.jpg';
import Grass from './grass.jpg';
import Laptop from './laptop.jpg';
import { motion } from 'framer-motion';
import { CardItem } from './CardItem';

const container = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        translateY: 20,
    },
    visible: {
        opacity: 1,
        translateY: 0,
    },
};

export const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='services'>
            <div className='services-container'>
                <div className='service-header'>Our Services</div>
                
                <motion.div variants={container} initial='hidden' animate='visible' className='cards'>

                    <CardItem image={Drone} info='Remote Device Control' text='Control the device on/off function remotely with the click of a button for convenience and flexibility.' />
                    <CardItem image={Grass} info='Smart Agrotech Device' text='Get the latest smart agrotech device to monitor field conditions and optimize productivity.' />
                    <CardItem image={Laptop} info='Personalized User Dashboard' text='Access your own information and device data through a personalized dashboard for easy tracking and management.' />
                
                </motion.div>
            </div>
        </motion.div>
    );
};

