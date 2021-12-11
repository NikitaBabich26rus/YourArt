import React, {FC} from 'react';
import Grid from "@mui/material/Grid";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {grey} from "@mui/material/colors";
import {ArtsModel} from "../api/Models";

const PhotoCard: FC<ArtsModel> = (props) => {
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" onClick={() => window.location.assign('/art/' + props.id)}>
                <Card sx={{ display: 'flex', backgroundColor: grey[900] }}>
                    <CardContent sx={{flex: 1, color: '#fff'}}>
                        <Typography component="h2" color="inherit" variant="h5">
                            {props.art1}
                        </Typography>
                        <Typography variant="subtitle1" color="inherit">
                            {props.author}
                        </Typography>
                        <Typography variant="subtitle1" color="inherit">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{height: 200, width: 160, display: {xs: 'none', sm: 'block'}}}
                        image={props.image}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default PhotoCard;