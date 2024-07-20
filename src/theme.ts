import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#232323",
        },
        secondary: {
            main: "#4f8e3e",
        },
    },
    typography: {
        fontFamily: [
            "system-ui",
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});

// Aplicando responsiveFontSizes após criar o tema
const responsiveTheme = responsiveFontSizes(theme);
export default responsiveTheme;
