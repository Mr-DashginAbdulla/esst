import Dashboard from "../Profile/Profile";
import {Hero} from "./components/Hero/Hero";
import {Services} from "./components/Services/Services";
import {ContactUs} from "./components/Contact Us/ContactUs";


export const Home = () => {
    return(
        <section className='home'>
            <Hero/>
            <Services/>
            <ContactUs />
        </section>
    )
}