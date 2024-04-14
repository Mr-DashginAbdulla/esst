import './Hero.scss'
import HeroImage from './Agro.jpg'
import {Link} from "react-router-dom";


export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="left">
                    <div className="title">
                        Empowering Agrotech Innovation
                    </div>
                    <div className="text">
                        Welcome to esst-6, your hub for cutting-edge agrotech products. Explore our smart devices and stay connected to your field with real-time data and insights.
                    </div>
                    <button>
                        <Link to="/contact-us">Contact Us</Link>
                    </button>
                </div>
                <div className="right">
                    <img src={HeroImage} alt=""/>
                </div>
            </div>
        </section>
    )
}