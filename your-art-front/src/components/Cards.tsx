import Container from '@mui/material/Container';
import React, {FC, useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import PhotoCard from "./PhotoCard";
import ApiSingleton from "../api/Api";
import {Pagination, Stack} from "@mui/material";
import {ArtsModel} from "../api/Models";

const Cards: FC = () => {
    const [page, setPage] = useState(1)
    const [cards, setCards] = useState<ArtsModel[]>([])

    const getPageContent = async () => {
        const data = await ApiSingleton._artsApi.getPageContent(page)
        setCards(data)
    }

    useEffect(() => {
        getPageContent()
    }, [page])

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
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
    );
};

export default Cards;