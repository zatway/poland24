import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Link,
    MenuItem,
    Select,
    SelectChangeEvent,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import {FaTelegram, FaViber} from "react-icons/fa6";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Header = () => {

    const theme = useTheme();

    const [currency, setCurrency] = React.useState({
        zlotie: '00.00',
        evro: '00.00',
    });

    const [country, setCountry] = React.useState({
        selected: "ukr",
        options: {
            ukr: "Укр.",
            rus: "Рос.",
            brs: "Бел.",
        },
    });


    const handleChange = (event: SelectChangeEvent) => {
        setCountry((prev) => ({
            ...prev,
            selected: event.target.value,
        }));
    };
    return (
        <AppBar
            position="static"
        >
            <Container maxWidth="lg">
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src="dsa" alt="logo"/>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', md: 'flex-start' },
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            gap: '1rem'
                        }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                Наши мессенджеры
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1,
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                    mt: 0.5,
                                }}
                            >
                                <FaTelegram size={20} color="blue" />
                                <FaViber size={20} color="purple" />
                            </Box>
                        </Box>
                        <Typography
                            variant="body2"
                        >
                            <MailOutlineIcon fontSize="small" /> info@poland24.com.ua
                        </Typography>
                    </Box>

                    {/* Валюты */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h6" component="div">
                            'zł {currency.zlotie}
                        </Typography>
                        <Typography variant="h6" component="div">
                            € {currency.evro}
                        </Typography>
                    </Box>

                    {/* Кнопка "Оформить заказ" */}
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => alert('типа запрос или хз что тут')}
                    >
                        <Typography variant="button">Оформить заказ</Typography>
                    </Button>

                    {/* Вход / Регистрация */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                        }}
                    >
                        <Link href="#" underline="none" variant="body1" color="inherit">
                            Вход
                        </Link>
                        <Typography variant="body1" component="span">
                            /
                        </Typography>
                        <Link href="#" underline="none" variant="body1" color="inherit">
                            Регистрация
                        </Link>
                    </Box>

                    <Box>
                        <Select
                            value={country.selected}
                            onChange={handleChange}
                            variant="standard"
                        >
                            {Object.entries(country.options).map(([key, value]) => (
                                <MenuItem key={key} value={key}>
                                    {value}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Toolbar>
                <Toolbar>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: "100%"
                        }}
                    >
                        <Link href="#">О компании</Link>
                        <Link href="#">Список магазину</Link>
                        <Link href="#">Отзывы</Link>
                        <Link href="#">Вопрос-ответ</Link>
                        <Link href="#">Калькулятор</Link>
                        <Link href="#">Контакты</Link>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: theme.palette.warning[900], color: "white" }}
                            onClick={() => alert("хз что тут")}
                        >
                            <HelpOutlineIcon/>
                            <Typography variant="button">Поиск в помощи товаров</Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;