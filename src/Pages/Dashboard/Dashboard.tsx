import "./Dashboard.scss"
import {useEffect, useState} from "react";
import { BsThermometerSun } from "react-icons/bs";
import { LineChart } from "./LineChart";


export const Dashboard = () =>{

    const [isOn, setIsOn] = useState(false);

    const [stansiyaAd, setstansiyaAd] = useState("");
    const [deviceBattery, setDeviceBattery] = useState(0);
    const [solarBattery, setSolarBattery] = useState(0);
    const [currentTemp, setCurrentTemp] = useState(0);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    useEffect(() =>{

        let userId = localStorage.getItem("Token");

        fetch('https://localhost:7286/dashboard/getDashboard/getDashboard', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)}).then(response => response.json()).then(data => {

                setstansiyaAd(data.stansiyaAd);
                setDeviceBattery(data.deviceBatteryPercent);
                setSolarBattery(data.solarBatteryPercent);
                setCurrentTemp(data.currentTemp);

                console.log(data);
            })
            .catch(error => {
                
                console.error('Error:', error);
            });


    },[])

    return(
        <div className="dashboard">
            <div className="up-dashboard">
                
                <select className="select" name="station" id="station">
                    <option value="station-1">{stansiyaAd}</option>
                    <option value="station-2">Sahə Stansiyası 1</option>
                    <option value="station-3">Sahə Stansiyası 2</option>
                </select>

                <div className="responsive-battery">
                    <div className="battery">Device Battery: {deviceBattery}%</div>
                    <div className="solar-battery" >Solar Battery: {solarBattery}%</div>
                </div>

                <div className={`switch-container ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
                    <div className="switch-slider"></div>
                </div>

            </div>

            <div className="bottom-dashboard">
                <div className="temperature-section">
                    
                    <div className="temperature-table">
                        <table>
                            <thead>
                            <tr>
                                <th>Time</th>
                                <th>Temperature (°C)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>09:00</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>12:00</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>18:00</td>
                                <td>27</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="moisture">
                    <div> <span>{currentTemp}°</span><BsThermometerSun /></div>
                </div>

                <div className="chart">
                    <LineChart />
                </div>
            </div>
        </div>
    )
}