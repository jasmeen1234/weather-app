import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud, AccessTime, CalendarToday, Air, Description } from '@mui/icons-material';
import WeatherImage from '../assets/images/wheather.jpeg';

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: 'black',
    backgroundImage: `url(${WeatherImage})`,
    width: '200%',
    height: '87.5%',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
});

const Information = ({ result }) => {
    const getCurrentDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        return { date, time };
    };

    const { date, time } = getCurrentDateTime();

    return (
        result && Object.keys(result).length > 0 ?
        <Box style={{ margin: '15px 5px' }}>
            <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
            <Row><SettingsBrightness />Temperature: {result.main.temp}°C</Row>
            <Row><Opacity />Humidity: {result.main.humidity}%</Row>
            <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Weather: {result.weather[0].main}</Row>
            <Row><Cloud />Clouds: {result.clouds.all}%</Row>
            <Row><Air />Wind Speed: {result.wind.speed} m/s</Row>
            <Row><Description />Description: {result.weather[0].description}</Row>
            <Row><CalendarToday />Date: {date}</Row>
            <Row><AccessTime />Time: {time}</Row>
        </Box>
        : <Error>Please enter the values to check weather</Error>
    );
}

export default Information;