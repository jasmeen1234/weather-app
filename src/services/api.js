// api.js
import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d';

export const getWeather = async (city, country) => {
    try {
        const response = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error("Error while calling the API", error);
        return null;
    }
};
