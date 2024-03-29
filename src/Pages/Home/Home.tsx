import Dashboard from "../Profile/Profile";
import {Hero} from "./components/Hero/Hero";
import {Services} from "./components/Services/Services";


export const Home = () => {
    return(
        <section className='home'>
            <Hero/>
            <Services/>
        </section>
    )
}