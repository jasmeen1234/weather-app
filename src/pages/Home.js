import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Component = styled(Box)(({ theme }) => ({
    height: '900px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
    },
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));

const Image = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${Sunset})`,
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',
    [theme.breakpoints.down('sm')]: {
        width: '50%',
        height: '80%',
        borderRadius: '20px 20px 0 0',
    },
    [theme.breakpoints.up('md')]: {
        width: '30%',
        height: '80%',
    },
}));

const Content = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '20%',
        height: '80%',
    },
    [theme.breakpoints.up('md')]: {
        width: '20%',
        height: '80%',
    },
}));

const Home = () => {
    const [result, setResult] = useState({});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    console.log("this is mobile view", isMobile);

    return (
        <Component>
            <Image />
            <Content>
                <Form setResult={setResult} />
                <Information result={result} />
            </Content>
        </Component>
    );
};

export default Home;