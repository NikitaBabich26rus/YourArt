import React, {FC, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';
import {ArtsModel} from "../api/Models";
import ApiSingleton from "../api/Api";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";

interface IArtProps {
    id: string,
}

const Art: FC<RouteComponentProps<IArtProps>> = (props) => {

    const [art, setArt] = useState<ArtsModel>({})

    const getArtById = async () => {
        const art = await ApiSingleton._artsApi.getArtById(+props.match.params.id)
        setArt(art)
    }

    useEffect(()=> {
        getArtById()
    }, [props])

    return (
        <Container maxWidth="md" style={{ marginTop: '20px', color: '#e0e0e0' }} >
            <Grid container xs={12} justifyContent="center">
                <Grid item>
                    <Typography variant="h3" >
                        {art.art1}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} spacing={4} style={{ marginTop: '16px' }}>
                <Grid item xs={12} md={6}>
                    <img
                        src={art.image}
                        style={{ maxWidth: '100%' }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                        Author: {art.author}
                    </Typography>
                    <Typography variant="h6">
                        Auction: {art.auction}
                    </Typography>
                    <Typography variant="h6">
                        Century: {art.century}
                    </Typography>
                    <Typography variant="h6">
                        Nationality: {art.nationality}
                    </Typography>
                    <Typography variant="h6">
                        Gender: {art.sex}
                    </Typography>
                    <Typography variant="h6">
                        City: {art.city}
                    </Typography>
                    <Typography variant="h6">
                        Technique: {art.technique}
                    </Typography>
                    <Typography variant="h6">
                        Price: {art.price}USD
                    </Typography>
                    <Typography variant="h6">
                        <Link href={art.triedUrl} underline="hover">
                            Site
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {art.description}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Art;