import './Hero.scss'
import HeroImage from './Agro.jpg'


export const Hero = () => {
    return (
        // <section className='hero'>
        //     <div className='bigContainer'>
        //         <div className='container'>
        //             <div className='left'>
        //                 <h1 className='title'>Empowering Agrotech Innovation</h1>
        //                 <div className='text'>
        //                     Welcome to esst-6, your hub for cutting-edge agrotech products. Explore our smart devices and stay connected to your field with real-time data and insights.
        //                 </div>
        //                 <div className='button'>
        //                     <a href='/contact-us'>Contact Us</a>
        //                 </div>
        //             </div>
        //
        //             <div className='right'>
        //                 <img src={Test}  alt={'/'}/>
        //             </div>
        //         </div>
        //     </div>
        // </section>


        <section className="hero">
            <div className="container">
                <div className="left">
                    <div className="title">
                        Empowering Agrotech Innovation
                    </div>
                    <div className="text">
                        Welcome to esst-6, your hub for cutting-edge agrotech products. Explore our smart devices and stay connected to your field with real-time data and insights.
                    </div>
                    <button>
                        <a href='/contact-us'>Contact Us</a>
                    </button>
                </div>
                <div className="right">
                    <img src={HeroImage} alt=""/>
                </div>
            </div>
        </section>
    )
}