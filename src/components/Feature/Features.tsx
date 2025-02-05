import { Stack, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const features = [
    { text: "Комиссия 6.38%", icon: "💰" },
    { text: "Минимальная предоплата 30%", icon: "💼" },
    { text: "Доставка товара за 5-10 дней", icon: "🚚" },
    { text: "Доставим заказы до 500€ без пошлин", icon: "🏦" },
    { text: "Возможность оплатить кредитными средствами", icon: "⏳" },
];

const FeatureCard = styled(Paper)(({ theme }) => ({
    padding: "16px",
    textAlign: "center",
    background: "linear-gradient(to bottom, #e63946, #d62828)", // Градиентный фон
    color: "white",
    borderRadius: "20px",
    height: '100%',
    flex: 1,
    minWidth: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "transform 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)",
    },
}));

const VerticalText = styled(Typography)({
    writingMode: "vertical-rl", // Делаем текст вертикальным
    textOrientation: "mixed", // Корректное отображение букв
    transform: "rotate(180deg)", // Если нужно перевернуть в другую сторону
});

export default function Features() {
    return (
        <Stack
            direction="row" // Колонка на мобилке, ряд на ПК
            spacing={2}
            alignItems="center"
            height="100%"
            justifyContent="center"
            sx={{ maxWidth: "900px", margin: "auto", padding: "20px" }}
        >
            {features.map((feature, index) => (
                <FeatureCard key={index} elevation={3}
                    sx={{transform: `translateX(-${index}%)`}}
                >
                    <Typography variant="h1"><VerticalText>{feature.text}</VerticalText></Typography>
                    <Typography variant="h3" component="div">
                        {feature.icon}
                    </Typography>
                </FeatureCard>
            ))}
        </Stack>
    );
}