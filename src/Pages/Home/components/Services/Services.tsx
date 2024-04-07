import './Servies.scss';
import Dron from './dron.jpg';
import Grass from './grass.jpg';
import Laptop from './laptop.jpg';
import {motion} from "framer-motion";


const container ={
    visible:{
        transition: {
            // delayChildren: 0.3,
            staggerChildren: 0.3
        }
    }
}
const item ={
    hidden:{
        opacity: 0,
        translateY: 20
    },
    visible:{
        opacity: 1,
        translateY: 0
    }
}

export const  Services = () => {
    return(
        <motion.div

            initial={ { opacity: 0 } }
            animate={{opacity: 1}}
            transition={{ ease: "easeOut", duration: .5 }}

            className='services'>
            <div className='services-container'>
                <div className='service-header'>Our Services</div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className='cards'>

                    <motion.div
                        variants={item}

                        className='card-item'>
                        <div className='img'>
                            <img src={Dron} alt='/'/>
                        </div>
                        <div className='card-info'>
                            <h3>Remote Device Control</h3>
                            <div className='text'>Control the device on/off function remotely with the click of a button
                                for convenience and flexibility.
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={item}

                        className='card-item'>
                        <div className='img'>
                            <img src={Grass} alt='/'/>
                        </div>
                        <div className='card-info'>
                            <h3>Smart Agrotech Device</h3>
                            <div className='text'>Get the latest smart agrotech device to monitor field conditions and
                                optimize productivity.
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={item}

                        className='card-item'>
                        <div className='img'>
                            <img src={Laptop} alt='/'/>
                        </div>
                        <div className='card-info'>
                            <h3>Personalized User Dashboard</h3>
                            <div className='text'>Access your own information and device data through a personalized
                                dashboard for easy tracking and management.
                            </div>
                        </div>

                    </motion.div>


                </motion.div>
            </div>
        </motion.div>
    )
}