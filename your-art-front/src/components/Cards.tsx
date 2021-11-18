import Container from '@mui/material/Container';
import React from 'react';
import Grid from "@mui/material/Grid";
import PhotoCard from "./PhotoCard";

const post = {
    title: 'Featured post',
    date: 'Nov 12',
    description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
};

const Cards = () => {
    return (
        <Container maxWidth="lg" >
            <Grid container spacing={5}>
                <PhotoCard post={post}/>
                <PhotoCard post={post}/>
                <PhotoCard post={post}/>
                <PhotoCard post={post}/>
            </Grid>
        </Container>
    );
};

export default Cards;