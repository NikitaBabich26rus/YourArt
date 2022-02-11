import React, {FC, useEffect, useMemo, useState} from 'react';
import {ArtsModel} from "../../api/Models";
import ApiSingleton from "../../api/Api";
import Grid from "@mui/material/Grid";
import PhotoCard from "../PhotoCard";
import {Pagination, Stack} from "@mui/material";
import Container from "@mui/material/Container";
import {RouteComponentProps} from "react-router";
import Typography from "@mui/material/Typography";

interface IFilterPageCites {
    city: string;
}

const FilterPageCities: FC<RouteComponentProps<IFilterPageCites>> = (props) => {
    const [page, setPage] = useState(1)
    const [cards, setCards] = useState<ArtsModel[]>([])
    const city = props.match.params.city

    const getPageContent = async () => {
        const data = await ApiSingleton._artsApi.getArtsOfTheSameCity(city, page)
        setCards(data)
    }

    useEffect(() => {
        (async () => {
            await getPageContent()
        })()
    }, [page])

    return (
        <Container maxWidth="md">
            <Grid sx={{ textAlign: 'center', marginTop: '20px', color: '#e0e0e0' }}>
                <Typography variant='h4' >
                    Statistics on the sales of paintings in cities: {city}
                </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                {cards.map((card, index) => {
                    return (
                        <PhotoCard {...card}/>
                    )
                })}
            </Grid>
            <Grid
                container
                justifyContent="center"
                sx={{
                    marginTop: '24px'
                }}
            >
                <Grid item>
                    <Stack spacing={2}>
                        <Pagination
                            color="secondary"
                            size="large"
                            count={10}
                            page={page}
                            onChange={(event: React.ChangeEvent<unknown>, value: number) => setPage(value)}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FilterPageCities;