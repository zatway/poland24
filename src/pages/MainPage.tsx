import Header from "../components/Header";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import React from "react";
import Features from "../components/Feature/Features";
//import classes from './MainPage.module.css'

const MainPage = () => {


    return (
        <>
            <Header/>
            <Container>
                <Box
                    sx={{display: 'flex', justifyContent: 'space-between'}}
                >
                    <Box component='div' className='offer'>
                        <Box>
                            <Typography variant='h1'>Быстрая доставка
                                товаров из Польши
                                и стран Евросоюза
                                в Украину
                            </Typography>
                            <Typography variant='body1'>оцени новый уровень в качестве обслуживания и скорости доставки</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                // padding: '0.5rem',
                                // border: '6px solid red',
                                // borderRadius: '15px',
                                // boxSizing: 'content-box',
                            }}
                        >
                            <TextField  placeholder="Вставить ссылку на товар" variant="outlined"
                                        sx={{borderRadius: '20px', color: '#2D2D2D', background: '#F2F2F2', border: 'none'}}
                            />
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => alert('тип заказ')}
                            >
                                <Typography variant='button'>Заказать</Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        <Features/>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default MainPage;
