import React from 'react';
import {motion} from 'framer-motion';

interface CardItemProps {
    image: string;
    info: string;
    text: string;
}


const container = {
    visible: {
        transition: {
            staggerChildren: 0.3,
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

export const CardItem: React.FC<CardItemProps> = ({ image, info, text }) => {
    return (
        <motion.div
            variants={item}

            className='card-item'>
            <div className='img'>
                <img src={image} alt='/' />
            </div>
            <div className='card-info'>
                <h3>{info}</h3>
                <div className='text'>{text}</div>
            </div>
        </motion.div>
    );
};
