import React from 'react';
import {AppBar, Box, Container, TextField, Toolbar, Typography, useTheme} from "@mui/material";

const MainPage = () => {

    return (
        <AppBar>
            <Container maxWidth="lg">
                <Toolbar>
                    <Box component="div">
                        <Typography variant="h1">Что-то</Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MainPage;