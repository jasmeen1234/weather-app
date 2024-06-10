import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Component = styled(Box)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '0 auto',
    backgroundImage: `url(${Sunset})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));

const Content = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
    borderRadius: '20px',
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
        width: '70%',
        margin: '10px 0',
    },
    [theme.breakpoints.up('md')]: {
        width: '30%',
        margin: '20px',
    },
}));

const Home = () => {
    const [result, setResult] = useState({});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    console.log("this is mobile view", isMobile);

    return (
        <Component>
            <Content>
                <Form setResult={setResult} />
                <Information result={result} />
            </Content>
        </Component>
    );
};

export default Home;
