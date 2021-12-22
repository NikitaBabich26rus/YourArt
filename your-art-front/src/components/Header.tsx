import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './../styles/Header.css';
import {FC} from "react";
import {Link} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from "@mui/material/Grid";
import SearchField from "./SearchField";

const Header: FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar className="header" position="static" sx={{ width: '100%' }}>
                <Toolbar className="header">
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography>
                                <Link
                                    component="button"
                                    onClick={() => window.location.assign("/")}
                                    sx={{flexGrow: 1, color: '#e0e0e0'}}
                                    variant="h6"
                                    underline="hover"
                                    color="inherit"
                                >
                                    YourArt
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <SearchField/>
                        </Grid>
                        <Grid item>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                                onClick={handleClick}
                                sx={{ color: '#e0e0e0' }}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                sx={{ color: '#e0e0e0' }}
                            >
                                <MenuItem
                                    onClick={() => window.location.assign("/statistics")}
                                    sx={{ color: '#e0e0e0' }}
                                >
                                    Statistics
                                </MenuItem>
                                <MenuItem sx={{ color: '#e0e0e0' }}>
                                    Account
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header