import React, {FC, useMemo} from 'react'
import {createTheme, ThemeProvider} from "@mui/material";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Art from "./components/Art";
import Statistics from "./components/Statistics";

const App: FC = () => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark')

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
            <Header/>
            <div style={{marginBottom: '50px'}}>
                <Route path={'/'} exact>
                    <Main/>
                </Route>
                <Route path="/art/:id" exact component={Art}/>
                <Route path="/statistics" exact component={Statistics}/>
            </div>
        </ThemeProvider>
    )
}

export default App
