import React, {FC} from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics: FC = () => {

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

    return (
        <Container maxWidth="md">
            <Typography>
                Statistics
            </Typography>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </Container>
    )
}

export default Statistics;