//
//
// export const Profile = () => {
//     return(
//         <section className='dashboard'>
//             <div>Hello</div>
//         </section>
//     )
// }

import './api'
import React, { useState, useEffect } from 'react';
import { getUserProfile, getWeatherData, getDeviceBatteryData, getSoilMoistureData } from './api'; // API fonksiyonlarını buraya ekleyin

const Dashboard: React.FC = () => {
    const [userProfile, setUserProfile] = useState<any>(null);
    const [weatherData, setWeatherData] = useState<any>(null);
    const [deviceBatteryData, setDeviceBatteryData] = useState<any>(null);
    const [soilMoistureData, setSoilMoistureData] = useState<any>(null);

    useEffect(() => {
        // Kullanıcı profili verilerini getir
        getUserProfile().then(data => setUserProfile(data));

        // Hava durumu verilerini getir
        getWeatherData().then(data => setWeatherData(data));

        // Cihaz pil bilgilerini getir
        getDeviceBatteryData().then(data => setDeviceBatteryData(data));

        // Toprak nemlilik verilerini getir
        getSoilMoistureData().then(data => setSoilMoistureData(data));
    }, []);

    return (
        <div>
            <h1>Profil Bilgileri</h1>
            {userProfile && (
                <div>
                    <p>Kullanıcı Adı: {userProfile.username}</p>
                    <p>Email: {userProfile.email}</p>
                    {/* Diğer profil bilgileri */}
                </div>
            )}

            <h1>Hava Durumu</h1>
            {weatherData && (
                <div>
                    <p>Sıcaklık: {weatherData.temperature}</p>
                    <p>Nem Oranı: {weatherData.humidity}</p>
                    {/* Diğer hava durumu bilgileri */}
                </div>
            )}

            <h1>Cihaz Pil Bilgileri</h1>
            {deviceBatteryData && (
                <div>
                    {/* Cihazın pil bilgilerini burada göster */}
                </div>
            )}

            <h1>Toprak Nemliliği Bilgileri</h1>
            {soilMoistureData && (
                <div>
                    {/* Toprak nemliliği bilgilerini burada göster */}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
