import "./Dashboard.scss"
import {useState} from "react";
import { BsThermometerSun } from "react-icons/bs";
import { LineChart } from "./LineChart";


export const Dashboard = () =>{

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return(
        <div className="dashboard">
            <div className="up-dashboard">
                
                <select className="select" name="station" id="station">
                    <option value="station-1">Mərkəzi Stansiya</option>
                    <option value="station-2">Sahə Stansiyası 1</option>
                    <option value="station-3">Sahə Stansiyası 2</option>
                </select>

                <div className="responsive-battery">
                    <div className="battery">Device Battery: 50%</div>
                    <div className="solar-battery" >Solar Battery: 50%</div>
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
                    <div> <span>50°</span><BsThermometerSun /></div>
                </div>

                <div className="chart">
                    <LineChart />
                </div>
            </div>
        </div>
    )
}