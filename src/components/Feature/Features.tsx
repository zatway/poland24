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
    background: "linear-gradient(to bottom, #e63946, #d62828)",
    color: "white",
    borderTopLeftRadius: "50px",
    borderBottomLeftRadius: "200px",
    width: "100vw", // Фиксированная ширина карточек
    height: "100%", // Фиксированная высота карточек
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-around",
    transition: "transform 0.3s ease",
    "&:hover": {
        transform: "translateX(-30px)",
    },
    "&:nth-of-type(3n + 2)": { background: theme.palette.primary[400] },
    "&:nth-of-type(3n + 3)": { background: theme.palette.primary[500] },
    "&:nth-of-type(3n + 1)": { background: theme.palette.primary[600] },
    position: "absolute",
}));

const VerticalText = styled(Typography)({
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    transform: "rotate(180deg)",
    height: "50%",
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "start",
});

export default function Features() {
    return (
        <Stack
            direction="row"

            sx={{
                position: "relative",
                width: "600px", // Ограничиваем ширину
                height: "750px", // Высота для карточек
                margin: "auto",

            }}
        >
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    elevation={3}
                    sx={{
                        left: `${index * 100}px`, // Смещение карточек
                        zIndex: features.length + index, // Чтобы верхняя была на переднем плане
                    }}
                >
                    <VerticalText variant="h6">{feature.text}</VerticalText>
                    <Typography variant="h3"
                        sx={{
                            transform: "scale(3) translateX(20%) translateY(-25%)",
                            zIndex: features.length + index,
                    }}
                    >{feature.icon}</Typography>
                </FeatureCard>
            ))}
        </Stack>
    );
}
