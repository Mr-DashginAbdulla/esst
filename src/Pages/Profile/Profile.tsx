import React, { useEffect, useState } from 'react';
import PP from "./PP.jpg";
import "./Profile.scss";
import { FaRegUser } from "react-icons/fa";

import authorizedHTTPClient from "../../utils/AxiosInterceptor"

export const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Save 
        console.log('Form data saved:', formData);
    };

    const handleReset = () => {
        setFormData({
            name: '',
            surname: '',
            email: '',
            phone: ''
        });
    };
    

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

                setUserName(data.userName);

                setEmail(data.email);

                setPhone(data.phoneNumber);

                console.log(data);
            })
            .catch(error => {
                
                console.error('Error:', error);
            });


    },[])

    return (
        <div className="profile">
            <div className="UpPhoto">
                <img className="img" alt="Profile" src={PP} />
            </div>
            <div className="DownInfo">
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <div className="name" id="form-component">
                        <label>Name</label>
                        <input
                            className="width-full form-control"
                            id="user_profile_name"
                            placeholder="Name"
                            aria-label="Name"
                            name="name"
                            value={userName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="surname" id="form-component">
                        <label>Surname</label>
                        <input
                            className="width-full form-control"
                            id="user_profile_surname"
                            placeholder="Surname"
                            aria-label="Surname"
                            name="surname"
                            // value={userSurname}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="e-mail" id="form-component">
                        <label>E-mail</label>
                        <input
                            className="width-full form-control"
                            id="user_profile_email"
                            placeholder="Email"
                            aria-label="Email"
                            disabled
                            name="email"
                            value={email}
                        />
                    </div>

                    <div className="phone" id="form-component">
                        <label>Phone</label>
                        <input
                            className="width-full form-control"
                            id="user_profile_phone"
                            placeholder="Phone"
                            aria-label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    
                    </div>

                    <button type="submit">Save</button>
                    <button type="reset" id="reset">Reset</button>
                </form>
            </div>
        </div>
    );
};