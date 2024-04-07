import {Hero} from "./components/Hero/Hero";
import {Services} from "./components/Services/Services";
import {ContactUs} from "./components/Contact Us/ContactUs";
import {AboutUs} from "./components/AboutUs/AboutUs";
import {motion} from "framer-motion";


export const Home = () => {
    return(
        <motion.div

            initial={ { opacity: 0 } }
            animate={{opacity: 1}}
            transition={{ ease: "easeOut", duration: 0.5 }}

            className='home'>
            <Hero/>
            <Services/>
            <AboutUs/>
            <ContactUs />
        </motion.div>
    )
}