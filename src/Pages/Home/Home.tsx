import {Hero} from "./components/Hero/Hero";
import {Services} from "./components/Services/Services";
import {ContactUs} from "./components/Contact Us/ContactUs";
import {AboutUs} from "./components/AboutUs/AboutUs";


export const Home = () => {
    return(
        <section className='home'>
            <Hero/>
            <Services/>
            <AboutUs/>
            <ContactUs />
        </section>
    )
}