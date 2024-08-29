import { createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

export const darkPallete = createPalette({
    mode: 'dark',
    text: {
        primary: '#ffffff',
    },

    primary: {
        main: '#7ce1f7',
        light: '#d9f6fa',
        dark: '#7ce1f7',
        contrastText: '#ffffff'
    },
    //Can add secondary if needed
    error: {
        main: '#6B2737',
        light: '#7D3547',
        dark: '#541C2A',
        contrastText: '#ffffff'
    },
    warning: {
        main: '#D45C21',
        light: '#B24C1D',
        dark: '#E66D36',
        contrastText: '#ffffff'
    },
    info: {
        main: '#241D34',
        light: '#2E283E',
        dark: '#1A1527',
        contrastText: '#ffffff'
    },
    success: {
        main: '#388E3C',
        light: '#459947',
        dark: '#2D7130',
        contrastText: '#ffffff'
    },
    background:
    {
        default: '#20242d',
        paper: '#000000'
    }
}
)

export const theme = createTheme({
    palette: darkPallete,
    typography: {
        button: {
            textTransform: 'none'
        },
        fontFamily: [
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
        ].join(','),
    },
});