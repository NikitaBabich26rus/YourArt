import Grid from '@mui/material/Grid';
import React, {FC} from 'react';
import './../styles/Main.css';
import {Link, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Cards from "./Cards";
import {url} from "inspector";

function Main() {

    return (
        <div>
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 6,
                    height: '300px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url('https://www.christies.com/img/LotImages/2005/NYR/2005_NYR_01572_0405_000(110208).jpg')`
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />
                <Grid container>
                    <Grid item md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
                            }}
                        >
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                YourArt
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                Multiple lines of text that form the lede, informing new readers
                                quickly and efficiently about what's most interesting in this post's contents.
                            </Typography>
                            <Link variant="subtitle1" color="inherit" href="#">
                                Continue reading…
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Cards/>
        </div>
    )
}

export default Main;