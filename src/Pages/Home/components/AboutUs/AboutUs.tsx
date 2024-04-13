import React from 'react';
import './AboutUs.scss';
import Laptop from './img.png'

export const AboutUs = () => {
    return (
        <section className='aboutUs'>
            <div className='content'>
                <div className='image'>
                    <img src={Laptop} alt='/'/>
                </div>
                <div className='text'>
                    <h1>About Us</h1>
                    <p>We, esst-6, are a technology company that shapes the agriculture of the future. We produce smart agricultural devices and offer innovative solutions to our farmers. Our goal is to increase the efficiency of agriculture, use resources more efficiently and make the lives of our farmers easier.

                        Thanks to the smart agricultural devices we have developed, our farmers can manage their fields more effectively, grow their products more efficiently and obtain more products. Additionally, you can easily view, control and analyze data from our devices through our website.</p>
                    {/* <Link to='/about'>Read more ...</Link> */}
                </div>
            </div>
        </section>
    );
};
