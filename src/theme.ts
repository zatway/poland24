import {createTheme, ThemeOptions} from "@mui/material";

const AppTheme: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: "#EA0C0C",
            100: "#FBCECE",
            200: "#F79E9E",
            300: "#F26D6D",
            400: "#EE3D3D",
            500: "#EA0C0C",
            600: "#BB0A0A",
            700: "#8C0707",
            800: "#5E0505",
            900: "#2F0202",
        },
        secondary: {
            main: "#95A4AA",
            100: "#EAEDEE",
            200: "#D5DBDD",
            300: "#BFC8CC",
            400: "#AAB6BB",
            500: "#95A4AA",
            600: "#778388",
            700: "#596266",
            800: "#3C4244",
            900: "#1E2122",
        },
        success: {
            main: "#EAEDEE",
            100: "#CCF1E7",
            200: "#99E3CF",
            300: "#66D6B7",
            400: "#33C8A0",
            500: "#00BA88",
            600: "#00956D",
            700: "#007051",
            800: "#004A36",
            900: "#00251B",
        },
        warning: {
            main: "#F59825",
            100: "#FDEAD3",
            200: "#FBD6A8",
            300: "#F9C17C",
            400: "#F7AD51",
            500: "#F59825",
            600: "#C47A1E",
            700: "#935B16",
            800: "#623D0F",
            900: "#311E07",
        },
        background: {
            default: "#F2F2F2",
            paper: "#051A27"
        },
        text: {
            primary: "#2D2D2D",
            secondary: "#FFFFFF",
        }
    },
    typography: {
        fontFamily: "Rubik, serif",
        h1: {
            fontSize: "40px",
            fontWeight: 900,
            color: "#2D2D2D"
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "#ffffff",
                    boxShadow: "0px 4px 22px 0px rgba(34, 60, 80, 0.2)"
                }
            }
        }
    }
})

export default AppTheme;

