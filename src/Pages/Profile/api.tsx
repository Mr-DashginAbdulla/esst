// api.ts

// Kullanıcı profili verileri
export const getUserProfile = async () => {
    return {
        username: 'example_user',
        email: 'example@example.com',
        // Diğer kullanıcı profili verileri buraya eklenebilir
    };
};

// Hava durumu verileri
export const getWeatherData = async () => {
    return {
        temperature: 25,
        humidity: 70,
        // Diğer hava durumu verileri buraya eklenebilir
    };
};

// Cihaz pil bilgileri
export const getDeviceBatteryData = async () => {
    return {
        // Cihaz pil bilgilerini burada oluştur
    };
};

// Toprak nemlilik verileri
export const getSoilMoistureData = async () => {
    return {
        // Toprak nemlilik verilerini burada oluştur
    };
};
