import React, {FC} from 'react';
import Grid from "@mui/material/Grid";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {grey} from "@mui/material/colors";

interface FeaturedPostProps {
    post: {
        date: string;
        description: string;
        image: string;
        imageLabel: string;
        title: string;
    };
}

const PhotoCard: FC<FeaturedPostProps> = (props) => {
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex', backgroundColor: grey[900] }}>
                    <CardContent sx={{flex: 1, color: '#fff'}}>
                        <Typography component="h2" color="inherit" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="inherit">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" color="inherit" paragraph>
                            {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="inherit">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{width: 160, display: {xs: 'none', sm: 'block'}}}
                        image={post.image}
                        alt={post.imageLabel}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default PhotoCard;