import React, {FC, useMemo} from 'react'
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import Header from "./components/Header";
import Main from "./components/Main";
import Cards from "./components/Cards";

const App: FC = () => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light')

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    )

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    )

    return (
        <ThemeProvider theme={theme}>
            <div style={{ marginBottom: '50px' }}>
                <Header/>
                <Main/>
                <Cards/>
            </div>
        </ThemeProvider>
    )
}

export default App
