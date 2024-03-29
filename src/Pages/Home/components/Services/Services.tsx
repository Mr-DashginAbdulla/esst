import './Servies.scss';
import Dron from './dron.jpg';
import Grass from './grass.jpg';
import Laptop from './laptop.jpg';




export const  Services = () => {
    return(
        <section className='services'>
            <div className='services-container'>
                <div className='service-header'>Our Services</div>

                <div className='cards'>
                    <div className='card-item'>
                        <div className='img'>
                            <img src={Dron} alt='/'/>
                        </div>
                        <div className='card-info'>
                            <h3>Remote Device Control</h3>
                            <div className='text'>Control the device on/off function remotely with the click of a button for convenience and flexibility.</div>
                        </div>
                    </div>

                    <div className='card-item'>
                        <div className='img'>
                            <img src={Grass} alt='/'/>
                        </div>
                        <div className='card-info'>
                            <h3>Smart Agrotech Device</h3>
                            <div className='text'>Get the latest smart agrotech device to monitor field conditions and optimize productivity.</div>
                        </div>
                    </div>

                    <div className='card-item'>
                        <div className='img'>
                            <img src={Laptop} alt='/'/>
                        </div>
                        <div className='card-info'>
                            <h3>Personalized User Dashboard</h3>
                            <div className='text'>Access your own information and device data through a personalized dashboard for easy tracking and management.</div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}