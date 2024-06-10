import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { getWeather } from '../services/api';
import InputBase from '@mui/material/InputBase';

const Container = styled(Box)({
    background: '#445A6F',
    padding: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 600px)': {
        flexDirection: 'row',
    },
});

const Input = styled(InputBase)({
    color: '#FFF',
    marginBottom: 10,
    fontSize: 18,
    '@media (min-width: 600px)': {
        marginBottom: 0,
        marginRight: 20,
    },
});

const GetButton = styled(Button)({
    background: '#e67e22',
    color: '#FFF',
    marginTop: 10,
    '@media (min-width: 600px)': {
        marginTop: 0,
    },
});

const Form = ({ setResult }) => {
    const [data, setData] = useState({ city: '', country: '' });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    };

    return (
        <Container>
            <Input 
                placeholder="City"
                onChange={(e) => handleChange(e)}
                name="city"
            />
            <Input 
                placeholder="Country"
                onChange={(e) => handleChange(e)}
                name="country"
            />
            <GetButton
                variant="contained"
                onClick={() => getWeatherInfo()}
            >
                Search Weather
            </GetButton>
        </Container>
    );
};

export default Form;
