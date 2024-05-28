import { useEffect, useState } from "react"
import PP from "./PP.jpg"
import "./Profile.scss"

import {FaRegUser} from "react-icons/fa"
import authorizedHTTPClient from "../../utils/AxiosInterceptor"

export const Profile = ()=>{

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() =>{

        let userId = localStorage.getItem("Token");

        fetch('https://localhost:7286/account/GetProfileData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userId)}).then(response => response.json()).then(data => {
                console.log(data);
            })
            .catch(error => {
                
                console.error('Error:', error);
            });


    })

    return (
        <div className="profile">
            <div className="UpPhoto">
                <img className="img" alt="/" src={PP}/>
            </div>
            <div className="DownInfo">
                <form>
                    <div className="name" id="form-component">
                        <label>Name</label>
                        <input className="width-full form-control" id="user_profile_name" placeholder="Name"
                               aria-label="Name" name="user[profile_name]" value="user[profile_name]" />
                    </div>

                    <div className="surname" id="form-component">
                        <label>Surname</label>
                        <input className="width-full form-control" id="user_profile_surname" placeholder="Surname"
                               aria-label="Surname" name="user[profile_surname]" value="user[profile_surname]" />
                    </div>

                    <div className="e-mail" id="form-component">
                        <label>E-mail</label>
                        <input className="width-full form-control" id="user_profile_email" placeholder="Email"
                               aria-label="Email" disabled name="user[profile_email]" value="user[profile_email]" />
                    </div>

                    <div className="phone" id="form-component">
                        <label>Phone</label>
                        <input className="width-full form-control" id="user_profile_phone" placeholder="Phone"
                               aria-label="Phone" name="user[profile_phone]" value="user[profile_phone]" />
                    </div>

                    <button type="submit">Save</button>
                    <button type="reset" id="reset">Reset</button>
                </form>
            </div>
        </div>
    )
}