import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './../styles/Header.css';
import {FC} from "react";

const Header: FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className="header" position="static">
                <Toolbar className="header">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button
                        color="inherit"
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header