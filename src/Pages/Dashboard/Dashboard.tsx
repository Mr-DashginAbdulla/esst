import "./Dashboard.scss"
import {useState} from "react";



export const Dashboard = () =>{

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return(
        <div className="dashboard">
            <div className="left-dashboard">
                Left
                <select className="select" name="station" id="station">
                    <option value="station-1">Mərkəzi Stansiya</option>
                    <option value="station-2">Sahə Stansiyası 1</option>
                    <option value="station-3">Sahə Stansiyası 2</option>
                </select>

                <div className="battery">Battery Percent: 50%</div>
                <div className="solar-battery">Solar Battery Percent: 50%</div>

                <div className={`switch-container ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
                    <div className="switch-slider"></div>
                </div>

            </div>

            <div className="right-dashboard">

            </div>
        </div>
    )
}