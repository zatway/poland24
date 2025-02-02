import React from 'react';
import {Box, IconButton, Stack, Typography} from "@mui/material";
import './LoginPage.css'
import CancelIcon from '@mui/icons-material/Cancel';

const LoginPage = () => {
    return (
        <Stack className='login-page' direction="row" spacing={1}>
            <div className="a">
                <Typography variant={'h4'} alignItems={'start'}>Вход</Typography>
                <IconButton aria-label="close">
                    <CancelIcon />
                </IconButton>
            </div>
            <h6>У вас еще нету аккаунта ? <a href='/MainPage'><h6>Зарегиструруйтесь</h6></a></h6>
        </Stack>
    );
};

export default LoginPage;